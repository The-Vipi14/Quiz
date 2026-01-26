import { useEffect, useState } from "react";
import "./CreatorProfile.css";
import { api } from "../../utils/API";
const CreatorProfile = ({ creator }) => {
  // safety check (very important)
  if (!creator) {
    return <p>Loading creator profile...</p>;
  }
  const [createdQuizzes, setcreatedQuizzes] = useState([]);
  useEffect(() => {
    api
      .get(`/owner/creator-createdquiz/${creator._id}`)
      .then((res) => {
        setcreatedQuizzes(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { name, email, role, createdAt, isActive, totalQuizzes } = creator;

  return (
    <div className="creator-profile">
      <h2 className="creator-name">{name}</h2>

      <p className="creator-email">{email}</p>

      <div className="creator-info">
        <span>
          <strong>Role:</strong> {role || "Creator"}
        </span>

        <span>
          <strong>Status:</strong> {isActive ? "Active" : "Inactive"}
        </span>

        <span>
          <strong>Joined:</strong> {new Date(createdAt).toLocaleDateString("en-IN")}
        </span>
        <h4>Total Quizzes: {createdQuizzes.length}</h4>
        {createdQuizzes.length !== 0 && (
          <div>
            {createdQuizzes.map((quiz) => (
              <>
                <div>
                  <p>Title: {quiz.title}</p>
                  <p>Total Questions: {quiz.questions.length}</p>
                  <p>Reach: {quiz.totalAttempts}</p>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatorProfile;
