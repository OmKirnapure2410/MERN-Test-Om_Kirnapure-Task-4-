# MERN Full Stack Machine Test – Todo App

This repository contains the solution for the MERN Full-Stack Developer Machine Test.

---

## Tech Stack Used
- Frontend: React (Functional Components, Hooks)
- Backend: Node.js, Express
- Database: MongoDB (Mongoose ODM)
- Styling: Basic CSS (Responsive)

---

## Project Structure

MERN-Test-YourName/
├── frontend/
│   ├── src/
│   │   └── App.js
│   └── package.json
├── backend/
│   ├── server.js
│   ├── models/
│   │   └── Todo.js
│   └── package.json
└── README.md

---

##  Prerequisites

Make sure the following are installed on your system:
- Node.js
- MongoDB (Local or MongoDB Compass)

---
## 🔧 Environment Variables Setup

This project uses environment variables to keep sensitive information secure.

### 1. Create a `.env` file

Inside the **backend** folder, create a file named `.env`.

### 2️. Add the following variables
PORT=4000
MONGO_URI=your_mongodb_connection_string_here


### 3️. MongoDB Setup

You can use **either**:
- MongoDB Atlas (Free Tier), or
- Local MongoDB running on your system

Example (Local MongoDB): MONGO_URI=mongodb://127.0.0.1:27017/todoDB


### 4️. Important Notes
- The `.env` file is **not included in the repository** for security reasons.
- A `.env.example` file is provided as a reference.
- Make sure to restart the backend server after creating the `.env` file.


##  How to Run the Frontend
cd frontend
npm install
npm start

##  How to Run the Backend
cd backend
npm install
node server.js

Important: Make sure to start backend first.
