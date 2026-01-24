import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">Owner Panel</h2>

      <nav className="sidebar-nav">
        <NavLink
          to="/"
          className="sidebar-link"
        >
          Dashboard
        </NavLink>

        <NavLink to="/users" className="sidebar-link">
          Users
        </NavLink>

        <NavLink to="/creators" className="sidebar-link">
          Creators
        </NavLink>

        <NavLink to="/quizzes" className="sidebar-link">
          Quizzes
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
