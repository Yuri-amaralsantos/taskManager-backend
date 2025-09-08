import prisma from "../../prisma/prisma";
import { CardStatus } from "@prisma/client";

export const getCardById = (id: number) => {
  return prisma.card.findUnique({
    where: { id },
  });
};

export const updateCard = async (
  id: number,
  title: string,
  description: string,
  status: CardStatus,
  boardId: number
) => {
  const existingCard = await prisma.card.findFirst({
    where: { boardId, title },
  });

  if (existingCard && existingCard.id !== id) {
    throw new Error(
      "Another card with this title already exists in this board"
    );
  }

  return prisma.card.update({
    where: { id },
    data: { title, description, status },
  });
};

export const deleteCard = (id: number) => {
  return prisma.card.delete({ where: { id } });
};
