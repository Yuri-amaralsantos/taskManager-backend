import prisma from "../prisma/prisma.js";

export const createList = async (boardId: number, name: string) => {
  const existingList = await prisma.list.findFirst({
    where: { boardId, name },
  });
  if (existingList) {
    throw new Error("List with this name already exists in this board");
  }
  return prisma.list.create({
    data: { boardId, name },
  });
};

export const getListsByBoard = (boardId: number) => {
  return prisma.list.findMany({
    where: { boardId },
    include: {
      cards: {
        orderBy: { position: "asc" },
      },
    },
  });
};

export const getListById = (id: number) => {
  return prisma.list.findUnique({
    where: { id },
    include: {
      cards: {
        orderBy: { position: "asc" },
      },
    },
  });
};

export const updateList = async (id: number, name: string) => {
  const list = await prisma.list.findUnique({ where: { id } });
  if (!list) throw new Error("List not found");
  return prisma.list.update({ where: { id }, data: { name } });
};

export const deleteList = (id: number) => {
  return prisma.list.delete({ where: { id } });
};
