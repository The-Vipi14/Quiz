const QusComp = ({ qus }) => {
  
  return (
    <div>
      {qus.map((q) => (
        <div className="h-96 mb-32 w-full">
          <h2 key={q.id} className="text-white text-5xl">
            <span>Qus.{q.id}: </span>
            {q.question}
          </h2>
          <div className="w-full bg-gray-800 text-gray-100  mt-10 p-10 flex flex-col gap-10">
            {q.options.map((op, index) => (
              <label
                key={index}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  className="w-5 h-5 accent-blue-600"
                />
                <span className="text-3xl">{op}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QusComp;
