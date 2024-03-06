import React from "react";
import { useNavigate } from "react-router-dom";

function Level() {
  const navigate = useNavigate();

  const level_1 = () => {
    navigate('/Test', { state: { id: 3 } });
  };
  const level_2 = () => {
    navigate('/Test_2', { state: { id: 3 } });
  };
  const level_3 = () => {
    navigate('/Test_3', { state: { id: 3 } });
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-gray-800 to-white flex items-center justify-center">
    <div className="absolute top-1/5 left-1/4 right-1/4 bottom-1/6 bg-gradient-to-r from-gray-800 to-white rounded-lg p-5 shadow-xl shadow-inner hover:translate-y-0 text-white text-shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-center text-black">
          How Good Are You?
          <br />
          
        </h1>
        <div className="flex flex-col gap-8 items-center">
        <button type="button" onClick={level_1} className="text-white bg-gradient-to-r from-gray-500 to-gray-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          Level-1 : First Time Giving the Test
        </button>
        <button type="button" onClick={level_2} className="text-white bg-gradient-to-r from-gray-500 to-gray-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          Level-2 : Few Times Given the Test.
        </button>
        <button type="button" onClick={level_3} className="text-white bg-gradient-to-r from-gray-500 to-gray-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          Level-3 : Born for This
        </button>
        </div>
      </div>
    </div>
  );
}

export default Level;
