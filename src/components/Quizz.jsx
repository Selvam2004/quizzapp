import React, { useState, useEffect } from "react";
import QuizzCard from "./Quizzcard";
import { useNavigate } from "react-router-dom";
import data from '../data/questions.json';
export default function Quizz() {
  const questions=data;
  const totalQuestions = questions.length;
  const totalTime = 60;  
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalIncorrect, setTotalIncorrect] = useState(0);
  const [totalSkipped, setTotalSkipped] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(totalTime);

  useEffect(() => {
    if (timeRemaining > 0) {
      const timerId = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else {   
      if(!isSubmitted){
        handleNextClick();
      }      
    }
    // eslint-disable-next-line
  }, [timeRemaining]);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleNextClick = () => {
    if (isSubmitted) {
      setSelectedOption(null);
      setIsSubmitted(false);
      setTimeRemaining(60); 

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        navigate("/result", {
          state: { totalCorrect, totalIncorrect, totalSkipped, totalQuestions },
        });
      }
    } else {
      setTimeRemaining(0);
      if (selectedOption !== null) {
        if (selectedOption === questions[currentQuestion].correctAnswerIndex) {
          setTotalCorrect((prev) => prev + 1);
        } else {
          setTotalIncorrect((prev) => prev + 1);
        }
      } else {
        setTotalSkipped((prev) => prev + 1);
      }
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-blue-600 flex justify-between items-center">
          <span className="flex-grow text-center">Quiz Time!</span>
          <span className="text-xl text-red-500">{timeRemaining}s</span>
        </h1>

        <QuizzCard
          question={questions[currentQuestion].text}
          answers={questions[currentQuestion].answers}
          correctAnswerIndex={questions[currentQuestion].correctAnswerIndex}
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
          isSubmitted={isSubmitted}
        />

        <button
          onClick={handleNextClick}
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          {isSubmitted ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
}
