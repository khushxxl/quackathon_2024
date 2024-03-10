"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function News() {
  const [newsData, setnewsData] = useState([
    {
      url: "https://www.coindesk.com/policy/2023/02/08/crypto-exchange-bitstamp-registers-in-france/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
      title: "Crypto Exchange Bitstamp Registers in France",
      description:
        "The exchange joins Binance, Bitpanda and Société Générale in securing recognition from one of the most sophisticated regimes in the EU.",
      thumbnail:
        "https://www.coindesk.com/resizer/956JHo_cLlwLiVdCkWZjV3zvbTE=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/6Q6IDVB3DNA4XI35UXQOPXB3U4.png",
      createdAt: "Wed, 08 Feb 2023 14:09:00 +0000",
    },
    {
      url: "https://www.coindesk.com/policy/2023/02/08/crypto-exchange-bitstamp-registers-in-france/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
      title: "Crypto Exchange Bitstamp Registers in France",
      description:
        "The exchange joins Binance, Bitpanda and Société Générale in securing recognition from one of the most sophisticated regimes in the EU.",
      thumbnail:
        "https://www.coindesk.com/resizer/956JHo_cLlwLiVdCkWZjV3zvbTE=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/6Q6IDVB3DNA4XI35UXQOPXB3U4.png",
      createdAt: "Wed, 08 Feb 2023 14:09:00 +0000",
    },
    {
      url: "https://www.coindesk.com/policy/2023/02/08/crypto-exchange-bitstamp-registers-in-france/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
      title: "Crypto Exchange Bitstamp Registers in France",
      description:
        "The exchange joins Binance, Bitpanda and Société Générale in securing recognition from one of the most sophisticated regimes in the EU.",
      thumbnail:
        "https://www.coindesk.com/resizer/956JHo_cLlwLiVdCkWZjV3zvbTE=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/6Q6IDVB3DNA4XI35UXQOPXB3U4.png",
      createdAt: "Wed, 08 Feb 2023 14:09:00 +0000",
    },
  ]);

  const getNews = async () => {
    const url = "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4779dc47c5msh351220688aa7feap135942jsn19adf77c6eed",
        "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
      },
    };

    try {
      const response: any = await fetch(url, options);
      const result = await response.json();

      setnewsData(result.data);

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className=" max-w-7xl flex mx-auto flex-col">
      <div className="mt-10 md:text-left text-center">
        <h1 className="text-2xl cursor-pointer font-mono font-extrabold text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
          Crypto News
        </h1>
        <h1 className="text-white font-semibold mt-2">
          Learn more about web3 by reading news and updates
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-x-4">
        {newsData &&
          newsData.map((data, i) => {
            return (
              <Link target="_blank" href={data?.url}>
                <div
                  key={i}
                  className="mt-10 h-[500px] cursor-pointer border-4 max-w-sm border-gray-700 rounded w-fit p-5"
                >
                  <Image
                    src={data?.thumbnail}
                    alt={""}
                    height={100}
                    width={350}
                    objectFit={"cover"}
                  />
                  <div className="text-white font-bold underline">
                    {data.title}
                  </div>
                  <div className="text-white  mt-5">{data.description}</div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default News;
