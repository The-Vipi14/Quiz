import { technologies } from "../data/technologies";
import { useNavigate } from "react-router-dom";

const Subject = () => {
  const navigator = useNavigate();

  const scrollToId = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const openQus = (tech) => {
    // navigator(`/qus/${tech}`, { state: { tech: tech } });
    navigator(`/technology/${tech}`);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center text-center px-10">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
            Choose Your Path.
          </span>{" "}
          Master Your Skills.
        </h1>

        <p className="max-w-3xl text-xl text-gray-300 leading-relaxed">
          Pick the technology that excites you the most. Each quiz is crafted to
          strengthen your fundamentals and push your problem-solving skills.
          Learn by doing — one step at a time.
        </p>

        <h4 className="mt-6 text-lg text-gray-400 italic">
          Select a field below to begin your learning journey.
        </h4>

        <button
          onClick={() => scrollToId("tech-sec")}
          className="mt-10 px-14 py-4 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-2xl font-semibold
          shadow-lg hover:scale-105 hover:shadow-2xl active:scale-95 transition-all"
        >
          Choose Technology ↓
        </button>
      </div>

      {/* Technologies Section */}
      <div
        id="tech-sec"
        className="min-h-screen w-full bg-black px-16 py-20 grid gap-10
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-8 flex flex-col gap-4
            hover:border-green-500 hover:shadow-2xl transition-all"
          >
            <img src={tech.icon} alt={tech.name} className="w-10 h-10" />

            <h2 className="text-2xl font-semibold text-yellow-400">
              {tech.name}
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
              {tech.description}
            </p>

            <button
              onClick={() => openQus(tech.name)}
              className="self-start mt-4 px-8 py-3 rounded-full bg-blue-600 text-white font-medium
              hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Start →
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Subject;
