# TypeScript Task API

> REST API for task management built with TypeScript, Fastify, and SQLite

![Badge](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square\&logo=typescript\&logoColor=white)
![Badge](https://img.shields.io/badge/Fastify-000000?style=flat-square\&logo=fastify\&logoColor=white)
![Badge](https://img.shields.io/badge/SQLite-003B57?style=flat-square\&logo=sqlite\&logoColor=white)
![Badge](https://img.shields.io/badge/Zod-3068B7?style=flat-square\&logo=zod\&logoColor=white)
![Badge](https://img.shields.io/badge/Node.js-339933?style=flat-square\&logo=node.js\&logoColor=white)
![Badge](https://img.shields.io/badge/License-MIT-yellow?style=flat-square\&logo=open-source-initiative\&logoColor=white)

---

## 📌 Overview

This project is a REST API for task management built with TypeScript, Fastify, and SQLite.
The API provides full CRUD functionality for creating, listing, updating, and deleting tasks, with schema validation powered by Zod and logging handled by Consola.
It was designed as a backend study project focused on modern TypeScript development, REST architecture, and lightweight database integration.

## 🛠️ Technologies

* **TypeScript** — Main programming language used in the API
* **Fastify** — High-performance web framework for Node.js
* **SQLite (quick.db)** — Lightweight database used for data persistence
* **Zod** — Schema validation and type-safe request handling
* **Consola** — Structured logging system
* **Node.js** — Runtime environment for the application

## 📁 Project Structure

```bash id="m7k2fa"
.
├── src/                     # Application source code
│   ├── routes/              # API route definitions
│   ├── database/            # Database configuration and access
│   ├── schemas/             # Zod validation schemas
│   ├── utils/               # Utility functions and helpers
│   └── server.ts            # Main server entry point
│
├── build/                   # Compiled JavaScript output
├── .env                     # Environment variables
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── README.md                # Project documentation
└── LICENSE                  # Project license
```

## 🚀 Getting Started

Clone the repository:

```bash id="p4z9tw"
git clone https://github.com/LuizBMJ/typescript-task-api.git
```

Navigate to the project folder:

```bash id="x8m1ql"
cd typescript-task-api
```

Install the dependencies:

```bash id="f5k7ya"
npm install
```

Create a `.env` file in the project root:

```env id="t2v8np"
PORT=3000
```

Run the development server:

```bash id="d6q4re"
npm run dev
```

Build the TypeScript project:

```bash id="g1m9vc"
npm run build
```

Start the compiled application:

```bash id="s3x8lu"
npm run start
```

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
