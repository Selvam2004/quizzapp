import Navbar from "./NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Quizz from "./Quizz";
import Result from "./Result";
import data from '../data/questions.json';

function Home() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Greet />} />
          <Route path="/quizz" element={<Quizz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

function Greet() {
  const navigate = useNavigate(); 
  localStorage.setItem("currentQuestion", 0);
  return (
    
    <>
      <div className="bg-blue-50 flex items-center justify-center min-h-screen">
        <div className="text-center p-10 bg-white rounded-lg shadow-xl max-w-lg animate-fadeInUp">
           
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to the Quiz!
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
              <h2 class="text-2xl font-semibold text-gray-700 mb-4">
                Quiz Instructions
              </h2>
              <ul class="list-disc list-inside space-y-2 text-gray-600 text-left">
                <li>
                  <span class="font-medium text-gray-700">
                    Number of Questions:
                  </span>{" "}
                  7
                </li>
                <li>
                  <span class="font-medium text-gray-700">
                    Time for Each Question:
                  </span>{" "}
                  60 seconds
                </li>
                <li>
                  <span class="font-medium text-gray-700">Important:</span> Once
                  you submit an answer, you cannot return to the question.
                  Please review your choice before proceeding.
                </li>
              </ul>
            </div>
          </p>
          <button
            onClick={() => navigate("/quizz")}
            className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-6 py-3 transition transform hover:scale-105 active:scale-95 duration-200 ease-in-out"
          >
            Start Quiz
          </button>
        </div>
      </div> 
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
