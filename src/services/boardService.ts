import prisma from "../../prisma/prisma";
import { CardStatus } from "@prisma/client";

export const createBoard = async (name: string) => {
  const existingBoard = await prisma.board.findUnique({ where: { name } });
  if (existingBoard) throw new Error("Board with this name already exists");
  return prisma.board.create({ data: { name } });
};

export const getBoards = () => {
  return prisma.board.findMany({ include: { cards: true } });
};

export const getBoardById = (id: number) => {
  return prisma.board.findUnique({ where: { id }, include: { cards: true } });
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

export const createCard = async (
  boardId: number,
  title: string,
  description: string,
  status: CardStatus
) => {
  const existingCard = await prisma.card.findFirst({
    where: { boardId, title },
  });
  if (existingCard)
    throw new Error("Card with this title already exists in this board");
  return prisma.card.create({ data: { boardId, title, description, status } });
};
