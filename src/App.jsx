import React, { useState } from "react";

function App() {
  const [input, setInput] = useState(""); // State to store the input expression

  // Handle number and operator clicks
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Handle clear button (C)
  const handleClear = () => {
    setInput("");
  };

  // Handle the calculation when "=" is clicked
  const handleCalculate = () => {
    try {
      // Evaluate the mathematical expression and update the input with the result
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error"); // Display error for invalid expressions
    }
  };
 
  return (
    <div className="flex items-center justify-center h-screen bg-dark" style={{width:"100%", height:"1000px"}}>
      <div style={{height:"800px"}} className="bg-white p-6 rounded-2xl shadow-2xl w-94 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        {/* Display */}
        <div className="mb-6 p-4 bg-gray-100 text-right text-4xl font-semibold text-gray-800 rounded-lg shadow-inner">
          {input || "0"}
        </div>

        {/* Calculator Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {/* Numbers */}
          {["7", "8", "9", "/"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="p-5 bg-primary text-white rounded text-sm font-bold shadow-lg hover:bg-indigo-400 transition-all"
            >
              {btn}
            </button>
          ))}

          {["4", "5", "6", "*"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="p-5 bg-primary text-white rounded text-sm font-bold shadow-lg hover:bg-indigo-400 transition-all"
            >
              {btn}
            </button>
          ))}

          {["1", "2", "3", "-"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="p-5 bg-primary text-white rounded text-sm font-bold shadow-lg hover:bg-indigo-400 transition-all"
            >
              {btn}
            </button>
          ))}

          {/* Zero and other controls */}
          <button
            onClick={handleClear}
            className="p-5 bg-red-400 text-white rounded text-sm font-bold shadow-lg col-span-2 hover:bg-red-500 transition-all"
          >
            C
          </button>
          <button
            onClick={() => handleClick("0")}
            className="p-5 bg-primary text-white rounded text-sm font-bold shadow-lg hover:bg-indigo-400 transition-all" 
          >
            0
          </button>
          <button
            onClick={() => handleClick("+")}
            className="p-5 bg-primary text-white rounded text-sm font-bold shadow-lg hover:bg-indigo-600 transition-all"
          >
            +
          </button>

          {/* Equals Button */}
          <button
            onClick={handleCalculate}
            className="p-5 bg-warning text-white rounded text-sm font-bold shadow-lg col-span-4 hover:bg-green-500 transition-all" style={{height:"20px"}}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;