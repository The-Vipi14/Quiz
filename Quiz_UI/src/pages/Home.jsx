import { Link } from "react-router-dom";
import { Code, Brain, Rocket, CheckCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-12 gap-10">
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
            CoDiFy
          </span>
        </h1>

        <p className="max-w-4xl text-2xl md:text-3xl text-gray-300 leading-relaxed">
          Build a strong command over your fundamentals with concept-driven
          quizzes designed for modern web developers.
        </p>

        <h3 className="text-4xl md:text-5xl font-semibold text-red-400">
          Strong basics build great developers.
        </h3>

        <div className="flex gap-6 mt-8">
          {/* <Link
            to="/technology"
            className="px-16 py-5 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-3xl font-bold
            hover:scale-105 hover:shadow-2xl active:scale-95 transition-all"
          >
            Start Learning 🚀
          </Link> */}

          <Link
            to="/technology"
            className="
    px-8 py-3 text-lg
    sm:px-10 sm:py-4 sm:text-xl
    md:px-14 md:py-5 md:text-2xl
    lg:px-16 lg:py-5 lg:text-3xl
    rounded-full bg-gradient-to-r from-green-500 to-green-700 font-bold text-white
    hover:scale-105 hover:shadow-2xl active:scale-95 transition-all
  "
          >
            Start Learning 🚀
          </Link>

          <a
            href="#features"
            className="
    px-6 py-3 text-base
    sm:px-8 sm:py-4 sm:text-lg
    md:px-10 md:py-5 md:text-xl
    rounded-full border border-gray-500 text-gray-300
    hover:bg-gray-800 hover:text-white transition
  "
          >
            Why CoDiFy?
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="py-32 px-16 grid gap-16 grid-cols-1 md:grid-cols-3 text-center"
      >
        <Feature
          icon={<Code size={48} />}
          title="Practice by Concepts"
          text="Each quiz targets a specific core concept so you actually understand what you’re doing."
        />
        <Feature
          icon={<Brain size={48} />}
          title="Train Your Logic"
          text="Not just syntax — improve how you think and solve real-world programming problems."
        />
        <Feature
          icon={<Rocket size={48} />}
          title="Grow with Confidence"
          text="Track progress, fix weaknesses, and watch your skills improve over time."
        />
      </section>

      {/* CTA */}
      <section className="py-32 flex flex-col items-center gap-10 bg-gradient-to-r from-gray-900 to-black text-center">
        <h2 className="text-5xl font-bold">Ready to level up?</h2>
        <p className="text-gray-400 text-xl max-w-2xl">
          Pick a technology, start answering questions, and turn practice into
          mastery.
        </p>
        {/* <Link
          to="/technology"
          className="px-20 py-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-3xl font-semibold
          hover:scale-105 hover:shadow-2xl active:scale-95 transition-all"
        >
          Choose a Technology →
        </Link> */}
        <Link
          to="/technology"
          className="
    px-10 py-4 text-lg
    sm:px-14 sm:py-5 sm:text-xl
    md:px-18 md:py-6 md:text-2xl
    rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white
    hover:scale-105 hover:shadow-2xl active:scale-95 transition-all
  "
        >
          Choose a Technology →
        </Link>
      </section>
    </div>
  );
};

const Feature = ({ icon, title, text }) => (
  <div className="flex flex-col items-center gap-6">
    <div className="text-green-400">{icon}</div>
    <h3 className="text-3xl font-semibold">{title}</h3>
    <p className="text-gray-400 text-lg max-w-sm">{text}</p>
  </div>
);

export default Home;
