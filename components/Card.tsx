import * as React from "react";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

export function CardWithForm({
  name,
  imageUrl,
  stars,
  subheading,
}: {
  name: string;
  imageUrl: string;
  stars: number;
  subheading?: string;
}) {
  return (
    <div className="w-[300px]">
      <Card className="flex cursor-pointer flex-col h-[350px] relative bg-gray-900 rounded-lg overflow-hidden">
        {/* Background image at the top */}
        <div
          className="h-2/3 bg-cover bg-center rounded-t-lg"
          style={{
            backgroundImage: `url(${imageUrl})`,
            margin: "10px", // Adding margin
          }}
        ></div>

        {/* Content below the image, including heading and subheading */}
        <div className="h-1/3 flex flex-col justify-between ">
          <CardHeader>
            <CardTitle>
              <h3 className="text-3xl font-bold text-center text-white mt-[-25px]">
                {name}
              </h3>{" "}
              {subheading && (
                <p className="text-sm mt-[10px] text-white">{subheading}</p>
              )}
            </CardTitle>
          </CardHeader>
          <CardFooter></CardFooter>
        </div>
        <div className="flex space-x-2 justify-center mb-4">
          {[...Array(3)].map((_, index) => (
            <React.Fragment key={index}>
              {index < stars ? (
                <StarIcon className="h-12 w-12 text-yellow-500" />
              ) : (
                <StarOutline className="h-10 w-10 mt-[-20px] text-yellow-500" />
              )}
            </React.Fragment>
          ))}
        </div>
      </Card>
    </div>
  );
}
