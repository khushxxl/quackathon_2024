"use client";
import { CardWithForm } from "@/components/Card";
import React, { useEffect, useState } from "react";
import { questions } from "../../data";
import Link from "next/link";

function Game() {
  const [questions, setquestions] = useState([]);
  const url =
    "https://my-json-server.typicode.com/SujalThakur1/newJson/questions";

  const fetchData = async () => {
    const options = {
      method: "GET",
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setquestions(result);

      // console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={"max-w-6xl flex mx-auto flex-col mt-10"}>
        <div className="mt-10 text-center m-10 md:m-0 md:text-left">
          <h1 className="text-2xl cursor-pointer font-mono font-extrabold text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
            Learn and become a crypto genius 🎓
          </h1>
          <h1 className="text-white font-semibold  mt-2">
            Learn more about web3 by our curated guide of perfect questions and
            answers
          </h1>
        </div>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-x-4 gap-y-6 mt-10">
          {questions &&
            questions.length > 0 &&
            questions.map((data: any, i) => {
              return (
                <Link key={i} href={`/game/${data.id}`}>
                  <CardWithForm
                    key={i}
                    name={data?.title}
                    imageUrl={data?.thumbnailImage}
                    stars={0}
                    subheading={data?.subheading}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Game;
