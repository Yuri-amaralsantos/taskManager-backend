import express from "express";
import boardRoutes from "./routes/boardRoutes";
import cardRoutes from "./routes/cardRoutes";

const app = express();
app.use(express.json());

app.use("/boards", boardRoutes);
app.use("/cards", cardRoutes);

app.listen(3000, () => {
  console.log(" Server running at http://localhost:3000");
});
