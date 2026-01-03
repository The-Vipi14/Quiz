import { useEffect, useState } from "react";
import API from "../api/api";

const Profile = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const res = await API.get("/results/me");
      setResults(res.data.data);
    };
    fetchResults();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">My Profile</h1>

      {results.length === 0 && (
        <p className="text-gray-400">No quizzes solved yet.</p>
      )}

      <div className="space-y-6">
        {results.map((r) => (
          <div
            key={r._id}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800"
          >
            <h2 className="text-2xl font-semibold">
              {r.quizId.title}
            </h2>

            <p className="text-gray-400">
              Technology: {r.quizId.tech}
            </p>

            <p className="text-sm text-gray-500">
              Created by: {r.quizId.createdBy?.name}
            </p>

            <p className="mt-2">
              Score:{" "}
              <span className="text-green-400 font-bold">
                {r.score} / {r.totalQuestions}
              </span>{" "}
              ({r.percentage}%)
            </p>

            <p className="text-xs text-gray-500 mt-1">
              Solved on: {new Date(r.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
