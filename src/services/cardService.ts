import prisma from "../../prisma/prisma";

export const createCard = async (
  listId: number,
  title: string,
  description: string
) => {
  const existingCard = await prisma.card.findFirst({
    where: { listId, title },
  });
  if (existingCard) {
    throw new Error("Card with this title already exists in this list");
  }
  return prisma.card.create({
    data: { listId, title, description },
  });
};

export const getCardById = (id: number) => {
  return prisma.card.findUnique({ where: { id } });
};

export const updateCard = async (
  id: number,
  title: string,
  description: string,
  listId: number
) => {
  const existingCard = await prisma.card.findFirst({
    where: { listId, title },
  });

  if (existingCard && existingCard.id !== id) {
    throw new Error("Another card with this title already exists in this list");
  }

  return prisma.card.update({
    where: { id },
    data: { title, description, listId },
  });
};

export const deleteCard = (id: number) => {
  return prisma.card.delete({ where: { id } });
};
