import { useEffect, useState } from "react";
import API from "../api/api";

const CreatorDashboard = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p className="text-white p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">My Quizzes</h1>

      {quizzes.length === 0 && (
        <p className="text-gray-400">No quizzes created yet.</p>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {quizzes.map((q) => (
          <div
            key={q._id}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800"
          >
            <h2 className="text-2xl font-semibold">{q.title}</h2>
            <p className="text-gray-400 mt-1">{q.tech}</p>

            <p className="text-sm text-gray-500 mt-2">
              Attempts: {q.totalAttempts}
            </p>

            <button
              onClick={() => deleteQuiz(q._id)}
              className="mt-4 px-5 py-2 bg-red-600 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorDashboard;
