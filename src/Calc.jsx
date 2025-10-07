import React, { useState } from "react";
import { evaluate, sqrt, tan } from "mathjs";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Calc() {
  const [exp, setExp] = useState("");

  const press = (value) => {
    setExp((prev) => prev + value);
  };

  const calculation = () => {
    try {
      const result = evaluate(exp);
      setExp(String(result));
    } catch {
      setExp("Error");
    }
  };

  const squarert = () => {
    try {
      const result = Math.sqrt(exp);
      setExp(String(result));
    } catch {
      setExp("Error");
    }
  };

  const sin = () => {
    try {
      const result = Math.sin(exp);
      setExp(String(result));
    } catch {
      setExp("Error");
    }
  };

  const cos = () => {
    try {
      const result = Math.cos(exp);
      setExp(String(result));
    } catch {
      setExp("Error");
    }
  };

  const tan = () => {
    try {
      const result = Math.tan(exp);
      setExp(String(result));
    } catch {
      setExp("Error");
    }
  };

  const log = () => {
    try {
      const result = Math.log(exp);
      setExp(String(result));
    } catch {
      setExp("Error");
    }
  };

  const sqr = () => {
    try {
      const result = Math.pow(exp, 2);
      setExp(String(result));
    } catch {
      setExp("Error");
    }
  };

  const backspace = () => {
    setExp((prev) => prev.slice(0, -1));
  };

  const del = () => {
    setExp("");
  };

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center px-4">
      <div className="text-center flex flex-col w-full flex flex-col items-center bg-purple-300 shadow-xl shadow-purple-500 w-full max-w-3xl h-auto mx-auto px-6 py-10 rounded-3xl">
        <input
          type="text"
          value={exp}
          readOnly
          className="bg-gray-100 w-full max-w-xl h-[130px] mt-4 rounded-xl p-4 text-right text-purple-500 text-5xl font-mono shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <div className="flex flex-col gap-3 items-center mt-6">
          <div className="flex flex-row gap-6 justify-center flex-wrap">
            <button
              type="button"
              value={exp}
              onClick={del}
              className="h-[70px] w-[60px] bg-red-500 hover:bg-red-600 text-white font-bold rounded-2xl text-2xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              AC
            </button>
            <button
              type="button"
              value={exp}
              onClick={backspace}
              className="h-[70px] w-[60px] bg-red-500 hover:bg-red-600 text-white font-bold rounded-2xl text-2xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              Del
            </button>
            <button
              type="button"
              value={exp}
              onClick={sin}
              className="h-[70px] w-[60px] bg-purple-700 hover:bg-purple-800 text-purple-100 font-bold rounded-2xl text-2xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              Sin
            </button>
            <button
              type="button"
              value={exp}
              onClick={cos}
              className="h-[70px] w-[60px] bg-purple-700 hover:bg-purple-800 text-purple-100 font-bold rounded-2xl text-2xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              Cos
            </button>
            <button
              onClick={tan}
              className="h-[70px] w-[60px] bg-purple-700 hover:bg-purple-800 text-purple-100 font-bold rounded-2xl text-2xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              Tan
            </button>
          </div>

          <div className="flex flex-row gap-6 justify-center flex-wrap">
            <button
              type="button"
              value={exp}
              onClick={(e) => press("7")}
              className="h-[70px] w-[60px] bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-2xl text-xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              7
            </button>
            <button
              type="button"
              value={exp}
              onClick={(e) => press("8")}
              className="h-[70px] w-[60px] bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-2xl text-xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              8
            </button>
            <button
              type="button"
              value={exp}
              onClick={(e) => press("9")}
              className="h-[70px] w-[60px] bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-2xl text-xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              9
            </button>
            <button
              type="button"
              value={exp}
              onClick={(e) => press("*")}
              className="h-[70px] w-[60px] bg-purple-700 hover:bg-purple-800 text-purple-100 font-bold rounded-2xl text-2xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              <i class="fas fa-times"></i>
            </button>
            <button
              onClick={log}
              className="h-[70px] w-[60px] bg-purple-700 hover:bg-purple-800 text-purple-100 font-bold rounded-2xl text-2xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              Log
            </button>
          </div>

          <div className="flex flex-row gap-6 justify-center flex-wrap">
            <button
              type="button"
              value={exp}
              onClick={(e) => press("4")}
              className="h-[70px] w-[60px] bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-2xl text-xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              4
            </button>
            <button
              type="button"
              value={exp}
              onClick={(e) => press("5")}
              className="h-[70px] w-[60px] bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-2xl text-xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              5
            </button>
            <button
              type="button"
              value={exp}
              onClick={(e) => press("6")}
              className="h-[70px] w-[60px] bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-2xl text-xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              6
            </button>
            <button
              type="button"
              value={exp}
              onClick={(e) => press("-")}
              className="h-[70px] w-[60px] bg-purple-700 hover:bg-purple-800 text-purple-100 font-bold rounded-2xl text-2xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              -
            </button>
            <button
              onClick={sqr}
              className="h-[70px] w-[60px] bg-purple-700 hover:bg-purple-800 text-purple-100 font-bold rounded-2xl text-2xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              <i className="fas fa-superscript"></i>
            </button>
          </div>

          <div className="flex flex-row gap-6 justify-center flex-wrap">
            <button
              type="button"
              value={exp}
              onClick={(e) => press("1")}
              className="h-[70px] w-[60px] bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-2xl text-xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              1
            </button>
            <button
              type="button"
              value={exp}
              onClick={(e) => press("2")}
              className="h-[70px] w-[60px] bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-2xl text-xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              2
            </button>
            <button
              type="button"
              value={exp}
              onClick={(e) => press("3")}
              className="h-[70px] w-[60px] bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-2xl text-xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              3
            </button>
            <button
              type="button"
              value={exp}
              onClick={(e) => press("+")}
              className="h-[70px] w-[60px] bg-purple-700 hover:bg-purple-800 text-purple-100 font-bold rounded-2xl text-2xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              +
            </button>
            <button
              type="button"
              value={exp}
              onClick={() => press("^")}
              className="h-[70px] w-[60px] bg-purple-700 hover:bg-purple-800 text-purple-100 font-bold rounded-2xl text-2xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              ^
            </button>
          </div>

          <div className="flex flex-row gap-6">
            <button
              type="button"
              value={exp}
              onClick={() => press("00")}
              className="h-[70px] w-[60px] bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-2xl text-xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105 mt-2"
            >
              00
            </button>
            <button
              type="button"
              value={exp}
              onClick={() => press("0")}
              className="h-[70px] w-[60px] bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-2xl text-xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105 mt-2"
            >
              0
            </button>
            <button
              type="button"
              value={exp}
              onClick={() => press(".")}
              className="h-[70px] w-[60px] bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-2xl text-xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105 mt-2"
            >
              .
            </button>
            <button
              type="button"
              value={exp}
              onClick={() => press("/")}
              className="h-[70px] w-[60px] bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-2xl text-xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105 mt-2"
            >
              <i class="fa-solid fa-divide"></i>
            </button>
            <button
              type="button"
              value={exp}
              onClick={squarert}
              className="h-[70px] w-[60px] bg-purple-700 hover:bg-purple-800 text-purple-100 font-bold rounded-2xl text-xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              <i className="fas fa-square-root-variable text-purple-100 text-2xl"></i>
            </button>
          </div>
          <div className="flex flex-row gap-6 ml-[168px]">
            {/* <button
              type="button"
              value={exp}
              onClick={() => press("00")}
              className="h-[70px] w-[60px] bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-2xl text-xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105 mt-2"
            >
              00
            </button>
            <button
              type="button"
              value={exp}
              onClick={() => press("0")}
              className="h-[70px] w-[60px] bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-2xl text-xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105 mt-2"
            >
              0
            </button> */}
            <button
              type="button"
              value={exp}
              onClick={() => press("%")}
              className="h-[70px] w-[60px] bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-2xl text-xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105 mt-2"
            >
              %
            </button>
            <button
              value={exp}
              onClick={calculation}
              className="h-[70px] w-[146px] bg-purple-700 hover:bg-purple-800 text-purple-100 font-bold rounded-2xl text-2xl shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
