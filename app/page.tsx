import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  white-glassmorphism h-screen  mx-auto justify-between items-center bg-[#111827]">
      <div className="flex flex-col max-w-7xl ml-20 ">
        <div className="text-white space-y-20">
          <div className="max-w-xl ">
            <h1>About this Project</h1>
            <h2 className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make specimen book. It has survived not
              only five centuries, but also the leap into
            </h2>
          </div>
          <div className="max-w-xl">
            <h1>About this Project</h1>
            <h2 className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make specimen book. It has survived not
              only five centuries, but also the leap into
            </h2>
          </div>
        </div>
        <Link href={"/game"}>
          <div className="bg-gradient-to-r h-fit mt-10  from-purple-500 to-pink-500  p-2 w-fit rounded-md text-white text-center cursor-pointer">
            <p>{"Continue to Dashboard"}</p>
          </div>
        </Link>
      </div>
      <Image
        height={600}
        width={600}
        alt=""
        src={
          "https://ethereum.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fimpact_transparent.7420c423.png&w=1504&q=75"
        }
      />
    </main>
  );
}
