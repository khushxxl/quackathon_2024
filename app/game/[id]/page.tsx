// "use client";
import { CloudFog, Clover } from "lucide-react";
import React, { useEffect, useState } from "react";

async function GameDetail({ params }: { params: any }) {
  // const [selectedGame, setselectedGame] = useState<any>();

  // useEffect(() => {
  //   getGameDetails(params.id);
  // }, []);

  async function getGameDetails(id: any) {
    const url =
      "https://my-json-server.typicode.com/khushxxl/placeholderJson/questions";
    const options = {
      method: "GET",
    };

    try {
      const response = await fetch(url, options);
      const results = await response.json();
      console.log(results.find((movie: any) => movie.id == id));
      return results.find((movie: any) => movie.id == id);
      // setselectedGame(results.find((movie: any) => movie.id == id));
    } catch (error) {
      return null;
    }
  }
  const game: any = await getGameDetails(params.id);
  console.log(game);
  return (
    <div>
      <h1 className="text-white">
        Game Details {params.id} + {game?.title}
      </h1>
    </div>
  );
}

export default GameDetail;

// export async function getServerSideProps(context) {
//   const genre = context.query.genre;
//   const request = await fetch(
//     `https://api.themoviedb.org/3${
//       requests[genre]?.url || requests.fetchTrending.url
//     } `
//   ).then((res) => res.json());
//   return {
//     props: {
//       results: request.results,
//     },
//   };
// }
