import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state?.result) {
    return <p className="text-white">No result found</p>;
  }

  const { score, totalQuestions, percentage, answers } = state.result;

  let performance = "Needs Improvement 😐";
  let color = "text-red-400";

  if (percentage >= 80) {
    performance = "Excellent 🎉";
    color = "text-green-400";
  } else if (percentage >= 50) {
    performance = "Good Job 👍";
    color = "text-yellow-400";
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="bg-gray-900 rounded-3xl p-12 max-w-3xl w-full">

        <h1 className="text-5xl text-white text-center mb-6">
          Quiz Result 🎯
        </h1>

        <div className="text-center mb-8">
          <span className="text-7xl text-blue-400 font-bold">
            {score}
          </span>
          <span className="text-2xl text-gray-400">
            / {totalQuestions}
          </span>
        </div>

        <div className="w-full bg-gray-700 h-4 rounded-full mb-6">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <p className={`text-3xl text-center font-semibold mb-8 ${color}`}>
          {performance}
        </p>

        <div className="space-y-4 mb-8">
          {answers.map((a, i) => (
            <div
              key={i}
              className="bg-gray-800 p-4 rounded-xl"
            >
              <p className="text-gray-300">
                Q{i + 1} —{" "}
                <span className={a.isCorrect ? "text-green-400" : "text-red-400"}>
                  {a.isCorrect ? "Correct" : "Wrong"}
                </span>
              </p>

              {!a.isCorrect && (
                <p className="text-sm text-green-400">
                  Correct Answer: {a.correctAnswer}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate('/technology')}
            className="px-10 py-4 rounded-full bg-blue-600 text-white text-lg"
          >
            Try next
          </button>
        </div>

      </div>
    </div>
  );
};

export default Result;
