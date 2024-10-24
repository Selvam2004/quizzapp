const Results = ({ score, total, results, restartQuiz }) => {
  const percentage = ((score / total) * 100).toFixed(2);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-4xl font-semibold mb-4 text-center"> 75 %</h2>
        <table className="w-full">
          <tbody>
            <tr className="border-b">
              <td className="py-2">Correct:</td>
              <td className="py-2 text-right">10 /15 {total}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Incorrect:</td>
              <td className="py-2 text-right">2/15</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Skipped:</td>
              <td className="py-2 text-right">3/15</td>
            </tr>
            <tr>
              <td className="py-2 font-bold">Total Score:</td>
              <td className="py-2 text-right font-bold">
                {score} 10/15 {total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        onClick={restartQuiz}
        className="mt-4 px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Results;
