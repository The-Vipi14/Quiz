import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";

const QuizSolvers = () => {
  const { quizId } = useParams();
  const [solvers, setSolvers] = useState([]);

  useEffect(() => {
    const fetchSolvers = async () => {
      const res = await API.get(`/results/quiz/${quizId}`);
      setSolvers(res.data.data);
    };
    fetchSolvers();
  }, [quizId]);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Quiz Solvers</h1>

      {solvers.length === 0 && (
        <p className="text-gray-400">
          No one has solved this quiz yet.
        </p>
      )}

      <div className="space-y-4">
        {solvers.map((r) => (
          <div
            key={r._id}
            className="bg-gray-900 p-5 rounded-xl border border-gray-800"
          >
            <h2 className="text-xl font-semibold">
              {r.userId.name}
            </h2>

            <p className="text-sm text-gray-400">
              {r.userId.email}
            </p>

            <p className="mt-2">
              Score:{" "}
              <span className="text-green-400 font-bold">
                {r.score}/{r.totalQuestions}
              </span>{" "}
              ({r.percentage}%)
            </p>

            <p className="text-xs text-gray-500 mt-1">
              Solved on:{" "}
              {new Date(r.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSolvers;
