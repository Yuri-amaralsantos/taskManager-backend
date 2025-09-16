import prisma from "../prisma/prisma.js";

export const createBoard = async (name: string) => {
  const existingBoard = await prisma.board.findUnique({ where: { name } });
  if (existingBoard) throw new Error("Board with this name already exists");
  return prisma.board.create({ data: { name } });
};

export const getBoards = () => {
  return prisma.board.findMany({
    include: {
      lists: {
        include: {
          cards: {
            orderBy: { position: "asc" },
          },
        },
      },
    },
  });
};

export const getBoardById = (id: number) => {
  return prisma.board.findUnique({
    where: { id },
    include: {
      lists: {
        include: {
          cards: {
            orderBy: { position: "asc" },
          },
        },
      },
    },
  });
};

export const updateBoard = async (id: number, name: string) => {
  const existingBoard = await prisma.board.findUnique({ where: { name } });
  if (existingBoard && existingBoard.id !== id) {
    throw new Error("Another board with this name already exists");
  }
  return prisma.board.update({ where: { id }, data: { name } });
};

export const deleteBoard = (id: number) => {
  return prisma.board.delete({ where: { id } });
};
