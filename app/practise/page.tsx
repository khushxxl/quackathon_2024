import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@/components/ui/dialog";
import { DialogDemo } from "@/components/Dialog";

function Practise() {
  return (
    <div className="max-w-6xl flex mx-auto flex-col">
      <div className="mt-10 text-left">
        <h1 className="text-2xl cursor-pointer font-mono font-extrabold text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
          Minting NFTs
        </h1>
        <h1 className="text-white font-semibold text-left mt-2">
          Learn more about web3 by creating your own NFTs
        </h1>
      </div>
      <div className="h-[200px] w-[180px] rounded-lg items-center mt-20 border-gray-400 border-4 flex justify-center">
        <DialogDemo />
      </div>
    </div>
  );
}

export default Practise;
