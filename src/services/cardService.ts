import prisma from "../prisma/prisma";

export const updateCard = (id: number, title: string, description: string) => {
  return prisma.card.update({
    where: { id },
    data: { title, description },
  });
};

export const deleteCard = (id: number) => {
  return prisma.card.delete({ where: { id } });
};
