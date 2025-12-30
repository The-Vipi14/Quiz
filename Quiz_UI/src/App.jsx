import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AnswerContextProvider,
  AnswersContext,
} from "./context/AnswersContext";

import Home from "./pages/Home";
import Subject from "./pages/Subject";
import Qus from "./pages/Qus";

const App = () => {
  return (
    <>
      {" "}
      <AnswerContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technology" element={<Subject />} />
            <Route path="/qus/:tech" element={<Qus />} />
          </Routes>
        </BrowserRouter>
      </AnswerContextProvider>
    </>
  );
};

export default App;
