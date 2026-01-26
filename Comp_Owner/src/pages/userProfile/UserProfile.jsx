import "./userProfile.css";

const UserProfile = ({ user }) => {
  if (!user) return null;

  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="avatar">
          {user.name?.charAt(0).toUpperCase()}
        </div>
        
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
            <p>{new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
