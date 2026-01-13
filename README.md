## 1. Overview

Backend REST API built with Node.js (ESM), Express, and PostgreSQL using a layered architecture (Router → Controller → Service → Repository).

## 2. Tech Stack

- Node.js (ESM)
- Express.js
- PostgreSQL
- pg (database driver)
- dotenv (environment config)
- Layered architecture pattern

## 3. Endpoints

Document only what exists today (2 endpoints):

POST /api/v1/users
Body:
{
"name": "string",
"email": "string"
}
Response: 201 Created
{
"id": number,
"name": string,
"email": string,
"created_at": timestamp
}

GET /api/v1/users/:id
Response: 200 OK
{
"id": number,
"name": string,
"email": string,
"created_at": timestamp
}

## 4. Database Schema

users (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
email TEXT UNIQUE NOT NULL,
created_at TIMESTAMP DEFAULT NOW()
)

## 5. Local Setup

1. Clone the repository
2. Install dependencies: npm install
3. Create .env file with:
   PGUSER=postgres
   PGPASSWORD=your_password
   PGDATABASE=postgres
   PGHOST=localhost
   PGPORT=5432
4. Run database migrations manually:
   CREATE TABLE users (...);
5. Start server:
   npm start
   git add README.md
   git commit -m "docs: add API documentation and setup instructions"
   git push
