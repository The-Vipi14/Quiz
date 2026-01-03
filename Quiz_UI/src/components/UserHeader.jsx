import { useNavigate, useLocation } from "react-router-dom";

const UserHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return null;

  const handleBack = () => {
    const blockedRoutes = ["/login", "/register", "/"];

    // Agar current route hi first user page hai
    if (blockedRoutes.includes(document.referrer)) {
      navigate("/technology");
      return;
    }

    // Extra safety: agar history empty ho
    if (window.history.length <= 2) {
      navigate("/technology");
      return;
    }

    navigate(-1);
  };

  return (
    <>
      {/* LEFT TOP → USER PROFILE */}
      <div
        className="fixed top-6 left-6 z-50 flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/profile")}
      >
        <div
          className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600
                        flex items-center justify-center font-bold text-white"
        >
          {user.name.charAt(0).toUpperCase()}
        </div>

        <span className="text-white font-medium hidden sm:block">
          {user.name}
        </span>
      </div>

      {/* RIGHT TOP → SAFE BACK */}
      <button
        onClick={handleBack}
        className="fixed top-6 right-6 z-50
                   px-5 py-2 rounded-full
                   bg-gray-800 text-white
                   hover:bg-gray-700 transition"
      >
        ← Back
      </button>
    </>
  );
};

export default UserHeader;
