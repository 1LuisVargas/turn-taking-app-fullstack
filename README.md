# 🎟️ Turn-Taking App — Fullstack

> A full-stack queue management and turn-taking application that lets businesses and organizations manage customer flow efficiently. Built with a clean TypeScript REST API backend and a modern React frontend.

---

<!-- TO BE UPDATED ONCE I TAKE SCREENSHOTS
## 📸 Screenshots

> _Add screenshots of the app here — e.g. the queue dashboard, appointment form, and turn display screen._

---
-->

## ✨ Features

- **Queue Management** — Create, manage, and monitor customer/client queues in real time
- **Appointment Scheduling** — Book and track appointments with a structured form interface
- **Turn Tracking** — Keep track of whose turn it is and advance the queue
- **Clean Layered Architecture** — Backend organized by controllers, services, DTOs, entities, and routes
- **Component-Based Frontend** — Modular React UI with views, context, helpers, and reusable components
- **PostgreSQL Persistence** — Reliable relational database for storing queue and appointment data
- **TypeScript Backend** — Strongly typed server for safer, more maintainable code

---

## 🛠️ Tech Stack

| Layer      | Technology                              |
|------------|-----------------------------------------|
| Frontend   | React, Vite, JavaScript (JSX), CSS      |
| Backend    | Node.js, TypeScript, Express            |
| Database   | PostgreSQL                              |
| Dev Tools  | Nodemon, ESLint, tsconfig               |

---

## 📁 Project Structure

```
turn-taking-app-fullstack/
├── back/                   # Backend — Node.js + TypeScript REST API
│   ├── src/
│   │   ├── config/         # App configuration (DB connection, env, etc.)
│   │   ├── controllers/    # Route handlers / request-response logic
│   │   ├── dtos/           # Data Transfer Objects for input validation
│   │   ├── entities/       # Database entity definitions
│   │   ├── interfaces/     # TypeScript interfaces and types
│   │   ├── routes/         # Express route declarations
│   │   ├── services/       # Business logic layer
│   │   ├── index.ts        # App entry point
│   │   └── server.ts       # Express server setup
│   ├── .env.example        # Environment variable template
│   ├── nodemon.json        # Nodemon config for dev auto-reload
│   ├── tsconfig.json       # TypeScript compiler config
│   └── package.json
│
├── front/                  # Frontend — React + Vite SPA
│   ├── src/
│   │   ├── assets/         # Static assets (images, icons)
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # React context providers (global state)
│   │   ├── helpers/        # Utility functions
│   │   ├── modules/        # Feature modules
│   │   ├── views/          # Page-level view components
│   │   ├── App.jsx         # Root application component
│   │   └── main.jsx        # Vite entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── userStories.md          # Project user stories
└── Turn-Taking Application.drawio  # Database/architecture diagram
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/) (running locally or via a hosted service)

---

### 1. Clone the Repository

```bash
git clone https://github.com/1LuisVargas/turn-taking-app-fullstack.git
cd turn-taking-app-fullstack
```

---

### 2. Set Up the Backend

```bash
cd back
npm install
```

Copy the environment variables template and fill in your values:

```bash
cp .env.example .env
```

Open `.env` and configure your database connection and any other required variables:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
```

Start the backend in development mode:

```bash
npm run dev
```

The API server will start at `http://localhost:3000` (or whichever port you configured).

---

### 3. Set Up the Frontend

Open a new terminal tab/window:

```bash
cd front
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173` (Vite's default port).

---

## 🔌 API Endpoints

> Base URL: `http://localhost:3000`

| Method | Endpoint                | Description                        |
|--------|-------------------------|------------------------------------|
| GET    | `/appointments`         | Get all appointments / queue items |
| POST   | `/appointments/schedule`| Create a new appointment           |
| GET    | `/appointments/:id`     | Get a specific appointment by ID   |
| PUT    | `/appointments/:id`     | Cancel an appointment              |
| GET    | `/appointments/user/:id`| Get all appointments for 1 user    |
| GET    | `/users`                | Get all users                      |
| GET    | `/users/:id`            | Get a user by ID                   |
| POST   | `/users/register`       | Register a new user                |
| POST   | `/users/login`          | Login to an already created user   |

---

## 👤 Author

**Luis Vargas**
- GitHub: [@1LuisVargas](https://github.com/1LuisVargas)
- LinkedIn: [1LuisVargas](https://www.linkedin.com/in/1luisvargas/)
