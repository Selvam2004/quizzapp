import React from "react";

export default function QuizzCard({
  question,
  answers,
  selectedOption,
  correctAnswerIndex,
  handleOptionClick,
  isSubmitted,
}) 
{ 
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">{question}</h2>
      <div className="grid grid-cols-1 gap-4">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={isSubmitted}
            className={`w-full py-2 px-4 rounded-md text-left border ${
              isSubmitted
                ? index === correctAnswerIndex
                  ? "bg-green-500 text-white"
                  : selectedOption === index
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-700"
                : selectedOption === index
                ? "bg-blue-100 text-gray-700"
                : "bg-gray-100 text-gray-700"
            } hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50`}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}
