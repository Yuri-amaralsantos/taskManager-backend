import { Router } from "express";
import * as cardService from "../services/cardService";

const router = Router();

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const card = await cardService.getCardById(id);
  if (!card) return res.status(404).json({ error: "Card not found" });
  res.json(card);
});

router.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { title, description, listId } = req.body;
    const card = await cardService.updateCard(id, title, description, listId);
    res.json(card);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  await cardService.deleteCard(id);
  res.status(204).send();
});

export default router;
