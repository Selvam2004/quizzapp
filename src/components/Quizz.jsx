import React, { useState } from "react";
import QuizzCard from "./Quizzcard";
import { useNavigate } from "react-router-dom";

export default function Quizz() {
  const questions = [
    {
      id: "q1",
      text: "Which of the following definitions best describes React.js?",
      answers: [
        "A library to build user interfaces with help of declarative code.",
        "A library for managing state in web applications.",
        "A framework to build user interfaces with help of imperative code.",
        "A library used for building mobile applications only.",
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "q2",
      text: "What purpose do React hooks serve?",
      answers: [
        "Enabling the use of state and other React features in functional components.",
        "Creating responsive layouts in React applications.",
        "Handling errors within the application.",
        "Part of the Redux library for managing global state.",
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "q3",
      text: "Can you identify what JSX is?",
      answers: [
        "A JavaScript extension that adds HTML-like syntax to JavaScript.",
        "A JavaScript library for building dynamic user interfaces.",
        "A specific HTML version that was explicitly created for React.",
        "A tool for making HTTP requests in a React application.",
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "q4",
      text: "What is the most common way to create a component in React?",
      answers: [
        "By defining a JavaScript function that returns a renderable value.",
        "By defining a custom HTML tag in JavaScript.",
        "By creating a file with a .jsx extension.",
        'By using the "new" keyword followed by the component name.',
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "q5",
      text: 'What does the term "React state" imply?',
      answers: [
        "An object in a component that holds values and may cause the component to render on change.",
        "The lifecycle phase a React component is in.",
        "The overall status of a React application, including all props and components.",
        "A library for managing global state in React applications.",
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "q6",
      text: "How do you typically render list content in React apps?",
      answers: [
        "By using the map() method to iterate over an array of data and returning JSX.",
        "By using the for() loop to iterate over an array of data and returning JSX.",
        "By using the forEach() method to iterate over an array of data and returning JSX.",
        "By using the loop() method to iterate over an array of data and returning JSX.",
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "q7",
      text: "Which approach can NOT be used to render content conditionally?",
      answers: [
        "Using the #if template syntax.",
        "Using a ternary operator.",
        "Using the && operator.",
        "Using an if-else statement.",
      ],
      correctAnswerIndex: 0,
    },
  ];

  const total = 7;

  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [skip, setSkip] = useState(0);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleNextClick = () => {
    if (isSubmitted) {
      setSelectedOption(null);
      setIsSubmitted(false);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        navigate("/result", {
          state: { correct, incorrect, skip, total },
        });
      }
    } else {
      if (selectedOption !== null) {
        if (selectedOption === questions[currentQuestion].correctAnswerIndex) {
          setCorrect((prev) => prev + 1);
        } else {
          setIncorrect((prev) => prev + 1);
        }
      } else {
        setSkip((prev) => prev + 1);
      }
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Quiz Time!
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
