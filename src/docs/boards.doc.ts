const boardsDoc = {
  "/boards": {
    get: {
      tags: ["Boards"],
      summary: "Lista todos os boards",
      responses: {
        200: {
          description: "Lista de boards",
        },
      },
    },
    post: {
      tags: ["Boards"],
      summary: "Cria um novo board",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string" },
              },
              required: ["name"],
            },
          },
        },
      },
      responses: {
        201: {
          description: "Board criado com sucesso",
        },
      },
    },
  },
  "/boards/{id}": {
    get: {
      tags: ["Boards"],
      summary: "Busca um board pelo ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Board encontrado" },
        404: { description: "Board não encontrado" },
      },
    },
    put: {
      tags: ["Boards"],
      summary: "Atualiza um board pelo ID",
      parameters: [
        {
          name: "id",
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
                name: { type: "string" },
              },
              required: ["name"],
            },
          },
        },
      },
      responses: {
        200: { description: "Board atualizado" },
      },
    },
    delete: {
      tags: ["Boards"],
      summary: "Remove um board pelo ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        204: { description: "Board removido" },
      },
    },
  },
};

export default boardsDoc;
