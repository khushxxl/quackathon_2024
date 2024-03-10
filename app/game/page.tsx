import { CardWithForm } from "@/components/Card";
import React from "react";
import { questions } from "../../data";

function Game() {
  return (
    <>
      <div className={"flex flex-row"}>
        <div>
          <CardWithForm
            name={questions[0].title}
            imageUrl={
              "https://lw3-lesson-banners.s3.us-east-2.amazonaws.com/9b21fba9-6bed-4780-9c3f-df2a758100eb-0c9926cd-0e05-467a-951d-44e0e793468e"
            }
            stars={0}
            subheading="Learn about the web3 and how it is different from web2."
          />
        </div>
        <div>
          <CardWithForm
            name={questions[0].title}
            imageUrl={
              "https://lw3-lesson-banners.s3.us-east-2.amazonaws.com/9b21fba9-6bed-4780-9c3f-df2a758100eb-0c9926cd-0e05-467a-951d-44e0e793468e"
            }
            stars={0}
            subheading="Learn about the web3 and how it is different from web2."
          />
        </div>
      </div>
    </>
  );
}

export default Game;
