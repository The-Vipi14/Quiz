import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-label">Total Users</p>
          <h2 className="stat-value">0</h2>
        </div>

        <div className="stat-card">
          <p className="stat-label">Total Creators</p>
          <h2 className="stat-value">0</h2>
        </div>

        <div className="stat-card">
          <p className="stat-label">Total Quizzes</p>
          <h2 className="stat-value">0</h2>
        </div>

        <div className="stat-card">
          <p className="stat-label">Active Quizzes</p>
          <h2 className="stat-value">0</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
