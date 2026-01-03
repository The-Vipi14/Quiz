import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="w-full bg-gray-900 text-white px-10 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-green-400">
        CoDiFy
      </Link>

      <div className="flex gap-6 items-center">
        {user && (
          <Link to="/technology" className="hover:text-green-400">
            Quizzes
          </Link>
        )}

        {user?.role === "creator" && (
          <>
            <Link to="/creator" className="hover:text-blue-400">
              Create Quiz
            </Link>
            <Link to="/creator/dashboard" className="hover:text-yellow-400">
              Dashboard
            </Link>
          </>
        )}

        {user ? (
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
