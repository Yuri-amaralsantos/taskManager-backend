import { Router } from "express";
import * as boardService from "../services/boardService.js";
import * as listService from "../services/listService.js";

const router = Router();

router.get("/", async (req, res) => {
  const boards = await boardService.getBoards();
  res.json(boards);
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const board = await boardService.getBoardById(id);
  if (!board) return res.status(404).json({ error: "Board not found" });
  res.json(board);
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const board = await boardService.createBoard(name);
    res.status(201).json(board);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: "Unexpected error" });
    }
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name } = req.body;
    const board = await boardService.updateBoard(id, name);
    res.json(board);
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
  await boardService.deleteBoard(id);
  res.status(204).send();
});

router.get("/:boardId/lists", async (req, res) => {
  const boardId = Number(req.params.boardId);
  const lists = await listService.getListsByBoard(boardId);
  res.json(lists);
});

router.post("/:boardId/lists", async (req, res) => {
  try {
    const boardId = Number(req.params.boardId);
    const { name } = req.body;
    const list = await listService.createList(boardId, name);
    res.status(201).json(list);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: "Unexpected error" });
    }
  }
});

export default router;
