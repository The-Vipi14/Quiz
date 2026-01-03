import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API/api";

const CreatorDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchQuizzes = async () => {
    const res = await API.get("/quizzes/creator/me");
    setQuizzes(res.data.data);
    setLoading(false);
  };

  const deleteQuiz = async (id) => {
    if (!confirm("Delete this quiz?")) return;
    await API.delete(`/quizzes/${id}`);
    fetchQuizzes();
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  if (loading) {
    return <p className="text-white p-10">Loading...</p>;
  }

  const totalAttempts = quizzes.reduce(
    (sum, q) => sum + (q.totalAttempts || 0),
    0
  );
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      {/* HERO */}
      <div className="mb-12 flex items-center justify-between">
        {/* LEFT → Creator Profile */}
        <div className="flex items-center gap-6">
          <div
            className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600
                    flex items-center justify-center text-3xl font-bold"
          >
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h1 className="text-4xl font-extrabold">{user?.name}</h1>
            <p className="text-gray-400">{user?.email}</p>

            <span
              className="inline-block mt-2 px-4 py-1 text-sm rounded-full
                       bg-green-600/20 text-green-400"
            >
              Creator
            </span>
          </div>
        </div>

        {/* RIGHT → Logout */}
        <button
          onClick={handleLogout}
          className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700
               transition font-semibold"
        >
          Logout
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
        <StatCard title="Total Quizzes" value={quizzes.length} />
        <StatCard title="Total Attempts" value={totalAttempts} />
      </div>

      {/* CREATE QUIZ CTA */}
      <div className="mb-10">
        <button
          onClick={() => navigate("/creator")}
          className="px-10 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600
          text-xl font-semibold hover:scale-105 transition"
        >
          + Create New Quiz
        </button>
      </div>

      {/* QUIZ LIST */}
      {quizzes.length === 0 ? (
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">No quizzes created yet</h2>
          <p className="text-gray-400 mb-8">
            Start creating quizzes and help others build strong fundamentals.
          </p>

          <button
            onClick={() => navigate("/creator")}
            className="px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition"
          >
            Create Your First Quiz →
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizzes.map((q) => (
            <div
              key={q._id}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800
              hover:border-blue-500 hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-semibold mb-1">{q.title}</h2>

              <p className="text-gray-400 mb-2">{q.tech}</p>

              <p className="text-sm text-gray-500 mb-6">
                Attempts: {q.totalAttempts}
              </p>

              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => navigate(`/creator/quiz/${q._id}`)}
                  className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                >
                  View Solvers
                </button>

                <button
                  onClick={() => deleteQuiz(q._id)}
                  className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
    <p className="text-gray-400 text-sm mb-2">{title}</p>
    <p className="text-4xl font-bold">{value}</p>
  </div>
);

export default CreatorDashboard;
