import { useRef, useState } from "react";
import "./userProfile.css";
import { api } from "../../utils/API";
import { useEffect } from "react";

const UserProfile = ({ user }) => {
  let rendering = useRef(0);
  rendering.current++;
  console.log(rendering);

  if (!user) return null;

  const [solvedQuizzes, setSolvedQuizzes] = useState([]);
  useEffect(() => {
    api
      .get(`/owner/user-solvedquiz/${user._id}`)
      .then((res) => {
        setSolvedQuizzes(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="avatar">{user.name?.charAt(0).toUpperCase()}</div>

        <div className="basic-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="profile-details">
        <div className="detail">
          <span>Role</span>
          <p className={`role ${user.role}`}>{user.role}</p>
        </div>

        <div className="detail">
          <span>User ID</span>
          <p>{user._id}</p>
        </div>

        {user.createdAt && (
          <div className="detail">
            <span>Joined</span>
            <p>{new Date(user.createdAt).toLocaleDateString("en-IN")}</p>
          </div>
        )}
      </div>
      <div className="quiz-list">
        <h4>Solved Quizzes: </h4>

        {solvedQuizzes.length > 0 ? (
          solvedQuizzes.map((q) => (
            <div className="quiz-card" key={q._id}>
              <h4>{q.quizId?.title}</h4>
              <p>
                <strong>Score:</strong> {q.percentage}%
              </p>
              <p className="date">
                {new Date(q.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p style={{ color: "#666", fontSize: "15px" , marginLeft:"20px" }}>
            No quizzes solved yet.....
          </p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
