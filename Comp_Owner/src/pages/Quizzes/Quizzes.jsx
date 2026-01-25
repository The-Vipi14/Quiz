import { Link } from "react-router-dom";
import { getAllQuizzes } from "../../utils/API";
import { useEffect, useState } from "react";
import "./quizzes.css";


const Quizzes = () => {
  const [data, setData] = useState([]);
  const [tech, setTech] = useState("HTML");
  const [filteredQuizzes, setTilteredQuizzes] = useState([]);
  const [showTech, setShowTech] = useState(5);

  useEffect(() => {
    getAllQuizzes()
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const filtered = data.filter((q) => q.tech === tech);
    setTilteredQuizzes(filtered);
  }, [tech, data]);

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "C++ Programming",
    "C Programming",
    "Java Programming",
  ];


  return (
    <>
      <div className="all-quizzes">
        <h2>Quizzes</h2>

        <div className="technologies-box">
          <ul>
            {technologies.slice(0, showTech).map((tech) => (
              <li key={tech} onClick={() => setTech(tech)}>
                {tech}
              </li>
            ))}
            <p  className="moreButton"
              onClick={() => {
                showTech === 5
                  ? setShowTech(technologies.length)
                  : setShowTech(5);
              }}
            >
              {showTech === 5 ? ">" : "X"}
            </p>


            {/* <li
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
              C Programming
            </li>
            <li
              onClick={() => {
                setTech("C++ Programming");
              }}
            >
              C++ Programming
            </li>
            <li
              onClick={() => {
                setTech("Java Programming");
              }}
            >
              JAVA Programming
            </li> */}
          </ul>
        </div>
        <h3>Technology name: {tech}</h3>
        {filteredQuizzes.map((quiz) => (
          <div key={quiz._id}>
            <p>{quiz.title}</p>
            <p>Total Questions: {quiz.questions.length}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Quizzes;
