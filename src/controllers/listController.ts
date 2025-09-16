import { Router } from "express";
import * as listService from "../services/listService.js";
import * as cardService from "../services/cardService.js";

const router = Router();

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const list = await listService.getListById(id);
  if (!list) return res.status(404).json({ error: "List not found" });
  res.json(list);
});

router.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name } = req.body;
    const list = await listService.updateList(id, name);
    res.json(list);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: "Unexpected error" });
    }
  }
});

router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  await listService.deleteList(id);
  res.status(204).send();
});

router.post("/:listId/cards", async (req, res) => {
  try {
    const listId = Number(req.params.listId);
    const { title, description } = req.body;
    const card = await cardService.createCard(listId, title, description);
    res.status(201).json(card);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: "Unexpected error" });
    }
  }
});

export default router;
