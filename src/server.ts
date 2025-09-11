import express from "express";
import cors from "cors";

import boardController from "./controllers/boardController";
import listController from "./controllers/listController";
import cardController from "./controllers/cardController";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/boards", boardController);
app.use("/lists", listController);
app.use("/cards", cardController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
