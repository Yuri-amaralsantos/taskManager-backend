const listsDoc = {
  "/lists/{id}": {
    get: {
      tags: ["Lists"],
      summary: "Busca uma lista pelo ID",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      responses: {
        200: { description: "Lista encontrada" },
        404: { description: "Lista não encontrada" },
      },
    },
    put: {
      tags: ["Lists"],
      summary: "Atualiza uma lista pelo ID",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: { name: { type: "string" } },
              required: ["name"],
            },
          },
        },
      },
      responses: {
        200: { description: "Lista atualizada" },
      },
    },
    delete: {
      tags: ["Lists"],
      summary: "Remove uma lista pelo ID",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      responses: {
        204: { description: "Lista removida" },
      },
    },
  },
  "/boards/{boardId}/lists": {
    get: {
      tags: ["Lists"],
      summary: "Lista todas as listas de um board",
      parameters: [
        {
          name: "boardId",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Listas do board" },
      },
    },
    post: {
      tags: ["Lists"],
      summary: "Cria uma lista dentro de um board",
      parameters: [
        {
          name: "boardId",
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
              properties: { name: { type: "string" } },
              required: ["name"],
            },
          },
        },
      },
      responses: {
        201: { description: "Lista criada" },
      },
    },
  },
};

export default listsDoc;
