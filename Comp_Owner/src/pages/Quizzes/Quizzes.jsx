import { useEffect, useState } from "react";
import { getQuizBytech } from "../../utils/API";
import "./quizzes.css";

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedTech, setSelectedTech] = useState("HTML");
  const [showTech, setShowTech] = useState(5);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "C Programming",
    "Java Programming",
  ];

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await getQuizBytech(selectedTech);
        setQuizzes(res?.data?.data || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuizzes();
  }, [selectedTech]);

  return (
    <div className="quiz-all-quizzes">
      <h2>Quizzes</h2>

      <div className="quiz-technologies-box">
        <ul>
          {technologies.slice(0, showTech).map((tech) => (
            <li
              key={tech}
              className={`quiz-tech-item ${
                selectedTech === tech ? "quiz-active" : ""
              }`}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </li>
          ))}
          <span
            className="quiz-moreButton"
            onClick={() =>
              setShowTech(showTech === 5 ? technologies.length : 5)
            }
          >
            {showTech === 5 ? ">" : "<"}
          </span>
        </ul>
      </div>

      <h3>Technology name: {selectedTech}</h3>

      <div className="quiz-list">
        {quizzes.map((quiz) => (
          <div className="quiz-card" key={quiz._id}>
            <p className="quiz-title">Title: {quiz.title}</p>
            <p className="quiz-total-qus">
              Total Questions: {quiz.questions?.length}
            </p>
            <p className="quiz-createdBy">
              Created By: {quiz.createdBy?.name}
            </p>

            <button
              className="quiz-visit-button"
              onClick={() => setSelectedQuiz(quiz)}
            >
              Visit Quiz
            </button>
          </div>
        ))}
      </div>

      {selectedQuiz && (
        <div
          className="quiz-modal-overlay"
          onClick={() => setSelectedQuiz(null)}
        >
          <div
            className="quiz-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="quiz-modal-title">{selectedQuiz.title}</h2>

            <ul className="quiz-question-list">
              {selectedQuiz.questions.map((q, qIndex) => (
                <li className="quiz-question-card" key={qIndex}>
                  <p className="quiz-question-text">
                    Q{qIndex + 1}. {q.question}
                  </p>

                  <div className="quiz-options">
                    {q.options.map((op, idx) => (
                      <p className="quiz-option" key={idx}>
                        {String.fromCharCode(65 + idx)}. {op}
                      </p>
                    ))}
                  </div>

                  <p className="quiz-answer">
                    Right Answer: <span>{q.answer}</span>
                  </p>
                </li>
              ))}
            </ul>

            <button
              className="quiz-close-btn"
              onClick={() => setSelectedQuiz(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quizzes;
