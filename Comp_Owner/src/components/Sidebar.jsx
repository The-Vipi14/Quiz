import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside>
        <h2>Owner pannel</h2>
        <nav>
          <NavLink to="">Dashboard</NavLink>
          <NavLink to="">Users</NavLink>
          <NavLink to="">Creators</NavLink>
          <NavLink to="">Quizzes</NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
