import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Subject from "./pages/Subject";
import Qus from "./pages/Qus";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Subject />} />
          <Route path="/qus/:tech" element={<Qus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
