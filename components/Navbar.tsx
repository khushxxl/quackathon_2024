import React from "react";

function Navbar() {
  return (
    <div className="b flex items-center p-5  bg-[#111827] border-b-[0.5px] border-gray-400 shadow-lg justify-between">
      <div>
        <h1 className="text-white text-xl font-mono tracking-wide cursor-pointer">
          BlackRockGraduate 🎓
        </h1>
      </div>

      <div className="flex">
        <div className="flex text-white space-x-5 mr-10">
          <div className="hover:bg-slate-700 w-full rounded cursor-pointer p-2">
            <p className="text-lg tracking-wide ">Learn</p>
          </div>
          <div className="hover:bg-slate-700 w-full rounded cursor-pointer p-2">
            <p className="text-lg tracking-wide ">News</p>
          </div>

          <div className="hover:bg-slate-700 w-full rounded cursor-pointer p-2">
            <p className="text-lg tracking-wide ">Practise</p>
          </div>
        </div>
        <div
          onClick={undefined}
          className="bg-gradient-to-r from-purple-500 to-pink-500  p-2 w-36 rounded-md text-white text-center cursor-pointer"
        >
          <p className="text-center">{"Connect Wallet"}</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
