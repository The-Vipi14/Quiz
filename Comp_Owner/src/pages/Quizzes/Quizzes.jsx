import { Link } from "react-router-dom";
import { getAllQuizzes } from "../../utils/API";
import { useEffect, useState } from "react";

const Quizzes = () => {
  const [data, setData] = useState([]);
  const [tech, setTech] = useState("HTML");
  const [filteredQuizzes, setTilteredQuizzes] = useState([]);

  useEffect(() => {
    getAllQuizzes()
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const filtered = data.filter((q) => q.tech === tech);
    setTilteredQuizzes(filtered);
  }, [tech,data]);

  return (
    <>
      <div className="all-quizzes">
        <h2>Quizzes</h2>

        <div className="technologies">
          <ul>
            <li
              onClick={() => {
                setTech("HTML");
              }}
            >
              HTML
            </li>
            <li
              onClick={() => {
                setTech("CSS");
              }}
            >
              CSS
            </li>
            <li
              onClick={() => {
                setTech("JavaScript");
              }}
            >
              JAVASCRIPT
            </li>
            <li
              onClick={() => {
                setTech("React");
              }}
            >
              REACT.JS
            </li>
            <li
              onClick={() => {
                setTech("Node.js");
              }}
            >
              NODE.JS
            </li>
            <li
              onClick={() => {
                setTech("Express");
              }}
            >
              EXPRESS.JS
            </li>
            <li
              onClick={() => {
                setTech("MongoDB");
              }}
            >
              MONGODB
            </li>
            <li
              onClick={() => {
                setTech("C Programming");
              }}
            >
              C
            </li>
            <li
              onClick={() => {
                setTech("C++ Programming");
              }}
            >
              C++
            </li>
            <li
              onClick={() => {
                setTech("Java Programming");
              }}
            >
              JAVA
            </li>
          </ul>
        </div>

        {filteredQuizzes.map((quiz) => (
          <div key={quiz._id}>{quiz.tech}</div>
        ))}
      </div>
    </>
  );
};

export default Quizzes; 