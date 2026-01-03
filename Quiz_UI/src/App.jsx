// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {
//   AnswerContextProvider,
//   AnswersContext,
// } from "./context/AnswersContext";

// import Home from "./pages/Home";
// import Subject from "./pages/Subject";
// import Qus from "./pages/Qus";
// import Result from "./components/Result";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// const App = () => {
//   return (
//     <>
//       {" "}
//       <AnswerContextProvider>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/register" element={<Register/>} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/technology" element={<Subject />} />
//             <Route path="/qus/:tech" element={<Qus />} />
//             <Route path="/result" element={<Result />} />
//           </Routes>
//         </BrowserRouter>
//       </AnswerContextProvider>
//     </>
//   );
// };

// export default App;

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

const App = () => {
  return (
    <AnswerContextProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected */}
          <Route
            path="/technology"
            element={
              <ProtectedRoute>
                <Subject />
              </ProtectedRoute>
            }
          />

          <Route
            path="/qus/:tech"
            element={
              <ProtectedRoute>
                <Qus />
              </ProtectedRoute>
            }
          />

          <Route
            path="/result"
            element={
              <ProtectedRoute>
                <Result />
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
            path="/creator/dashboard"
            element={
              <ProtectedRoute>
                <CreatorRoute>
                  <CreatorDashboard/>
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
