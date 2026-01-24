import { useEffect, useState } from "react";
import { getAllUsers } from '../../utils/API';

import "./user.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
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
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="role">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <p className="no-data">No users found</p>
        )}
      </div>
    </div>
  );
};

export default Users;
