const cardsDoc = {
  "/cards/{id}": {
    get: {
      tags: ["Cards"],
      summary: "Busca um card pelo ID",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      responses: {
        200: { description: "Card encontrado" },
        404: { description: "Card não encontrado" },
      },
    },
    put: {
      tags: ["Cards"],
      summary: "Atualiza um card",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                title: { type: "string" },
                description: { type: "string" },
              },
              required: ["title"],
            },
          },
        },
      },
      responses: {
        200: { description: "Card atualizado" },
      },
    },
    delete: {
      tags: ["Cards"],
      summary: "Remove um card",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      responses: {
        204: { description: "Card removido" },
      },
    },
  },
  "/cards/{id}/move": {
    patch: {
      tags: ["Cards"],
      summary: "Move um card para outra lista",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                toListId: { type: "integer" },
                position: { type: "integer" },
              },
              required: ["toListId"],
            },
          },
        },
      },
      responses: {
        200: { description: "Card movido" },
      },
    },
  },
  "/lists/{listId}/cards": {
    post: {
      tags: ["Cards"],
      summary: "Cria um card dentro de uma lista",
      parameters: [
        {
          name: "listId",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                title: { type: "string" },
                description: { type: "string" },
              },
              required: ["title"],
            },
          },
        },
      },
      responses: {
        201: { description: "Card criado" },
      },
    },
  },
};

export default cardsDoc;
