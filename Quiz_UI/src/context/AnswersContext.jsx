import { createContext, useState } from "react";

export const AnswersContext = createContext();

export const AnswerContextProvider = ({ children }) => {
  const [rightAnswers, setRightAnswers] = useState([]);
  const [checkedAnswer, setCheckedAnswer] = useState([]);
  const [currentSubjectQusAns, setCurrentSubjectQusAns] = useState([]);
  const [activeSubjectQuiz, setActiveSubjectQuiz] = useState([]);
  const [score, setScore] = useState(0);
     
  return (
    <AnswersContext.Provider
      value={{
        rightAnswers,
        setRightAnswers,
        checkedAnswer,
        setCheckedAnswer,
        score,
        setScore,
        currentSubjectQusAns,
        setCurrentSubjectQusAns,
        activeSubjectQuiz,
        setActiveSubjectQuiz,
      }}
    >
      {children}
    </AnswersContext.Provider>
  );
};
