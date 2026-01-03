// import { useState } from "react";
// import API from "../api/api";
// import { useNavigate } from "react-router-dom";

// const emptyQuestion = {
//   question: "",
//   options: ["", "", "", ""],
//   answer: "",
// };

// const CreateQuiz = () => {
//   const navigate = useNavigate();

//   const [title, setTitle] = useState("");
//   const [tech, setTech] = useState("");
//   const [questions, setQuestions] = useState([emptyQuestion]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // handle question text
//   const handleQuestionChange = (index, value) => {
//     const updated = [...questions];
//     updated[index].question = value;
//     setQuestions(updated);
//   };

//   // handle option change
//   const handleOptionChange = (qIndex, oIndex, value) => {
//     const updated = [...questions];
//     updated[qIndex].options[oIndex] = value;
//     setQuestions(updated);
//   };

//   // handle correct answer
//   const handleAnswerChange = (qIndex, value) => {
//     const updated = [...questions];
//     updated[qIndex].answer = value;
//     setQuestions(updated);
//   };

//   // add new question
//   const addQuestion = () => {
//     setQuestions([...questions, emptyQuestion]);
//   };

//   // submit quiz
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const payload = {
//         title,
//         tech,
//         questions: questions.map((q, i) => ({
//           id: i + 1,
//           question: q.question,
//           options: q.options,
//           answer: q.answer,
//         })),
//       };

//       await API.post("/quizzes", payload);

//       alert("Quiz created successfully!");
//       navigate("/technology");
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to create quiz");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white p-10">
//       <h1 className="text-4xl font-bold mb-8">Create Quiz</h1>

//       {error && (
//         <p className="bg-red-500/20 text-red-400 p-3 rounded mb-6">
//           {error}
//         </p>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-8">
//         {/* Quiz Title */}
//         <input
//           type="text"
//           placeholder="Quiz Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//           className="w-full p-3 rounded bg-gray-800"
//         />

//         {/* Technology */}
//         <input
//           type="text"
//           placeholder="Technology (e.g. JavaScript, React)"
//           value={tech}
//           onChange={(e) => setTech(e.target.value)}
//           required
//           className="w-full p-3 rounded bg-gray-800"
//         />

//         {/* Questions */}
//         {questions.map((q, qIndex) => (
//           <div
//             key={qIndex}
//             className="bg-gray-900 p-6 rounded-xl space-y-4"
//           >
//             <h3 className="text-xl font-semibold">
//               Question {qIndex + 1}
//             </h3>

//             <input
//               type="text"
//               placeholder="Question"
//               value={q.question}
//               onChange={(e) =>
//                 handleQuestionChange(qIndex, e.target.value)
//               }
//               required
//               className="w-full p-3 rounded bg-gray-800"
//             />

//             {q.options.map((op, oIndex) => (
//               <input
//                 key={oIndex}
//                 type="text"
//                 placeholder={`Option ${oIndex + 1}`}
//                 value={op}
//                 onChange={(e) =>
//                   handleOptionChange(qIndex, oIndex, e.target.value)
//                 }
//                 required
//                 className="w-full p-3 rounded bg-gray-800"
//               />
//             ))}

//             <select
//               value={q.answer}
//               onChange={(e) =>
//                 handleAnswerChange(qIndex, e.target.value)
//               }
//               required
//               className="w-full p-3 rounded bg-gray-800"
//             >
//               <option value="">Select Correct Answer</option>
//               {q.options.map((op, i) => (
//                 <option key={i} value={op}>
//                   {op || `Option ${i + 1}`}
//                 </option>
//               ))}
//             </select>
//           </div>
//         ))}

//         {/* Add Question */}
//         <button
//           type="button"
//           onClick={addQuestion}
//           className="px-6 py-3 bg-blue-600 rounded"
//         >
//           + Add Question
//         </button>

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="px-10 py-4 bg-green-600 rounded text-xl font-semibold"
//         >
//           {loading ? "Creating..." : "Create Quiz"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateQuiz;





import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import { technologies } from "../data/technologies";

const emptyQuestion = {
  question: "",
  options: ["", "", "", ""],
  answer: "",
};

const CreateQuiz = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [tech, setTech] = useState("");
  const [questions, setQuestions] = useState([emptyQuestion]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index].question = value;
    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = value;
    setQuestions(updated);
  };

  const handleAnswerChange = (qIndex, value) => {
    const updated = [...questions];
    updated[qIndex].answer = value;
    setQuestions(updated);
  };

  const addQuestion = () => {
    setQuestions([...questions, emptyQuestion]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const payload = {
        title,
        tech,
        questions: questions.map((q, i) => ({
          id: i + 1,
          question: q.question,
          options: q.options,
          answer: q.answer,
        })),
      };

      await API.post("/quizzes", payload);

      alert("Quiz created successfully 🚀");
      navigate("/technology");
    } catch (err) {
      setError(err.response?.data?.message || "Quiz creation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Create Quiz</h1>

      {error && (
        <p className="bg-red-500/20 text-red-400 p-3 rounded mb-6">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Quiz Title */}
        <input
          type="text"
          placeholder="Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-3 rounded bg-gray-800"
        />

        {/* Technology Dropdown */}
        <select
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          required
          className="w-full p-3 rounded bg-gray-800"
        >
          <option value="">Select Technology</option>
          {technologies.map((t, index) => (
            <option key={index} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>

        {/* Questions */}
        {questions.map((q, qIndex) => (
          <div
            key={qIndex}
            className="bg-gray-900 p-6 rounded-xl space-y-4"
          >
            <h3 className="text-xl font-semibold">
              Question {qIndex + 1}
            </h3>

            <input
              type="text"
              placeholder="Question"
              value={q.question}
              onChange={(e) =>
                handleQuestionChange(qIndex, e.target.value)
              }
              required
              className="w-full p-3 rounded bg-gray-800"
            />

            {q.options.map((op, oIndex) => (
              <input
                key={oIndex}
                type="text"
                placeholder={`Option ${oIndex + 1}`}
                value={op}
                onChange={(e) =>
                  handleOptionChange(qIndex, oIndex, e.target.value)
                }
                required
                className="w-full p-3 rounded bg-gray-800"
              />
            ))}

            <select
              value={q.answer}
              onChange={(e) =>
                handleAnswerChange(qIndex, e.target.value)
              }
              required
              className="w-full p-3 rounded bg-gray-800"
            >
              <option value="">Select Correct Answer</option>
              {q.options.map((op, i) => (
                <option key={i} value={op}>
                  {op || `Option ${i + 1}`}
                </option>
              ))}
            </select>
          </div>
        ))}

        <button
          type="button"
          onClick={addQuestion}
          className="px-6 py-3 bg-blue-600 rounded"
        >
          + Add Question
        </button>

        <button
          type="submit"
          disabled={loading}
          className="px-10 py-4 bg-green-600 rounded text-xl font-semibold"
        >
          {loading ? "Creating..." : "Create Quiz"}
        </button>
      </form>
    </div>
  );
};

export default CreateQuiz;
