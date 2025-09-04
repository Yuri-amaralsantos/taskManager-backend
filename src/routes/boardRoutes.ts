import { Router } from "express";
import * as boardController from "../controllers/boardController";

const router = Router();

router.post("/", boardController.createBoard);
router.get("/", boardController.getBoards);
router.get("/:id", boardController.getBoardById);
router.put("/:id", boardController.updateBoard);
router.delete("/:id", boardController.deleteBoard);
router.post("/:boardId/cards", boardController.createCard);

export default router;
