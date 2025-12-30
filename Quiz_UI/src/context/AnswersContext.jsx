import { createContext, useState } from "react";

export const AnswersContext = createContext();

export const AnswerContextProvider = ({ children }) => {
  const [rightAnswers, setRightAnswers] = useState([]);
  const [checkedAnswer, setCheckedAnswer] = useState([]);
  const [score, setScore] = useState(0)
  return (
    <AnswersContext.Provider
      value={{
        rightAnswers,
        setRightAnswers,
        checkedAnswer,
        setCheckedAnswer,
        score,
        setScore
      }}
    >
      {children}
    </AnswersContext.Provider>
  );
};
