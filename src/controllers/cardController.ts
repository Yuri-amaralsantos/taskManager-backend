import { Request, Response } from "express";
import * as cardService from "../services/cardService";

export const updateCard = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const card = await cardService.updateCard(
    Number(req.params.id),
    title,
    description
  );
  res.json(card);
};

export const deleteCard = async (req: Request, res: Response) => {
  await cardService.deleteCard(Number(req.params.id));
  res.json({ deleted: true });
};
