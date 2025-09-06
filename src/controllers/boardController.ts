import { Request, Response } from "express";
import * as boardService from "../services/boardService";

export const createBoard = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const board = await boardService.createBoard(name);
    res.status(201).json(board);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getBoards = async (_req: Request, res: Response) => {
  try {
    const boards = await boardService.getBoards();
    res.json(boards);
  } catch (err: any) {
    res.status(500).json({ error: "Failed to fetch boards" });
  }
};

export const getBoardById = async (req: Request, res: Response) => {
  try {
    const board = await boardService.getBoardById(Number(req.params.id));
    if (!board) return res.status(404).json({ error: "Board not found" });
    res.json(board);
  } catch (err: any) {
    res.status(500).json({ error: "Failed to fetch board" });
  }
};

export const updateBoard = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const board = await boardService.updateBoard(Number(req.params.id), name);
    res.json(board);
  } catch (err: any) {
    // Handles duplicate name error
    res.status(400).json({ error: err.message });
  }
};

export const deleteBoard = async (req: Request, res: Response) => {
  try {
    await boardService.deleteBoard(Number(req.params.id));
    res.json({ deleted: true });
  } catch (err: any) {
    res.status(500).json({ error: "Failed to delete board" });
  }
};

export const createCard = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  try {
    const card = await boardService.createCard(
      Number(req.params.boardId),
      title,
      description
    );
    res.status(201).json(card);
  } catch (err: any) {
    // Handles duplicate title in board
    res.status(400).json({ error: err.message });
  }
};
