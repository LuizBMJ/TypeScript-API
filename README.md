# TypeScript-API

API REST para gerenciamento de tarefas (CRUD completo) construída com TypeScript, Fastify e SQLite.

## Stack

- **TypeScript** — Linguagem principal
- **Fastify** — Framework web
- **SQLite (quick.db)** — Banco de dados
- **Zod** — Validação de dados
- **Consola** — Sistema de logs

## Pré-requisitos

- Node.js 18+

## Instalação

```bash
npm install
```

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor em modo desenvolvimento |
| `npm run build` | Compila o TypeScript |
| `npm run start` | Inicia o servidor compilado |
| `npm run watch` | Reinicia automaticamente em alterações |

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
```

## Endpoints

### Listar todas as tarefas
```
GET /tasks
```

Retorna um array com todas as tarefas.

### Buscar tarefa por ID
```
GET /tasks/:id
```

Retorna os dados da tarefa especificada.

### Criar tarefa
```
POST /tasks
```

**Body:**
```json
{
    "name": "Nome da tarefa"
}
```

**Resposta:**
```json
{
    "id": "uuid",
    "name": "Nome da tarefa",
    "status": "pending",
    "createdAt": "2025-01-01T00:00:00.000Z"
}
```

### Atualizar tarefa
```
PATCH /tasks/:id
```

**Body (parcial):**
```json
{
    "name": "Novo nome",
    "status": "progress"
}
```

### Deletar tarefa
```
DELETE /tasks/:id
```

## Status das Tarefas

- `pending` — Pendente
- `progress` — Em progresso
- `completed` — Concluída

## Licença

[![Licença MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)