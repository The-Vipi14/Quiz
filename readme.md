# 🚀 CoDiFy — Role-Based Quiz Platform (Full Stack)

CoDiFy is a full-stack, role-based quiz platform built to help learners strengthen their fundamentals through technology-wise quizzes, while allowing creators to build, manage, and analyze quizzes professionally.

This project follows real-world SaaS architecture:
- No navbar
- Flow-based navigation
- Strict role separation (User vs Creator)
- Clean UI/UX
- Scalable backend APIs

---

## 🔥 Core Features

### 👤 User
- Login / Register
- Select technology
- Attempt quizzes created by different creators
- View instant results
- Profile page with:
  - Solved quizzes history
  - Scores & percentages
  - Creator details
- Safe back navigation (never goes to login after login)

### 👨‍🏫 Creator
- Login / Register
- Creator dashboard (no navbar)
- Create quizzes (via API / UI)
- View all created quizzes
- See who solved which quiz
- Track total attempts
- Delete quizzes
- Profile + logout inside dashboard

### 🔐 Security & Access Control
- JWT-based authentication
- Role-based route protection
- User cannot access creator pages
- Creator cannot access user quiz flow
- Manual URL access blocked

---

## 🧠 Tech Stack

Frontend:
- React
- React Router DOM
- Tailwind CSS
- Context API
- Axios

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Role-based middleware

---

## 📂 Project Structure

       Frontend:
       src/
       ├── components/
       │   ├── ProtectedRoute.jsx
       │   ├── CreatorRoute.jsx
       │   ├── UserRoute.jsx
       │   └── UserHeader.jsx
       │
       ├── pages/
       │   ├── Home.jsx
       │   ├── Login.jsx
       │   ├── Register.jsx
       │   ├── Subject.jsx
       │   ├── TechQuizzes.jsx
       │   ├── Qus.jsx
       │   ├── Result.jsx
       │   ├── Profile.jsx
       │   ├── CreatorDashboard.jsx
       │   ├── CreateQuiz.jsx
       │   └── QuizSolvers.jsx
       │
       ├── context/
       │   └── AnswersContext.jsx
       │
       ├── api/
       │   └── api.js
       │
       └── App.jsx

Backend:
server/
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── quiz.controller.js
│   │   └── result.controller.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Quiz.js
│   │   └── Result.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── quiz.routes.js
│   │   └── result.routes.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── role.middleware.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
└── package.json

---

## 🚦 Application Flow

User Flow:
Home
→ Start Learning
→ Technology
→ Quiz
→ Result
→ Profile

Creator Flow:
Home
→ Start Learning
→ Creator Dashboard
→ Create Quiz
→ View Solvers

---

## 🧩 Frontend Highlights

- No Navbar — UI is flow-driven
- UserHeader:
  - Top-left: User profile shortcut
  - Top-right: Safe back button
- CreatorDashboard:
  - Profile info
  - Stats cards
  - Quiz cards with actions
- Profile Page:
  - User identity
  - Performance stats
  - Solved quiz history
  - Logout

---

## 🔌 Backend API Endpoints

Auth:
POST /api/auth/register
POST /api/auth/login

Quiz:
POST   /api/quizzes            (creator only)
GET    /api/quizzes/:tech
GET    /api/quizzes/:id
GET    /api/quizzes/creator/me
DELETE /api/quizzes/:id

Result:
POST /api/results/submit
GET  /api/results/me
GET  /api/results/quiz/:quizId

---

## 🧪 Adding Quizzes (Postman / API)

POST /api/quizzes
Authorization: Bearer <creator-token>
Content-Type: application/json

Notes:
- Only creator can access this route
- Each technology has its own quiz
- Used mainly during development

---

## 🛠 Environment Variables

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---

## ▶️ How to Run Project

Backend:
cd server
npm install
npm run dev

Frontend:
cd client
npm install
npm run dev

---

## 🎯 Key Design Decisions

- Role-based routing instead of UI hiding
- Flow-based UX instead of navbar
- Creator & User journeys completely isolated
- Clean Git history with step-wise commits
- Scalable for future features

---

## 🚀 Future Enhancements

- Difficulty levels (easy / medium / hard)
- Leaderboards (global & tech-wise)
- Randomized quizzes
- Quiz analytics
- Admin role
- Deployment (Vercel + Render)

---

## 👨‍💻 Author

Built with ❤️ by Vipin  
Project name: CoDiFy

Strong fundamentals build great developers.

---

## 📌 Note

This project is built as a learning + production-grade system, following real-world full-stack best practices.
