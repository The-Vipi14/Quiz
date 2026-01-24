import { useEffect, useState } from "react";
// import { getAllCreators } from "../api/ownerApi";
import "./creators.css";

const Creators = () => {
  const [creators, setCreators] = useState([]);

  // useEffect(() => {
  //   getAllCreators()
  //     .then(res => setCreators(res.data))
  //     .catch(err => console.log(err));
  // }, []);

  return (
    <div className="creators">
      <h1 className="creators-title">Creators</h1>

      <div className="creators-table-wrapper">
        <table className="creators-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {creators.map(creator => (
              <tr key={creator._id}>
                <td>{creator.name}</td>
                <td>{creator.email}</td>
                <td className="role">{creator.role}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {creators.length === 0 && (
          <p className="no-data">No creators found</p>
        )}
      </div>
    </div>
  );
};

export default Creators;
