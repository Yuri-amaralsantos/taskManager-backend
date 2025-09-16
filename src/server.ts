import express from "express";
import cors from "cors";

import boardController from "./controllers/boardController.js";
import listController from "./controllers/listController.js";
import cardController from "./controllers/cardController.js";
import { setupSwagger } from "./config/swagger.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://task-manager-frontend-eight-teal.vercel.app",
    ],
  })
);

setupSwagger(app);

app.use("/boards", boardController);
app.use("/lists", listController);
app.use("/cards", cardController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📖 Swagger docs available at http://localhost:${PORT}/api-docs`);
});
