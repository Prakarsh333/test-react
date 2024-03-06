import React from "react";
import { useNavigate } from "react-router-dom";

function Guideline() {
  const navigate = useNavigate();

  function Refresh(){
    window.location.reload();
  }
  function moveToTest(){
    navigate("/Level");
  }
  return (
    <>
        <div className='min-h-screen bg-gradient-to-r from-gray-800 to-white flex flex-col items-center justify-center'>
        <div className='w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 mt-[-10%] bg-white rounded-lg shadow-lg p-6'>
    
        <div className="md:flex">
          <div className="p-8">
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Guidelines</h1>
            <p className="mt-2 text-gray-500">Some guidelines are given.</p>
          </div>
        </div>
        </div>
        <div className="mt-4 flex justify-center">
        <button type="button" onClick={moveToTest} className="text-white bg-gradient-to-r from-gray-00 to-gray-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          I Understood
        </button>

        </div>
        </div>
    </>
  );
}

export default Guideline;
