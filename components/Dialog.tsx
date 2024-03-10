"use client"
import React, { useState } from 'react';
import {ethers} from 'ethers';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import MinterAbi from '../artifacts/contracts/NFT.sol/Minter.json'
const contractAddress = '0x91f33623f18E54dffF665F9645A301918F7c015B';

export function DialogDemo() {
  const [nftTitle, setNftTitle] = useState('');
  const [nftFile, setNftFile] = useState(null);

  const onFileChange = (event: { target: { files: React.SetStateAction<null>[]; }; }) => {
    setNftFile(event.target.files[0]);
  };

  const mintNFT = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask to use this feature.');
      return;
    }

    try {
      // Use MetaMask's provider
      const provider = new ethers.BrowserProvider(window.ethereum);

      // Prompt user to connect their wallet
      const signer = await provider.getSigner();

      // Connect to your smart contract
      const contract = new ethers.Contract(contractAddress, MinterAbi.abi, signer);

      // Placeholder for the image URL
      const imageUrl = "https://cdn.discordapp.com/attachments/1201871374436810752/1206716462924959784/documents-29.png?ex=65f8b4c8&is=65e63fc8&hm=6f73d8be0beabfcffc803e1c1feb412371eb2e7abc6984841578fb632afce54b&";

      // Mint the NFT with the title and image URL
      await contract.mint(nftTitle, imageUrl);
      alert('NFT minted successfully!');
    } catch (error) {
      console.error('Error minting NFT:', error);
      alert(`Error minting NFT: ${error.message}`);
    }
  };



  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    mintNFT();
  };

  return (
      <Dialog>
        <DialogTrigger asChild>
          <button><PlusCircleIcon className="h-14 w-14 text-white cursor-pointer" /></button>
        </DialogTrigger>
        <form onSubmit={handleSubmit}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Upload Your NFT ART</DialogTitle>
              <DialogDescription>
                Let's Learn how does NFTs work by making one
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  NFT Title
                </Label>
                <Input id="name" placeholder="Enter Title" className="col-span-3" value={nftTitle} onChange={(e) => setNftTitle(e.target.value)} />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="asset" className="text-right">
                  Choose Asset
                </Label>
                <Input id="asset" className="col-span-3" type="file" onChange={onFileChange} />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={mintNFT}>Mint NFT</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
  );
}