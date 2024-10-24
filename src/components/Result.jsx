import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { totalCorrect, totalIncorrect, totalSkipped, totalQuestions } =
    location.state;

  const correctPercentage = ((totalCorrect / totalQuestions) * 100).toFixed(2);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Quiz Results
        </h1>
        
        <div className="text-lg text-gray-700 mb-6  ">
          <p className="text-center mb-4 font-bold text-3xl">
            {correctPercentage}%
          </p>
          <div className="flex justify-between mb-2 border-b">
            <span>Questions:</span>
            <span>{totalQuestions}</span>
          </div>
          <div className="flex justify-between mb-2 border-b">
            <span>Correct:</span>
            <span>{totalCorrect}</span>
          </div>
          <div className="flex justify-between mb-2 border-b">
            <span>Incorrect:</span>
            <span>{totalIncorrect}</span>
          </div>
          <div className="flex justify-between mb-2 border-b">
            <span>Skipped:</span>
            <span>{totalSkipped}</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}
