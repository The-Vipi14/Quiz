import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/users/Users";
import Creators from "./pages/creators/creators";


function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard/>} />
        <Route path="users" element={<Users/> } />
        <Route path="creators" element={<Creators/>} />
        {/* <Route path="quizzes" element={<Quizzes />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
