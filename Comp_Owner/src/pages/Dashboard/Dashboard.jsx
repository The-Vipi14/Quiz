// import "./dashboard.css";

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <h1 className="dashboard-title">Dashboard</h1>

//       <div className="stats-grid">
//         <div className="stat-card">
//           <p className="stat-label">Total Users</p>
//           <h2 className="stat-value">0</h2>
//         </div>

//         <div className="stat-card">
//           <p className="stat-label">Total Creators</p>
//           <h2 className="stat-value">0</h2>
//         </div>

//         <div className="stat-card">
//           <p className="stat-label">Total Quizzes</p>
//           <h2 className="stat-value">0</h2>
//         </div>

//         <div className="stat-card">
//           <p className="stat-label">Active Quizzes</p>
//           <h2 className="stat-value">0</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;






import "./dashboard.css";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const stats = [
    { label: "Total Users", value: 120 },
    { label: "Total Creators", value: 18 },
    { label: "Total Quizzes", value: 64 },
    { label: "Active Quizzes", value: 42 },
  ];

  const quizGrowthData = [
    { month: "Jan", quizzes: 10 },
    { month: "Feb", quizzes: 18 },
    { month: "Mar", quizzes: 30 },
    { month: "Apr", quizzes: 45 },
    { month: "May", quizzes: 64 },
  ];

  const techWiseData = [
    { tech: "HTML", quizzes: 12 },
    { tech: "CSS", quizzes: 8 },
    { tech: "JavaScript", quizzes: 20 },
    { tech: "React", quizzes: 14 },
    { tech: "Node", quizzes: 10 },
  ];

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard Overview</h1>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <p className="stat-label">{item.label}</p>
            <h2 className="stat-value">{item.value}</h2>
          </div>
        ))}
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Quiz Growth</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={quizGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="quizzes"
                stroke="#4f46e5"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Technology-wise Quizzes</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={techWiseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tech" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="quizzes" fill="#22c55e" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
