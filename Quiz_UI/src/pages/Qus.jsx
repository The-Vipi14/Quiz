// // import { useLocation, useParams, useNavigate } from "react-router-dom";
// // import { quizData } from "../data/qus";
// // import QusComp from "../components/QusComp";
// // import { useContext, useEffect, useState } from "react";
// // import { AnswersContext } from "../context/AnswersContext";

// // const Qus = () => {
// //   const { state } = useLocation(); //
// //   const { tech } = useParams(); // quiz technology
// //   const navigator = useNavigate();
// //   const {
// //     rightAnswers,
// //     checkedAnswer,
// //     score,
// //     setScore,
// //     activeSubjectQuiz,
// //     setSctiveSubjectQuiz,
// //   } = useContext(AnswersContext);

// //   useEffect(() => {
// //     setSctiveSubjectQuiz();
// //   }, []);

// //   const calculateResult = () => {
// //     let score = 0;

// //     rightAnswers.forEach((r) => {
// //       const userAns = checkedAnswer.find((c) => c.id === r.id);
// //       if (userAns && userAns.ans === r.ans) {
// //         score++;
// //       }
// //     });
// //     setScore(score);
// //     // console.log(score);
// //     navigator("/result");
// //   };

// //   return (
// //     <>
// //       <div className=" w-full bg-gradient-to-r from-black to-gray-900">
// //         {quizData.map(
// //           (qus, index) =>
// //             // short circuit evaluation performed
// //             qus.tech == state.tech && (
// //               <div key={index} className="w-full bg-gray-900 p-20 ">
// //                 <QusComp qus={qus.questions} />

// //                 <button
// //                   className="h-20 w-40 bg-green-700  rounded-2xl cursor-pointer text-white text-2xl font-semibold active:bg-green-800"
// //                   onClick={() => {
// //                     calculateResult();
// //                   }}
// //                 >
// //                   submit
// //                 </button>
// //               </div>
// //             )
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // export default Qus;

// import { useLocation, useParams, useNavigate } from "react-router-dom";
// import { quizData } from "../data/qus";
// import QusComp from "../components/QusComp";
// import { useContext, useEffect } from "react";
// import { AnswersContext } from "../context/AnswersContext";

// const Qus = () => {
//   const { state } = useLocation();
//   const { tech } = useParams();
//   const navigator = useNavigate();
  
//   const {
//     rightAnswers,
//     setRightAnswers,
//     checkedAnswer,
//     setCheckedAnswer,
//     score,
//     setScore,
//     currentSubjectQusAns,
//     setCurrentSubjectQusAns,
//     activeSubjectQuiz,
//     setActiveSubjectQuiz,
//   } = useContext(AnswersContext);

//   useEffect(() => {
//     setActiveSubjectQuiz();
//   }, []);

//   const calculateResult = () => {
//     let score = 0;
//     rightAnswers.forEach((r) => {
//       const userAns = checkedAnswer.find((c) => c.id === r.id);
//       if (userAns && userAns.ans === r.ans) score++;
//     });
//     setScore(score);
//     navigator("/result");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-10 py-16">
//       {quizData.map(
//         (qus, index) =>
//           qus.tech === state.tech && (
//             <div key={index} className="max-w-5xl mx-auto space-y-12">
//               <h1 className="text-center text-5xl font-bold text-white mb-10">
//                 {qus.tech} Quiz 🚀
//               </h1>

//               <QusComp qus={qus.questions} />

//               <div className="sticky bottom-6 flex justify-center">
//                 <button
//                   onClick={calculateResult}
//                   className="px-16 py-5 rounded-full text-2xl font-semibold text-white 
//                   bg-gradient-to-r from-green-500 to-green-700 shadow-lg 
//                   hover:scale-105 hover:shadow-2xl active:scale-95 transition-all"
//                 >
//                   Submit Quiz
//                 </button>
//               </div>
//             </div>
//           )
//       )}
//     </div>
//   );
// };

// export default Qus;





// =========================== with backend ======================== //



// import { useParams } from "react-router-dom";
// import { useEffect, useState, useContext } from "react";
// import API from "../API/api";
// import QusComp from "../components/QusComp";
// import { AnswersContext } from "../context/AnswersContext";
// import { useNavigate } from "react-router-dom";

// const Qus = () => {
//   const { tech } = useParams();
//   const navigate = useNavigate();

//   const {
//     rightAnswers,
//     checkedAnswer,
//     setScore,
//     setCurrentSubjectQusAns,
//   } = useContext(AnswersContext);

//   const [quiz, setQuiz] = useState(null);

//   useEffect(() => {
//     const fetchQuiz = async () => {
//       const res = await API.get(`/quizzes?tech=${tech}`);
//       setQuiz(res.data.data[0]); // first quiz
//       setCurrentSubjectQusAns(res.data.data[0].questions);
//     };

//     fetchQuiz();
//   }, [tech]);

//   const calculateResult = async () => {
//     let score = 0;
//     rightAnswers.forEach((r) => {
//       const userAns = checkedAnswer.find((c) => c.id === r.id);
//       if (userAns && userAns.ans === r.ans) score++;
//     });
//     setScore(score);
//     navigate("/result");
//   };

//   if (!quiz) return <p className="text-white">Loading...</p>;

//   return (
//     <div className="min-h-screen bg-black px-10 py-16">
//       <h1 className="text-center text-5xl text-white mb-10">
//         {quiz.title} 🚀
//       </h1>

//       <QusComp qus={quiz.questions} />

//       <div className="sticky bottom-6 flex justify-center">
//         <button
//           onClick={calculateResult}
//           className="px-16 py-5 rounded-full text-2xl font-semibold text-white bg-green-600"
//         >
//           Submit Quiz
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Qus;



// =============== updated ========================== //


import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import API from "../api/api";
import QusComp from "../components/QusComp";
import { AnswersContext } from "../context/AnswersContext";

const Qus = () => {
  const { tech } = useParams();
  const navigate = useNavigate();

  const {
    checkedAnswer,
    setCurrentSubjectQusAns,
  } = useContext(AnswersContext);

  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuiz = async () => {
      const res = await API.get(`/quizzes?tech=${tech}`);
      setQuiz(res.data.data[0]);
      setCurrentSubjectQusAns(res.data.data[0].questions);
      setLoading(false);
    };

    fetchQuiz();
  }, [tech]);

  const submitQuiz = async () => {
    try {
      const payload = {
        quizId: quiz._id,
        answers: checkedAnswer.map((a) => ({
          questionId: a.id,
          selectedAnswer: a.ans,
        })),
      };

      const res = await API.post("/quizzes/submit", payload);

      navigate("/result", {
        state: { result: res.data.result },
      });
    } catch (err) {
      console.error(err);
      alert("Submit failed");
    }
  };

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="min-h-screen bg-black px-10 py-16">
      <h1 className="text-center text-5xl text-white mb-10">
        {quiz.title} 🚀
      </h1>

      <QusComp qus={quiz.questions} />

      <div className="sticky bottom-6 flex justify-center">
        <button
          onClick={submitQuiz}
          className="px-16 py-5 rounded-full text-2xl font-semibold text-white bg-green-600"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default Qus;
