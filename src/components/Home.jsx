import { useState } from "react";
import Navbar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function Home(){
  return(
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Greet />} />
          {/* <Route path="/quiz" element={<Quizz data={} />} />
          <Route path="/result" element={<Result />} /> */}
        </Routes>
      </div>
    </Router>
  );
}




function Greet() {
  const [timerMode, setTimerMode] = useState(false);

  const toggleTimerMode = () => {
    setTimerMode((prevMode) => !prevMode); // Toggle timer mode
  };

  return (
    <>
      <div className="bg-blue-50 flex items-center justify-center min-h-screen">
        <div className="text-center p-10 bg-white rounded-lg shadow-xl max-w-lg animate-fadeInUp">
          {/* Greeting Icon */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center animate-bounce">
              <svg
                aria-hidden="true"
                className="w-10 h-10 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 112-0 1 1 0 01-2 0zm1 6a1 1 0 011-1h.01a1 1 0 011 1v2a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-2zM9 8a1 1 0 012 0v5a1 1 0 11-2 0V8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>

          {/* Title and Description */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to the Quiz!
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Choose your quiz mode to get started.
          </p>

          {/* Timer Toggle
          <div className="flex justify-center items-center space-x-4 mb-6">
            <span className="text-lg font-medium text-gray-600">
              {timerMode ? "Timer On" : "Timer Off"}
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={timerMode}
                onChange={toggleTimerMode} // Toggle the timer state
              />
              <div className="w-16 h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full peer-checked:from-blue-500 peer-checked:to-blue-700 peer-checked:ring-2 peer-checked:ring-blue-400 transition-all duration-300 ease-in-out relative">
                <span className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md peer-checked:translate-x-full transform transition-all duration-300 ease-in-out peer-checked:scale-110 peer-hover:scale-105"></span>
              </div>
            </label>
          </div> */}

          {/* Start Button */}
          <button
            className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-6 py-3 transition transform hover:scale-105 active:scale-95 duration-200 ease-in-out"
          >
            Start Quiz
          </button>
        </div>
      </div>

      {/* Animations with TailwindCSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out both;
        }
      `}</style>
    </>
  );
}

export default Home;
