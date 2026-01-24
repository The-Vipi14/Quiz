// with protected routes ============================ //

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnswerContextProvider } from "./context/AnswersContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Subject from "./pages/Subject";
import Qus from "./pages/Qus";
import Result from "./components/Result";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateQuiz from "./pages/CreateQuiz";
import CreatorRoute from "./components/CreatorRoute";
import CreatorDashboard from "./pages/CreatorDashboard";
import Navbar from "./components/Navbar";
import TechQuizzes from "./pages/TechQuizzes";
import Profile from "./pages/Profile";
import QuizSolvers from "./pages/QuizSolvers";
import UserRoute from "./components/UserRoutes";
import UserHeader from "./components/UserHeader";


const App = () => {
  return (
    <AnswerContextProvider>
      <BrowserRouter>
        <Routes>
          {/* ---------------- PUBLIC ---------------- */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ---------------- USER ONLY ---------------- */}
          <Route
            path="/technology"
            element={
              <ProtectedRoute>
                <UserRoute>
                  <>
                    <UserHeader />
                    <Subject />
                  </>
                </UserRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/technology/:tech"
            element={
              <ProtectedRoute>
                <UserRoute>
                  <>
                    <UserHeader />
                    <TechQuizzes />
                  </>
                </UserRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/quiz/:quizId"
            element={
              <ProtectedRoute>
                <UserRoute>
                  <>
                    <UserHeader />
                    <Qus />
                  </>
                </UserRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/result"
            element={
              <ProtectedRoute>
                <UserRoute>
                  <>
                    <UserHeader />
                    <Result />
                  </>
                </UserRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserRoute>
                  <>
                    <Profile />
                  </>
                </UserRoute>
              </ProtectedRoute>
            }
          />

          {/* ---------------- CREATOR ONLY ---------------- */}
          <Route
            path="/creator/dashboard"
            element={
              <ProtectedRoute>
                <CreatorRoute>
                  <CreatorDashboard />
                </CreatorRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/creator"
            element={
              <ProtectedRoute>
                <CreatorRoute>
                  <CreateQuiz />
                </CreatorRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/creator/quiz/:quizId"
            element={
              <ProtectedRoute>
                <CreatorRoute>
                  <QuizSolvers />
                </CreatorRoute>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AnswerContextProvider>
  );
};

export default App;
