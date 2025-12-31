// import { useContext, useEffect , useState} from "react";
// import { AnswersContext } from "../context/AnswersContext";

// const Result = () => {
//   const {
//     score,
//     rightAnswers,
//     checkedAnswer,
//     currentSubjectQusAns,
//     setCurrentSubjectQusAns,
//   } = useContext(AnswersContext);

//   const [showUsersAnsWithRight, setShowUsersAnsWithRight] = useState([])

//   useEffect(() => {
//     console.log(rightAnswers)
//     console.log(checkedAnswer)
//   }, []);
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
//       <div className="bg-gray-800 rounded-2xl shadow-xl p-10 max-w-md w-full text-center border border-gray-700">
//         <h1 className="text-4xl font-bold text-white mb-4">Quiz Result 🎯</h1>

//         <p className="text-gray-300 text-lg mb-6">Here’s how you performed:</p>

//         <div className="bg-gray-900 rounded-xl py-6 mb-6 border border-gray-700">
//           <span className="text-6xl font-extrabold text-blue-400">{score}</span>
//         </div>

//         <button
//           onClick={() => window.location.reload()}
//           className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-white"
//         >
//           Try Again
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Result;



import { useContext } from "react";
import { AnswersContext } from "../context/AnswersContext";

const Result = () => {
  const { score, rightAnswers, checkedAnswer } = useContext(AnswersContext);

  const total = rightAnswers.length;
  const percentage = total ? Math.round((score / total) * 100) : 0;

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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-6">
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-12 max-w-lg w-full text-center shadow-2xl">

        <h1 className="text-5xl font-extrabold text-white mb-4">
          Quiz Result 🎯
        </h1>

        <p className="text-gray-400 mb-10">
          Here’s how you performed in this quiz.
        </p>

        {/* Score */}
        <div className="mb-8">
          <span className="text-7xl font-black text-blue-400">{score}</span>
          <span className="text-2xl text-gray-400"> / {total}</span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-800 rounded-full h-4 mb-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <p className={`text-3xl font-semibold mb-10 ${color}`}>
          {performance}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mb-10 text-center">
          <Stat label="Correct" value={score} color="text-green-400" />
          <Stat label="Wrong" value={total - score} color="text-red-400" />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <button
            onClick={() => window.location.reload()}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg
            hover:scale-105 active:scale-95 transition-all"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ label, value, color }) => (
  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
    <p className="text-gray-400 mb-2">{label}</p>
    <p className={`text-4xl font-bold ${color}`}>{value}</p>
  </div>
);

export default Result;
