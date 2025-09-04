import { Router } from "express";
import * as cardController from "../controllers/cardController";

const router = Router();

router.put("/:id", cardController.updateCard);
router.delete("/:id", cardController.deleteCard);

export default router;
