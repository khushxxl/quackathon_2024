"use client";

import { useWeb3Modal } from "@web3modal/ethers/react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import Link from "next/link";
import React from "react";
import DropDown from "./DropDown";

function Navbar() {
  const { open, close } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  function truncateWalletAddress(
    walletAddress: any,
    startLength = 6,
    endLength = 4
  ) {
    // Validate input
    if (
      typeof walletAddress !== "string" ||
      walletAddress.length < startLength + endLength
    ) {
      console.error("Invalid wallet address or length parameters");
      return walletAddress;
    }

    // Truncate and add ellipsis
    const truncatedStart = walletAddress.slice(0, startLength);
    const truncatedEnd = walletAddress.slice(-endLength);

    return `${truncatedStart}...${truncatedEnd}`;
  }

  const connectWallet = async () => {
    open();
  };

  return (
    <div className="sticky top-0 z-50 flex items-center p-5  bg-[#111827] border-b-[0.5px] border-gray-400 shadow-lg justify-between">
      <Link href={"/"}>
        <div>
          <h1 className="md:text-2xl text-lg cursor-pointer text-center font-mono font-extrabold text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
            BlackRockGraduate 🎓
          </h1>{" "}
        </div>
      </Link>

      <div className="flex">
        <div className="text-white space-x-5 mr-10 hidden md:flex">
          <Link href={"/game"}>
            <div className="hover:bg-slate-700 w-full rounded cursor-pointer p-2">
              <p className="text-md tracking-wide ">Learn</p>
            </div>
          </Link>
          <Link href={"/news"}>
            <div className="hover:bg-slate-700 w-full rounded cursor-pointer p-2">
              <p className="text-md tracking-wide ">News</p>
            </div>
          </Link>
          <Link href={"/tracker"}>
            <div className="hover:bg-slate-700 w-full rounded cursor-pointer p-2">
              <p className="text-md tracking-wide ">Tracker</p>
            </div>
          </Link>

          <Link href={"/practise"}>
            <div className="hover:bg-slate-700 w-full rounded cursor-pointer p-2">
              <p className="text-md tracking-wide ">Practise</p>
            </div>
          </Link>
          <Link href={"/calculator"}>
            <div className="hover:bg-slate-700 w-full rounded cursor-pointer p-2">
              <p className="text-md tracking-wide ">Calculator</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center ">
          <div
            onClick={connectWallet}
            className="bg-gradient-to-r hidden md:flex from-purple-500 to-pink-500  p-2 w-36 rounded-md text-white text-center cursor-pointer"
          >
            <p className="text-center">
              {isConnected ? truncateWalletAddress(address) : "Connect Wallet"}
            </p>
          </div>
          <div className="ml-4 md:hidden">
            <DropDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
