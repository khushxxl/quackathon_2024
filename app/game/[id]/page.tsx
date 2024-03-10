// "use client";
import QuestionComponent from "@/components/Question";
import { questions } from "@/data";
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
    <div className="max-w-6xl mx-auto flex flex-col mt-10">
      <h1 style={{ color: "white", fontSize: "2.5rem" }}>{game.title}</h1>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={game.ytLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div
        style={{
          color: "white",
          fontSize: "1.1rem",
          paddingTop: "10px",
          paddingBottom: "30px",
        }}
      >
        <p>
          To get started as a Web3 developer, we need some background knowledge
          of Web2. Whether you're interested in creating smart contracts, dev
          tooling, protocol level development, AI image generation, or anything
          else - there are a lot of topics that have existed for decades that
          are still highly relevant and useful. A large part of what you would
          like to do today if you're reading this is learning how to build on
          top of web technologies - things that a user can access through a web
          browser.
        </p>
        <p style={{ paddingTop: "10px" }}>
          In this lesson, I will go over a few key terminologies you will
          definitely come across as you begin your journey, but more importantly
          talk about the mindset you should have as a developer who is just
          getting started on this journey.
        </p>
      </div>
      <div>
        <h1 style={{ color: "white", fontSize: "2.5rem" }}>
          Frontend Technologies
        </h1>
      </div>
      <div
        style={{
          color: "white",
          fontSize: "1.1rem",
          paddingTop: "10px",
          paddingBottom: "30px",
        }}
      >
        <p>
          A frontend is the interface with which a user interacts. On the web,
          the frontend refers to a website you can browse around, click on
          things, maybe even write stuff. Mobile apps and desktop apps are also
          valid examples of frontend interfaces.
        </p>
        <p style={{ paddingTop: "10px" }}>
          For the purposes of this lesson, we're going to focus on web
          technologies.
        </p>
        <p style={{ paddingTop: "10px" }}>
          Have you ever thought about how no matter what web browser you're
          using - Chrome, Firefox, Safari, Edge, etc - a website looks the exact
          same on all of them?{" "}
        </p>
        <p style={{ paddingTop: "10px" }}>
          This happens because of Web Standards. An organization known as the
          W3C (World Wide Web Consortium) sets standards, a set of explicit
          rules, that all companies such as Google, Microsoft, Mozilla, Apple,
          etc. must follow when building things like web browsers across
          different devices and across different operating systems.
        </p>
        <p style={{ paddingTop: "10px" }}>
          CSS is a styling language used to add styles and your own custom flair
          to these elements. By default, HTML elements look boring and plain.
          Remember those old 90s websites? Yeah, that was plain HTML. CSS allows
          you to customize things about HTML elements. Such as making a button
          round instead of a rectangle, changing the font of a paragraph, having
          some bold text or underlined text, and so on.
        </p>
        <p style={{ paddingTop: "10px" }}>
          Anyway, going back to the W3C - the W3C sets standards around how a
          web browser like Chrome must understand, run, and display the code
          being written by a web developer using HTML, CSS, and JavaScript.
          Because of those standards, all browsers across all devices and all
          operating systems work similarly and you do not have to worry about
          it. That's the power of building on web technologies. Unlike building
          mobile apps, where iOS and Android differ a lot from each other, or
          how building for Windows is very different from building for macOS or
          building for Linux - the web allows you to write your code once, and
          have it work everywhere - and we are going to leverage that.s
        </p>
      </div>
      <div>
        <h1 style={{ color: "white", fontSize: "2.5rem" }}>
          Backend Technologies
        </h1>
      </div>
      <div
        style={{
          color: "white",
          fontSize: "1.1rem",
          paddingTop: "10px",
          paddingBottom: "30px",
        }}
      >
        <p>
          The backend refers to that part of a software that allows it to
          operate and cannot be directly accessed by the user. Most private
          data, business logic, data processing, etc. happens on the backend,
          and the frontend is to provide a visual representation of that data.
        </p>
        <p style={{ paddingTop: "10px" }}>
          For example, consider Instagram - Instagram has billions and billions
          of photos and videos on their platform. Some of those photos are
          posted by private accounts, photos that only people who follow that
          private account can see and anyone else cannot. The filtering of
          photos required for Instagram to show you your feed on the timeline
          vs. what they actually have available to them happens on their
          backend. It is important the backend is not directly accessible by
          users because otherwise private data can be leaked.
        </p>
        <p style={{ paddingTop: "10px" }}>
          If you've ever read news about some website getting hacked and user's
          private information - their address, names, credit cards, etc. - being
          leaked, that is because there was some bug in their backend that
          allowed a malicious actor to directly gain access to it.
        </p>
        <p style={{ paddingTop: "10px" }}>
          It is our goal as software developers to build secure backends for our
          services and only allow the user access to information and data they
          should have access to.
        </p>
        <p style={{ paddingTop: "10px" }}>
          Backend services can be written in a variety of programming languages
          - JavaScript, Rust, Go, Python, C#, and many more. As you're starting
          your journey however, since you're going to be learning JavaScript
          anyway for the frontend, you might as well use JavaScript for the
          backend as well. While each programming language has it's own pros and
          cons, they are not enough for a beginner to try to master multiple
          different languages and paradigms at once. I highly recommend that if
          you want to build on web technologies, you choose JavaScript because
          it works on both ends of the tech stack.
        </p>
      </div>
      <div className="questions-container">
        {game.question.map((question, index) => (
          <QuestionComponent key={index} question={question} index={index} />
        ))}
      </div>
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
