import prisma from "../prisma/prisma.js";

export const createCard = async (
  listId: number,
  title: string,
  description?: string
) => {
  const lastCard = await prisma.card.findFirst({
    where: { listId },
    orderBy: { position: "desc" },
  });
  const position = lastCard ? lastCard.position + 1 : 0;

  return prisma.card.create({
    data: { listId, title, description, position },
  });
};

export const updateCard = async (
  id: number,
  title: string,
  description?: string
) => {
  const card = await prisma.card.findUnique({ where: { id } });
  if (!card) throw new Error("Card not found");

  return prisma.card.update({
    where: { id },
    data: { title, description },
  });
};

export const moveCard = async (
  cardId: number,
  toListId: number,
  position: number
) => {
  const card = await prisma.card.findUnique({ where: { id: cardId } });
  if (!card) throw new Error("Card not found");

  const fromListId = card.listId;

  await prisma.$transaction(async (prisma) => {
    if (fromListId === toListId) {
      const cards = await prisma.card.findMany({
        where: { listId: fromListId, id: { not: cardId } },
        orderBy: { position: "asc" },
      });

      cards.splice(position, 0, card);

      for (let i = 0; i < cards.length; i++) {
        await prisma.card.update({
          where: { id: cards[i].id },
          data: { position: i },
        });
      }
    } else {
      const fromCards = await prisma.card.findMany({
        where: { listId: fromListId, id: { not: cardId } },
        orderBy: { position: "asc" },
      });
      const toCards = await prisma.card.findMany({
        where: { listId: toListId },
        orderBy: { position: "asc" },
      });

      for (let i = 0; i < fromCards.length; i++) {
        await prisma.card.update({
          where: { id: fromCards[i].id },
          data: { position: i },
        });
      }

      toCards.splice(position, 0, card);

      for (let i = 0; i < toCards.length; i++) {
        await prisma.card.update({
          where: { id: toCards[i].id },
          data: { position: i, listId: toListId },
        });
      }
    }
  });

  return prisma.card.findUnique({ where: { id: cardId } });
};

export const getCardById = (id: number) =>
  prisma.card.findUnique({ where: { id } });

export const deleteCard = (id: number) => prisma.card.delete({ where: { id } });
