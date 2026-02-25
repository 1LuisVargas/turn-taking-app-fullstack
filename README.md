# 🎟️ Turn-Taking App (Full-Stack)

A full-stack turn-taking / queue management application built with **React, Node.js, Express, and MongoDB**.

This application simulates a real-world queue system where users can take turns, track position, and manage queue state dynamically. The project focuses on API design, state management, and full-stack integration.

---

## 📌 Features

- ➕ Join a queue
- 📊 View current queue state
- 🔄 Real-time queue updates (via API polling or refresh)
- ❌ Remove users from the queue
- 🧠 Backend-driven queue logic
- 🗂️ Structured MongoDB data models

---

## 🛠️ Tech Stack

### Frontend
- **React**
- **JavaScript (ES6+)**
- **CSS**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

---

## 🏗️ Architecture Overview

- The **React frontend** communicates with a REST API.
- The **Express backend** handles queue logic and validation.
- **MongoDB** stores queue state.
- Mongoose schemas define structured data models.
- API endpoints manage queue operations (create, read, delete).

---

## 📁 Project Structure

```
turn-taking-app-fullstack/
│
├── client/              # React frontend
│   ├── src/
│   └── package.json
│
├── server/              # Node.js + Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── package.json
│
└── README.md
```

---

## 🚧 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/1LuisVargas/turn-taking-app-fullstack.git
```

### 2. Install dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

---

### 3. Configure Environment Variables

Inside the `server` folder, create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

### 4. Run the Application

#### Start backend:

```bash
cd server
npm run dev
```

#### Start frontend:

```bash
cd client
npm start
```

The frontend will run on:
```
http://localhost:3000
```

The backend will run on:
```
http://localhost:5000
```

---

## 🔍 API Overview

Example endpoints:

- `GET /queue` → Get current queue
- `POST /queue` → Add user to queue
- `DELETE /queue/:id` → Remove user from queue

All queue logic is handled server-side to ensure consistency.

---

## 🎯 Learning Objectives

This project demonstrates:

- REST API design
- MVC structure in Express
- MongoDB schema modeling with Mongoose
- Frontend-backend integration
- State management in React
- Handling asynchronous requests

---

## 📌 Future Improvements

- 🔄 WebSockets for real-time updates
- 🔐 Authentication & role-based access
- 📱 Improved responsive UI
- 🧪 Add unit and integration tests
- 🚀 Deployment with Docker

---

## 🙌 Contributing

Feel free to fork the project and submit pull requests for improvements.

---

## 📜 License

This project is open source and available under the MIT License.
