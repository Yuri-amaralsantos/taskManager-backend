import { Request, Response } from "express";
import * as boardService from "../services/boardService";

export const createBoard = async (req: Request, res: Response) => {
  const { name } = req.body;
  const board = await boardService.createBoard(name);
  res.json(board);
};

export const getBoards = async (_req: Request, res: Response) => {
  const boards = await boardService.getBoards();
  res.json(boards);
};

export const getBoardById = async (req: Request, res: Response) => {
  const board = await boardService.getBoardById(Number(req.params.id));
  res.json(board);
};

export const updateBoard = async (req: Request, res: Response) => {
  const { name } = req.body;
  const board = await boardService.updateBoard(Number(req.params.id), name);
  res.json(board);
};

export const deleteBoard = async (req: Request, res: Response) => {
  await boardService.deleteBoard(Number(req.params.id));
  res.json({ deleted: true });
};

export const createCard = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const card = await boardService.createCard(
    Number(req.params.boardId),
    title,
    description
  );
  res.json(card);
};
