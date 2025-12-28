import { technologies } from "../data/technologies";

const Subject = () => {
  return (
    <>
      <div
        className="h-screen w-full text-white bg-gradient-to-r from-black to-gray-900 text-center
      pt-40 flex flex-col items-center"
      >
        <h1 className="text-6xl font-bold text-green-400 w-3xl">
          “Choose Your Path. Master Your Skills.”
        </h1>
        <p className="text-gray-100 mt-8 text-xl">
          “Pick the subject or technology that excites you the most. Each quiz
          is designed to challenge your knowledge, strengthen your fundamentals,
          and help you grow as a confident web developer. Whether it’s Frontend,
          Backend, or Full-Stack, there’s a path for every learner.”
        </p>
        <h4 className="mt-9 text-2xl text-red-300">
          “Select a field below to start your learning journey. One step at a
          time, one quiz at a time—towards mastery.”
        </h4>
        <button className="h-15 w-70 mt-10 bg-green-600 rounded-4xl text-2xl text-white font-bold">
          choose
        </button>
      </div>
      <div className="h-screen w-full bg-black grid-cols-4 grid p-10">
        {technologies.map((tect) => (
          <div className="h-50 w-60 bg-gray-900 flex flex-col gap-2 justify-center pl-2.5 rounded-2xl">
            <img src={tect.icon} alt="" width={30} />
            <h2 className="text-2xl text-yellow-400 font-semibold">
              {tect.name}
            </h2>
            <p className="text-white">{tect.description}</p>
            <button className="h-10 w-20 text-white cursor-pointer active:bg-blue-700  bg-blue-600 mt-2 rounded-3xl">
              start
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Subject;
