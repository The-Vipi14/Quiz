import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await API.post("/auth/register", form);

      setSuccess("Registration successful! Please login.");
      setTimeout(() => navigate("/technology"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-10 rounded-2xl w-[420px]"
      >
        <h1 className="text-3xl text-white mb-6 text-center">Register</h1>

        {error && (
          <p className="bg-red-500/20 text-red-400 p-2 rounded mb-4 text-center">
            {error}
          </p>
        )}

        {success && (
          <p className="bg-green-500/20 text-green-400 p-2 rounded mb-4 text-center">
            {success}
          </p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white"
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full mb-6 p-3 rounded bg-gray-800 text-white"
        >
          <option value="user">User</option>
          <option value="creator">Creator</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded bg-green-600 text-white font-semibold hover:bg-green-700"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="text-gray-400 text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
