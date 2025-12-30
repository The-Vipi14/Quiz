import { useContext } from "react";
import { AnswersContext } from "../context/AnswersContext";

const Result = () => {
  const { score } = useContext(AnswersContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-10 max-w-md w-full text-center border border-gray-700">
        <h1 className="text-4xl font-bold text-white mb-4">Quiz Result 🎯</h1>

        <p className="text-gray-300 text-lg mb-6">Here’s how you performed:</p>

        <div className="bg-gray-900 rounded-xl py-6 mb-6 border border-gray-700">
          <span className="text-6xl font-extrabold text-blue-400">{score}</span>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-white"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Result;
