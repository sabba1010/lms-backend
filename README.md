# Clent-11 Backend (Express + MongoDB)

This is a scaffold backend for the `clent-11` frontend project in the same workspace.

## What is included

- Express app (`app.js`)
- MongoDB connection helper (`config/db.js`)
- Course and User models
- REST routes:
  - `GET /api/courses`
  - `POST /api/courses`
  - `GET /api/courses/:id`
  - `GET /api/users`
  - `GET /api/users/:id`
  - `POST /api/auth/register`
  - `POST /api/auth/login`

## Setup

1. `cd Backend`
2. `npm install`
3. Copy `.env.example` to `.env`
4. Set `MONGO_URI` and `PORT` in `.env` (or use default `mongodb://localhost:27017/clent11`)
5. `npm run dev` (or `npm start`)

## Notes

- Passwords are stored in plaintext in this scaffold (for quick setup). Add hashing (bcrypt) before production.
- Auth currently returns placeholder token; integrate JWT in the next step.
- Frontend is intentionally not connected automatically. Use API endpoints from `clent-11` via `fetch` / `axios` when ready.
