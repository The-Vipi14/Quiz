// import { Navigate } from "react-router-dom";

// const CreatorRoute = ({ children }) => {
//   const user = JSON.parse(localStorage.getItem("user"));

//   if (!user || user.role !== "creator") {
//     return <Navigate to="/technology" replace />;
//   }

//   return children;
// };

// export default CreatorRoute;


// import { Navigate } from "react-router-dom";

// const CreatorRoute = ({ children }) => {
//   const user = JSON.parse(localStorage.getItem("user"));

//   if (!user || user.role !== "creator") {
//     return <Navigate to="/technology" replace />;
//   }

//   return children;
// };

// export default CreatorRoute;


import { Navigate } from "react-router-dom";

const CreatorRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.role !== "creator") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default CreatorRoute;
