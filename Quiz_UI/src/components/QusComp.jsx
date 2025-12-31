// import { useEffect, useState, useContext } from "react";
// import { AnswersContext } from "../context/AnswersContext";

// const QusComp = ({ qus }) => {
//   const {
//     rightAnswers,
//     setRightAnswers,
//     checkedAnswer,
//     setCheckedAnswer,
//     currentSubjectQusAns,
//     setCurrentSubjectQusAns,
//   } = useContext(AnswersContext);

//   useEffect(() => {
//     setCurrentSubjectQusAns(qus);
//   }, []);
//   const [selectedAnswer, setSelectedAnswer] = useState([]);
//   const [newAns, setNewAns] = useState(null);

//   useEffect(() => {
//     const answers = qus.map((ans) => {
//       return { id: ans.id, ans: ans.answer };
//     });
//     setRightAnswers(answers);
//   }, []);

//   useEffect(() => {
//     if (!newAns) return;
//     setCheckedAnswer((pre) =>
//       pre.some((a) => a.id === newAns.id)
//         ? pre.map((a) => (a.id === newAns.id ? newAns : a))
//         : [...pre, newAns]
//     );
//   }, [newAns]);

//   return (
//     <div>
//       {qus.map((q) => (
//         <div className="h-96 mb-32 w-full">
//           <h2 key={q.id} className="text-white text-5xl">
//             <span>Qus.{q.id}: </span>
//             {q.question}
//           </h2>
//           <div className="w-full bg-gray-800 text-gray-100  mt-10 p-10 flex flex-col gap-10">
//             {q.options.map((op, index) => (
//               <label
//                 key={index}
//                 className="flex items-center gap-3 cursor-pointer"
//               >
//                 <input
//                   required
//                   value={op}
//                   onChange={(e) => {
//                     setNewAns({ id: q.id, ans: e.target.value });
//                   }}
//                   type="radio"
//                   name={`question-${q.id}`}
//                   className="w-5 h-5 accent-blue-600"
//                 />
//                 <span className="text-3xl">{op}</span>
//               </label>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QusComp;


import { useEffect, useState, useContext } from "react";
import { AnswersContext } from "../context/AnswersContext";

const QusComp = ({ qus }) => {
  const {
    setRightAnswers,
    setCheckedAnswer,
    setCurrentSubjectQusAns,
  } = useContext(AnswersContext);

  const [newAns, setNewAns] = useState(null);

  useEffect(() => {
    setCurrentSubjectQusAns(qus);

    const answers = qus.map((ans) => ({
      id: ans.id,
      ans: ans.answer,
    }));
    setRightAnswers(answers);
  }, []);

  useEffect(() => {
    if (!newAns) return;
    setCheckedAnswer((pre) =>
      pre.some((a) => a.id === newAns.id)
        ? pre.map((a) => (a.id === newAns.id ? newAns : a))
        : [...pre, newAns]
    );
  }, [newAns]);

  return (
    <div className="space-y-14">
      {qus.map((q, i) => (
        <div
          key={q.id}
          className="bg-gray-900 border border-gray-700 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition"
        >
          <h2 className="text-white text-3xl font-semibold mb-8">
            <span className="text-blue-400">Q{i + 1}.</span> {q.question}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {q.options.map((op, index) => (
              <label
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-700 
                cursor-pointer hover:bg-gray-800 transition"
              >
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={op}
                  onChange={(e) =>
                    setNewAns({ id: q.id, ans: e.target.value })
                  }
                  className="w-5 h-5 accent-blue-600"
                />
                <span className="text-xl text-gray-200">{op}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QusComp;
