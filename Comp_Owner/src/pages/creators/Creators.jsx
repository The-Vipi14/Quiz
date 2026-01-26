import { useEffect, useState } from "react";
import { getAllCreators } from "../../utils/API";
import "./creators.css";
import CreatorProfile from "../creatorProfile/CreatorProfile";

const Creators = () => {
  const [creators, setCreators] = useState([]);
  const [selectedCreator, setSelectedCreator] = useState(null);
  useEffect(() => {
    getAllCreators()
      .then((res) => {
        setCreators(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

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
            {creators.map((creator) => (
              <tr key={creator._id}  onClick={() => setSelectedCreator(creator)}>
                <td>{creator.name}</td>
                <td>{creator.email}</td>
                <td className="role">{creator.role}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {creators.length === 0 && <p className="no-data">No creators found</p>}
      </div>

      {selectedCreator && (
        <div className="modal-overlay" onClick={() => setSelectedCreator(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <CreatorProfile creator={selectedCreator} />
            <button
              className="close-btn"
              onClick={() => setSelectedCreator(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Creators;
