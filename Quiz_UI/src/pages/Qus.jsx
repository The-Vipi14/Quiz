import { useLocation, useParams, useNavigate } from "react-router-dom";
import { quizData } from "../data/qus";
import QusComp from "../components/QusComp";
import { useContext, useState } from "react";
import { AnswersContext } from "../context/AnswersContext";

const Qus = () => {
  const { state } = useLocation();
  const { tech } = useParams();
  const navigator = useNavigate();
  const { rightAnswers, checkedAnswer, score, setScore } =
    useContext(AnswersContext);

  // const calculateResult = () => {
  //   let scoreCount = 0;
  //   console.log(rightAnswers);
  //   console.log(checkedAnswer);
  //   for (let i = 0; i < rightAnswers.length; i++) {
  //     if (
  //       rightAnswers[i].id === checkedAnswer[i]?.id &&
  //       rightAnswers[i].ans === checkedAnswer[i]?.ans
  //     ) {
  //       scoreCount++;
  //     }
  //   }
  //   setScore(scoreCount);
  //   // console.log(score);
  //   console.log(scoreCount);
  // };

  const calculateResult = () => {
    let score = 0;

    rightAnswers.forEach((r) => {
      const userAns = checkedAnswer.find((c) => c.id === r.id);
      if (userAns && userAns.ans === r.ans) {
        score++;
      }
    });
    setScore(score);
    // console.log(score);
    navigator("/result");
  };

  return (
    <>
      <div className=" w-full bg-gradient-to-r from-black to-gray-900">
        {quizData.map(
          (qus, index) =>
            // short circuit evaluation performed
            qus.tech == state.tech && (
              <div key={index} className="w-full bg-gray-900 p-20 ">
                <QusComp qus={qus.questions} />

                <button
                  className="h-20 w-40 bg-green-700  rounded-2xl cursor-pointer text-white text-2xl font-semibold active:bg-green-800"
                  onClick={() => {
                    calculateResult();
                  }}
                >
                  submit
                </button>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Qus;
