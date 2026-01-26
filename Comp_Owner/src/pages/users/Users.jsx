// import { useEffect, useState } from "react";
// import { getAllUsers } from "../../utils/API";
// import { useNavigate } from "react-router-dom";

// import "./user.css";
// import UserProfile from "../userProfile/UserProfile";

// const Users = () => {
//   const navigator = useNavigate();
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getAllUsers()
//       .then((res) => setUsers(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="users">
//       <h1 className="users-title">Users</h1>

//       <div className="users-table-wrapper">
//         <table className="users-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//             </tr>
//           </thead>

//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id} onClick={() => navigator(<UserProfile user={user} />) }>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td className="role">{user.role}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {users.length === 0 && <p className="no-data">No users found</p>}
//       </div>
//     </div>
//   );
// };

// export default Users;

import { useEffect, useState } from "react";
import { getAllUsers } from "../../utils/API";
import "./user.css";
import UserProfile from "../userProfile/UserProfile";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    getAllUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="users">
      <h1 className="users-title">Users</h1>

      <div className="users-table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id} onClick={() => setSelectedUser(user)}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="role">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && <p className="no-data">No users found</p>}
      </div>

      {/* MODAL */}
      {selectedUser && (
        <div className="modal-overlay" onClick={() => setSelectedUser(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <UserProfile user={selectedUser} />
            <button className="close-btn" onClick={() => setSelectedUser(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
