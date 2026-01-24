import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../utils/api";

const TechQuizzes = () => {
  const { tech } = useParams();
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const res = await API.get(`/quizzes?tech=${tech}`);
      setQuizzes(res.data.data);
    };
    fetchQuizzes();
  }, [tech]);

  return (
    <div className="min-h-screen bg-black text-white p-10 pt-20">
      <h1 className="text-4xl font-bold mb-8">{tech} Quizzes</h1>

      {quizzes.length === 0 && (
        <p className="text-gray-400">No quizzes available.</p>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {quizzes.map((q) => (
          <div
            key={q._id}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800"
          >
            <h2 className="text-2xl font-semibold">{q.title}</h2>

            <p className="text-sm text-gray-400 mt-1">
              Created by:{" "}
              <span className="text-green-400">
                {q.createdBy?.name}
              </span>
            </p>

            <button
              onClick={() => navigate(`/quiz/${q._id}`)}
              className="mt-4 px-6 py-2 bg-blue-600 rounded"
            >
              Start Quiz →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechQuizzes;
