import React from "react";

export default function QuizzCard({
  question,
  answers,
  selectedOptions, 
  correctAnswerIndexes,  
  handleOptionClick,
  isSubmitted,
  type,
}) {  
  const isSelected = (index) => Array.isArray(selectedOptions) && selectedOptions.includes(index);
  const isCorrect = (index) => Array.isArray(correctAnswerIndexes) && correctAnswerIndexes.includes(index);
  return (
    <div>
   
      <h2 className="text-xl font-semibold text-gray-700 mb-4">{question}</h2>
      {type==="multiple"?<div className="font-normal text-sm pt-0 mb-3">[choose one or more answers]</div>:""}
      <div className="grid grid-cols-1 gap-4">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={isSubmitted}
            className={`w-full py-2 px-4 rounded-md text-left border ${
              isSubmitted
                ? isCorrect(index)
                  ? "bg-green-500 text-white"  
                  : isSelected(index)
                  ? "bg-red-500 text-white"  
                  : "bg-gray-100 text-gray-700" 
                : isSelected(index)
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
