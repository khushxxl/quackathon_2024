import React from "react";

function Sidebar() {
  return (
    <div className="w-40 flex justify-center border-r-[1px] border-gray-600 bg-slate-800 absolute h-screen font-bold text-white p-5 ">
      <ul className="text-center w-full mt-10 space-y-8 ">
        <div className="hover:bg-slate-700 w-full rounded cursor-pointer p-2">
          <p className="text-lg tracking-wide ">Learn</p>
        </div>
        <div className="hover:bg-slate-700 w-full rounded cursor-pointer p-2">
          <p className="text-lg tracking-wide ">News</p>
        </div>

        <div className="hover:bg-slate-700 w-full rounded cursor-pointer p-2">
          <p className="text-lg tracking-wide ">Practise</p>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
