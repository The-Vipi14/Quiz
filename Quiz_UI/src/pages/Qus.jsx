import { useLocation, useParams } from "react-router-dom";
import { quizData } from "../data/qus";
import QusComp from "../components/QusComp";

const Qus = () => {
  const { state } = useLocation();
  const { tech } = useParams();
  
  const calculateResult = () =>{

  }
  return (
    <>
      <div className=" w-full bg-gradient-to-r from-black to-gray-900">
        {quizData.map(
          (qus,index) =>
            // short circuit evaluation performed
            qus.tech == state.tech && (
              <div key={index}  className="w-full bg-gray-900 p-20 ">

                <QusComp qus={qus.questions} />

                <button className="h-20 w-40 bg-green-700  rounded-2xl cursor-pointer text-white text-2xl font-semibold active:bg-green-800"
                onClick={()=>{
                  calculateResult()
                }}>
                  submit
                </button>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Qus;
