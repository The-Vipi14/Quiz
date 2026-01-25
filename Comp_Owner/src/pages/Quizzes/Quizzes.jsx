// import { Link } from "react-router-dom";
// import { getQuizBytech } from "../../utils/API";
// import { useEffect, useState } from "react";
// import "./quizzes.css";

// const Quizzes = () => {
//   const [data, setData] = useState([]);
//   const [tech, setTech] = useState("HTML");
//   const [filteredQuizzes, setTilteredQuizzes] = useState([]);
//   const [showTech, setShowTech] = useState(5);
//   const [creatorOfQuiz, setCreatorOfQuiz] = useState("");

//   useEffect(() => {});

//   useEffect(() => {
//     getQuizBytech(tech)
//       .then((res) => setData(res.data.data))
//       .catch((error) => console.log(error));
//   }, [tech]);

//   useEffect(() => {
//     const filtered = data.filter((q) => q.tech === tech);
//     setTilteredQuizzes(filtered);
//   }, [tech, data]);

//   const technologies = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node.js",
//     "Express",
//     "MongoDB",
//     "C++ Programming",
//     "C Programming",
//     "Java Programming",
//   ];

//   return (
//     <>
//       <div className="all-quizzes">
//         <h2>Quizzes</h2>

//         <div className="technologies-box">
//           <ul>
//             {technologies.slice(0, showTech).map((tech) => (
//               <li key={tech} onClick={() => setTech(tech)}>
//                 {tech}
//               </li>
//             ))}
//             <p
//               className="moreButton"
//               onClick={() => {
//                 showTech === 5
//                   ? setShowTech(technologies.length)
//                   : setShowTech(5);
//               }}
//             >
//               {showTech === 5 ? ">" : " "}
//             </p>
//           </ul>
//         </div>
//         <h3>Technology name: {tech}</h3>
//         {filteredQuizzes.map((quiz) => (
//           <div key={quiz._id}>
//             <p>{quiz.title}</p>
//             <p>Total Questions: {quiz.questions.length}</p>
//             <p>created By: {quiz.createdBy.name}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Quizzes;
























import { useEffect, useState } from "react";
import { getQuizBytech } from "../../utils/API";
import "./quizzes.css";

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedTech, setSelectedTech] = useState("HTML");
  const [showTech, setShowTech] = useState(5);

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
    <div className="all-quizzes">
      <h2>Quizzes</h2>

      <div className="technologies-box">
        <ul>
          {technologies.slice(0, showTech).map((tech) => (
            <li
              key={tech}
              className={selectedTech === tech ? "active" : ""}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </li>
          ))}
          <span
            className="moreButton"
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
            <p className="total-qus">Total Questions: {quiz.questions?.length}</p>
            <p className="createdBy">Created By: {quiz.createdBy?.name}</p>
           <button className="visit-button">visit quiz</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
