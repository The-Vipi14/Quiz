import { createContext, useState } from "react";

export const AnswersContext = createContext();

export const AnswerContextProvider = ({ children }) => {
  const [rightAnswers, setRightAnswers] = useState([]);
  const [checkedAnswer, setCheckedAnswer] = useState([]);

  return (
    <AnswersContext.Provider
      value={{ rightAnswers, setRightAnswers, checkedAnswer, setCheckedAnswer }}
    >
      {children}
    </AnswersContext.Provider>
  );
};


