import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import API from "../utils/api";
import QusComp from "../components/QusComp";
import { AnswersContext } from "../context/AnswersContext";

const Qus = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();

  const { checkedAnswer, setCurrentSubjectQusAns } =
    useContext(AnswersContext);

  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await API.get(`/quizzes/${quizId}`);
        setQuiz(res.data.data);
        setCurrentSubjectQusAns(res.data.data.questions);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchQuiz();
  }, [quizId]);

  const submitQuiz = async () => {
    try {
      const payload = {
        quizId: quiz._id,
        answers: checkedAnswer.map((a) => ({
          questionId: a.id,
          selectedAnswer: a.ans,
        })),
      };

      const res = await API.post("/quizzes/submit", payload);

      navigate("/result", {
        state: { result: res.data.result },
      });
    } catch (err) {
      alert("Submit failed");
    }
  };

  if (loading) return <p className="text-white p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-black px-10 py-16 text-white">
      <h1 className="text-center text-5xl font-bold mb-10">
        {quiz.title}
      </h1>

      <p className="text-center text-gray-400 mb-10">
        Created by: {quiz.createdBy?.name}
      </p>

      <QusComp qus={quiz.questions} />

      <div className="sticky bottom-6 flex justify-center mt-10">
        <button
          onClick={submitQuiz}
          className="px-16 py-5 rounded-full text-2xl font-semibold bg-green-600"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default Qus;
