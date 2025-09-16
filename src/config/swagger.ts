import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import boardsDoc from "../docs/boards.doc.js";
import listsDoc from "../docs/lists.doc.js";
import cardsDoc from "../docs/cards.doc.js";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Boards API",
    version: "1.0.0",
    description:
      "API para gerenciamento de Boards, Lists e Cards estilo Trello",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  tags: [
    { name: "Boards", description: "Gerenciamento de boards" },
    { name: "Lists", description: "Gerenciamento de listas dentro dos boards" },
    { name: "Cards", description: "Gerenciamento de cards dentro das listas" },
  ],
  paths: {
    ...boardsDoc,
    ...listsDoc,
    ...cardsDoc,
  },
};

export function setupSwagger(app: Express): void {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDefinition));
}
