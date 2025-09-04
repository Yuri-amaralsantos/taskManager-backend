import prisma from "../prisma/prisma";

export const createBoard = (name: string) => {
  return prisma.board.create({ data: { name } });
};

export const getBoards = () => {
  return prisma.board.findMany({ include: { cards: true } });
};

export const getBoardById = (id: number) => {
  return prisma.board.findUnique({
    where: { id },
    include: { cards: true },
  });
};

export const updateBoard = (id: number, name: string) => {
  return prisma.board.update({
    where: { id },
    data: { name },
  });
};

export const deleteBoard = (id: number) => {
  return prisma.board.delete({ where: { id } });
};

export const createCard = (
  boardId: number,
  title: string,
  description: string
) => {
  return prisma.card.create({
    data: { boardId, title, description },
  });
};
