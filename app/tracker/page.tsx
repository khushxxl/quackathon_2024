"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function PriceTracker() {
  const [trackerData, settrackerData] = useState([
    {
      price: 100,
      name: "Bitcoin",
      symbol: "BTC",
      iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
    },
  ]);

  const fetchData = async () => {
    const url =
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4779dc47c5msh351220688aa7feap135942jsn19adf77c6eed",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      settrackerData(result.data.coins);

      console.log(result.data.coins);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <div className="max-w-6xl flex mx-auto flex-col">
      <div className="mt-10 text-left">
        <h1 className="text-2xl cursor-pointer font-mono font-extrabold text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
          Track Live Crypto Price
        </h1>
        <h1 className="text-white font-semibold text-left mt-2">
          Learn more about web3 by creating your own NFTs
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-x-4">
        {trackerData &&
          trackerData.map((data: any, i) => {
            return (
              <Link key={i} href={""}>
                <div
                  key={i}
                  className="bg-white w-[230px] p-4 mt-10 rounded-lg cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2 font-bold">
                      <p>{i + 1}</p>
                      <p>{data?.symbol}</p>
                    </div>
                    <Image alt="" height={30} width={30} src={data?.iconUrl} />
                  </div>
                  <hr className="mt-3" />
                  <div className="mt-5 text-sm text-gray-400">
                    <h1>Price : ${parseInt(data?.price)}</h1>
                    <h1>Coin Name : {data?.name}</h1>
                    <h1>Market Cap : ${data?.marketCap}</h1>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default PriceTracker;
