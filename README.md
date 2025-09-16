# Task Manager app - Backend

[Acesse o Frontend](https://github.com/Yuri-amaralsantos/TaskManager-frontend.git)

## Sobre a api

Esta é a API do Task Manager App, responsável por gerenciar projetos, listas e tarefas. 

Ela fornece todos os endpoints necessários para que o frontend possa criar, editar, mover e excluir informações, garantindo uma experiência fluida e consistente para os usuários.

## Endpoints da API

| Método | Endpoint | Descrição |
|--------|---------|-----------|
| GET    | /boards | Lista todos os boards |
| GET    | /boards/:id | Busca um board pelo ID |
| POST   | /boards | Cria um novo board |
| PUT    | /boards/:id | Atualiza um board pelo ID |
| DELETE | /boards/:id | Remove um board |
| GET    | /boards/:boardId/lists | Lista todas as listas de um board |
| POST   | /boards/:boardId/lists | Cria uma lista dentro de um board |
| GET    | /lists/:id | Busca uma lista pelo ID |
| PUT    | /lists/:id | Atualiza uma lista pelo ID |
| DELETE | /lists/:id | Remove uma lista |
| POST   | /lists/:listId/cards | Cria um card de tarefa dentro de uma lista |
| GET    | /cards/:id | Busca um card de tarefa pelo ID |
| PUT    | /cards/:id | Atualiza um card de tarefa (título e descrição) |
| PATCH  | /cards/:id/move | Move um card de tarefa para outra lista / posição |
| DELETE | /cards/:id | Remove um card de tarefa |

## Demonstração

[Link da api](https://taskmanager-backend-p8tg.onrender.com/)

## Como rodar o projeto

### 1. Clone o repositório

git clone https://github.com/Yuri-amaralsantos/TaskManager-backend.git

### 2. Instale as dependências

npm install

### 3. Variáveis de ambiente

Clone o .env example e adicione as informações do banco de dados

### 4. Execute o projeto

npm run dev

A api estará disponível em http://localhost:3000


# Acesse o repositório da api

https://github.com/Yuri-amaralsantos/TaskManager-frontend.git


## Tecnologias Utilizadas

🔹 Prisma – Gerenciamento de banco de dados, migrações e consultas de forma segura e eficiente

🔹 Express – Framework Node.js para criação da API, gerenciamento de rotas, middlewares e tratamento de requisições/respostas HTTP

🔹 Cors – Controle de acesso entre frontend e backend

🔹 Node.js – Ambiente de execução JavaScript no servidor

## Desenvolvedor

Yuri Amaral Santos
🚀 [Portfólio](https://yuri-amaral-santos-portfolio.vercel.app)
 | [GitHub](https://github.com/Yuri-amaralsantos)
 | [LinkedIn](https://www.linkedin.com/in/yuri-amaral-santos-17264a25b)
