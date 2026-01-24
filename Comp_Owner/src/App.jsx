import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";

const DashboardHome = () => <h1>Dashboard</h1>;
const Users = () => <h1>Users</h1>;
const Creators = () => <h1>Creators</h1>;
const Quizzes = () => <h1>Quizzes</h1>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="users" element={<Users />} />
        <Route path="creators" element={<Creators />} />
        <Route path="quizzes" element={<Quizzes />} />
      </Route>
    </Routes>
  );
}

export default App;
