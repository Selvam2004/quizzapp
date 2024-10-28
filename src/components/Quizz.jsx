import React, { useState, useEffect } from "react";
import QuizzCard from "./Quizzcard";
import { useNavigate } from "react-router-dom";
import data from '../data/questions.json';

export default function Quizz() {
  const questions = data;
  const totalQuestions = questions.length;
  const totalTime = parseInt(localStorage.getItem("remainingTime")) || 60;  
  const savedQuestionIndex = parseInt(localStorage.getItem("currentQuestion")) || 0;
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(savedQuestionIndex);
  const [selectedOptions, setSelectedOptions] = useState([]);  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalIncorrect, setTotalIncorrect] = useState(0);
  const [totalSkipped, setTotalSkipped] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(totalTime);
  const [errormsg, setErrormsg] = useState("");
  const [quizComplete, setQuizComplete] = useState(false); 
  useEffect(() => {
    if (timeRemaining > 0) {
      const timerId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          let updatedTime = prevTime - 1;
          localStorage.setItem("remainingTime", updatedTime);
          return updatedTime;
        });
      }, 1000);

      return () => clearInterval(timerId);
    } else { 
      if (!isSubmitted) {
        handleSkip();
      }      
    }
     // eslint-disable-next-line
  }, [timeRemaining]);

  useEffect(() => {
    localStorage.setItem("currentQuestion", currentQuestion);
    // eslint-disable-next-line
  }, [currentQuestion]);
 
  useEffect(() => {
    if (quizComplete) {
      navigate("/result", {
        state: { totalCorrect, totalIncorrect, totalSkipped, totalQuestions },
      });
    }
     // eslint-disable-next-line
  }, [quizComplete]);

  const handleOptionClick = (index) => {
    const currentQuestionData = questions[currentQuestion];
  
    if (currentQuestionData.type === "single") { 
      setSelectedOptions([index]); 
    } else { 
      setSelectedOptions((prev) => {
        if (prev.length>0 && prev.includes(index)) {
          return prev.filter((option) => option !== index);  
        } else {
          return [...prev, index];  
        }
      });
    }
  };
  
  

  const handleSkip = () => {
    setTotalSkipped((prev) => prev + 1);
    setErrormsg("");
    setSelectedOptions([]);
    setIsSubmitted(false);
    setTimeRemaining(60); 
    localStorage.setItem("remainingTime", 60);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizComplete(true);  // Mark quiz as complete
    }
  };

  const handleNextClick = () => { 
    if (selectedOptions.length === 0) { 
      setErrormsg("Please choose at least one option");
      return;
    } else {
      setErrormsg("");
    }

    setIsSubmitted(true);  
    setTimeRemaining(0);
    localStorage.setItem("remainingTime", 0); 

    const correctAnswers = questions[currentQuestion].correctAnswerIndex; 
    let isCorrect;
    //let isIncorrect;
    if(correctAnswers){
       isCorrect = selectedOptions.every(option => correctAnswers.includes(option));
       //isIncorrect = selectedOptions.some(option => !correctAnswers.includes(option));
    }

    if (isCorrect) {
      setTotalCorrect((prev) => prev + 1);
    } else {
      setTotalIncorrect((prev) => prev + 1);
    }

    const tmp=setTimeout(() => {
      setSelectedOptions([]);
      setIsSubmitted(false);
      setTimeRemaining(60); 
      localStorage.setItem("remainingTime", 60);
    
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizComplete(true);   
      }
    }, 2000);
    return ()=>clearTimeout(tmp);
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
          correctAnswerIndexes={questions[currentQuestion].correctAnswerIndex} 
          selectedOptions={selectedOptions}
          handleOptionClick={handleOptionClick}
          isSubmitted={isSubmitted}
          type={questions[currentQuestion].type}
        />
        <p className="text-red-400">{errormsg}</p>
        <div className="text-right">
          <button
            onClick={handleSkip}
            disabled={isSubmitted}
            className="mt-6 w-50 me-5 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Skip
          </button>
          <button
            onClick={handleNextClick}
            disabled={isSubmitted}
            className="mt-6 w-50 me-3 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
}
