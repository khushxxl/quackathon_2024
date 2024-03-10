import { CalculatorCard } from "@/components/CalculatorCard";
import React from "react";

function Calculator() {
  return (
    <div className="max-w-6xl flex mx-auto flex-col mt-10 justify-center">
      <div className="mt-10 text-center md:text-left">
        <h1 className="text-2xl cursor-pointer font-mono font-extrabold text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
          Make Better Investments
        </h1>
        <h1 className="text-white font-semibold  mt-2">
          Use this compound calculator to make your investments x10 times better
        </h1>
      </div>

      <div className=" justify-center items-center mt-10">
        <CalculatorCard />
      </div>
    </div>
  );
}

export default Calculator;
