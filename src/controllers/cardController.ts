import { Request, Response } from "express";
import * as cardService from "../services/cardService";

export const updateCard = async (req: Request, res: Response) => {
  const { title, description, status } = req.body;
  try {
    const card = await cardService.getCardById(Number(req.params.id));
    if (!card) return res.status(404).json({ error: "Card not found" });

    const updatedCard = await cardService.updateCard(
      Number(req.params.id),
      title,
      description,
      status,
      card.boardId
    );
    res.json(updatedCard);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteCard = async (req: Request, res: Response) => {
  try {
    await cardService.deleteCard(Number(req.params.id));
    res.json({ deleted: true });
  } catch (err: any) {
    res.status(500).json({ error: "Failed to delete card" });
  }
};
