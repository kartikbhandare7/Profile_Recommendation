# 🚀 Profile Recommendation API

A high-performance RESTful API built with **Node.js**, **Express.js**, and **PostgreSQL** that recommends the top three jobs based on a user's profile using a weighted scoring algorithm.

This project was developed as a Backend Engineering assignment demonstrating REST API design, layered architecture, raw SQL queries, JWT authentication, recommendation logic, and API documentation.

---

# 📌 Features

- RESTful API using Node.js & Express.js
- PostgreSQL Database
- Layered Architecture (Controller → Service → Repository)
- Raw SQL Queries (No ORM)
- JWT Authentication for Admin APIs
- CRUD Operations for Job Catalogue
- Profile-based Recommendation Engine
- Explain Recommendation Endpoint
- Swagger API Documentation
- Seed Script for Initial Catalogue
- Unit Tests using Jest & Supertest

---

# 🏗️ Tech Stack

| Technology | Usage |
|------------|-------|
| Node.js | Backend Runtime |
| Express.js | REST API |
| PostgreSQL | Database |
| pg | PostgreSQL Driver |
| JWT | Authentication |
| bcrypt | Password Hashing |
| Swagger | API Documentation |
| Jest | Unit Testing |
| Supertest | API Testing |
| dotenv | Environment Variables |

---

# 📁 Project Structure

```
ProfileRecommendation
│
├── src
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── repositories
│   ├── routes
│   ├── services
│   ├── seed
│   └── app.js
│
├── tests
│
├── .env
├── package.json
└── README.md
```

---

# 🗄️ Database Schema

## Items Table

Contains the complete job catalogue.

| Column |
|---------|
| id |
| title |
| description |
| category |
| min_age |
| max_age |
| min_experience |
| required_skills |
| location |
| salary |
| is_active |
| created_at |
| updated_at |

---

## Admin Users

Stores administrator credentials.

| Column |
|---------|
| id |
| username |
| password (bcrypt hash) |

---

# 🚀 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /auth/login | Generate JWT Token |

---

## Recommendation

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /recommend | Get Top 3 Job Recommendations |
| GET | /recommend/explain/:id | Explain Eligibility Logic |

---

## Items

(Admin Protected)

| Method | Endpoint |
|---------|----------|
| GET | /items |
| GET | /items/:id |
| POST | /items |
| PUT | /items/:id |
| DELETE | /items/:id |

---

# 🧠 Recommendation Algorithm

Each job is evaluated using a weighted scoring model.

| Criteria | Weight |
|----------|---------|
| Age Match | 20 |
| Experience | 20 |
| Category | 15 |
| Location | 15 |
| Salary Expectation | 10 |
| Matching Skill | 5 per skill |

The recommendation engine:

1. Fetches all active jobs.
2. Calculates a score for each job.
3. Filters jobs with zero score.
4. Sorts by descending score.
5. Returns the Top 3 recommendations.
6. Generates a human-readable explanation.

---

# 🔐 Authentication Flow

1. Admin logs in using username/password.
2. Password verified using bcrypt.
3. JWT Token generated.
4. Token required for all Item CRUD APIs.
5. Middleware validates every protected request.

---

# 📖 Swagger Documentation

Swagger UI is available at

http://localhost:3000/api-docs

It provides interactive API documentation for all endpoints.
<img width="1527" height="931" alt="image" src="https://github.com/user-attachments/assets/dac64696-c11c-469d-a896-9650df0acf82" />

---

# 🌱 Seed Data

A seed script inserts 15+ jobs into the PostgreSQL database.

Run

```bash
node src/seed/seed.js
```

---

# ▶️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Create

```
.env
```

Example

```
PORT=3000

DATABASE_URL=postgresql://postgres:password@localhost:5432/profile_recommendation

JWT_SECRET=your_secret
```

Run

```bash
npm run dev
```

---

# 🧪 Running Tests

```bash
npm test
```

---

# 📷 API Documentation Preview

*(Insert Swagger Screenshot Here)*

---

# 🔄 Recommendation Workflow

```
User Profile

        │

        ▼

POST /recommend

        │

        ▼

Recommendation Service

        │

        ▼

Fetch Active Jobs

        │

        ▼

Calculate Weighted Score

        │

        ▼

Sort Jobs

        │

        ▼

Top 3 Recommendations

        │

        ▼

Return Response
```

---

# 📈 Future Improvements

- Redis Caching
- Webhook Notifications
- Role-based Authentication
- Pagination
- Filtering & Searching
- Docker Deployment
- CI/CD Pipeline

---

# 👨‍💻 Author

Kartik Bhandare

Backend Developer

Java | Spring Boot | Node.js | PostgreSQL
