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
        <div className="text-lg text-gray-700 mb-6">
          <p className="mb-2">
            <strong>Total Questions:</strong> {totalQuestions}
          </p>
          <p className="mb-2">
            <strong>Total Correct:</strong> {totalCorrect}
          </p>
          <p className="mb-2">
            <strong>Total Incorrect:</strong> {totalIncorrect}
          </p>
          <p className="mb-2">
            <strong>Total Skipped:</strong> {totalSkipped}
          </p>
          <p className="mb-2">
            <strong>Correct Percentage:</strong> {correctPercentage}%
          </p>
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
