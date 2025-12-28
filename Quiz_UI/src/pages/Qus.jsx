import { useLocation, useParams } from "react-router-dom";
import { quizData } from "../data/qus";
// useLocation
const Qus = () => {
  const { state } = useLocation();
  const {tech} = useParams()
  return (
    <>
      <div className=" w-full bg-gradient-to-r from-black to-gray-900">
        {quizData.map(
          (qus) =>
            // short circuit evaluation performed
            qus.tech == state.tech && (
              <div className="w-full bg-gray-900">
                {qus.questions.map((q) => (
                  <div className="h-screen w-full p-20 ">
                    <h2 key={q.id} className="text-white text-5xl">
                      <span>Qus.{q.id}: </span>
                      {q.question}
                    </h2>
                    <div className="h-96 w-full bg-gray-800 text-gray-100  mt-10 p-10 flex flex-col gap-10">
                      {/* {q.options.map((op) => (
                    <p className="text-3xl">{op}</p>
                  ))} */}
                      {q.options.map((op, index) => (
                        <label
                          key={index}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`question-${q.id}`} // 🔑 important
                            className="w-5 h-5 accent-blue-600"
                          />
                          <span className="text-3xl">{op}</span>
                        </label>
                      ))}
                    </div>
                    <button className="h-20 w-40 bg-green-700 mt-10 rounded-2xl cursor-pointer text-white text-2xl font-semibold active:bg-green-800">
                      submit
                    </button>
                  </div>
                ))}
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Qus;
