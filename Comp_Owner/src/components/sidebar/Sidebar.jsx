// import { NavLink } from "react-router-dom";
// import "./sidebar.css";

// const Sidebar = () => {
//   return (
//     <aside className="sidebar">
//       <h2 className="sidebar-logo">CoDiFy</h2>

//       <nav className="sidebar-nav">
//         <NavLink
//           to="/"
//           className="sidebar-link"
//         >
//           Dashboard
//         </NavLink>

//         <NavLink to="/users" className="sidebar-link">
//           Users
//         </NavLink>

//         <NavLink to="/creators" className="sidebar-link">
//           Creators
//         </NavLink>

//         <NavLink to="/quizzes" className="sidebar-link">
//           Quizzes
//         </NavLink>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;



import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiUserCheck,
  FiClipboard,
} from "react-icons/fi";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-logo">CoDiFy</h2>
        <p className="sidebar-tagline">Admin Panel</p>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <span>Users</span>
          <strong>120</strong>
        </div>
        <div className="sidebar-stat">
          <span>Creators</span>
          <strong>18</strong>
        </div>
        <div className="sidebar-stat">
          <span>Quizzes</span>
          <strong>64</strong>
        </div>
      </div>

      <p className="sidebar-section">Main Menu</p>

      <nav className="sidebar-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <FiHome className="sidebar-icon" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <FiUsers className="sidebar-icon" />
          <span>Users</span>
        </NavLink>

        <NavLink
          to="/creators"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <FiUserCheck className="sidebar-icon" />
          <span>Creators</span>
        </NavLink>

        <NavLink
          to="/quizzes"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <FiClipboard className="sidebar-icon" />
          <span>Quizzes</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <p>Role: Admin</p>
        <span>v1.0.0</span>
      </div>
    </aside>
  );
};

export default Sidebar;
