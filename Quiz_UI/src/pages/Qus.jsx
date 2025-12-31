// import { useLocation, useParams, useNavigate } from "react-router-dom";
// import { quizData } from "../data/qus";
// import QusComp from "../components/QusComp";
// import { useContext, useEffect, useState } from "react";
// import { AnswersContext } from "../context/AnswersContext";

// const Qus = () => {
//   const { state } = useLocation(); // 
//   const { tech } = useParams(); // quiz technology
//   const navigator = useNavigate();
//   const {
//     rightAnswers,
//     checkedAnswer,
//     score,
//     setScore,
//     activeSubjectQuiz,
//     setSctiveSubjectQuiz,
//   } = useContext(AnswersContext);

//   useEffect(() => {
//     setSctiveSubjectQuiz();
//   }, []);

//   const calculateResult = () => {
//     let score = 0;

//     rightAnswers.forEach((r) => {
//       const userAns = checkedAnswer.find((c) => c.id === r.id);
//       if (userAns && userAns.ans === r.ans) {
//         score++;
//       }
//     });
//     setScore(score);
//     // console.log(score);
//     navigator("/result");
//   };

//   return (
//     <>
//       <div className=" w-full bg-gradient-to-r from-black to-gray-900">
//         {quizData.map(
//           (qus, index) =>
//             // short circuit evaluation performed
//             qus.tech == state.tech && (
//               <div key={index} className="w-full bg-gray-900 p-20 ">
//                 <QusComp qus={qus.questions} />

//                 <button
//                   className="h-20 w-40 bg-green-700  rounded-2xl cursor-pointer text-white text-2xl font-semibold active:bg-green-800"
//                   onClick={() => {
//                     calculateResult();
//                   }}
//                 >
//                   submit
//                 </button>
//               </div>
//             )
//         )}
//       </div>
//     </>
//   );
// };

// export default Qus;




import { useLocation, useParams, useNavigate } from "react-router-dom";
import { quizData } from "../data/qus";
import QusComp from "../components/QusComp";
import { useContext, useEffect } from "react";
import { AnswersContext } from "../context/AnswersContext";

const Qus = () => {
  const { state } = useLocation();
  const { tech } = useParams();
  const navigator = useNavigate();

  const {
    rightAnswers,
    checkedAnswer,
    setScore,
    setSctiveSubjectQuiz,
  } = useContext(AnswersContext);

  useEffect(() => {
    setSctiveSubjectQuiz();
  }, []);

  const calculateResult = () => {
    let score = 0;
    rightAnswers.forEach((r) => {
      const userAns = checkedAnswer.find((c) => c.id === r.id);
      if (userAns && userAns.ans === r.ans) score++;
    });
    setScore(score);
    navigator("/result");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-10 py-16">
      {quizData.map(
        (qus, index) =>
          qus.tech === state.tech && (
            <div key={index} className="max-w-5xl mx-auto space-y-12">
              <h1 className="text-center text-5xl font-bold text-white mb-10">
                {qus.tech} Quiz 🚀
              </h1>

              <QusComp qus={qus.questions} />

              <div className="sticky bottom-6 flex justify-center">
                <button
                  onClick={calculateResult}
                  className="px-16 py-5 rounded-full text-2xl font-semibold text-white 
                  bg-gradient-to-r from-green-500 to-green-700 shadow-lg 
                  hover:scale-105 hover:shadow-2xl active:scale-95 transition-all"
                >
                  Submit Quiz
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Qus;
