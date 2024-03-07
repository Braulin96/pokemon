"use client";
import { useState } from "react";

export default function Home() {
  const [showLanding, setShowLanding] = useState(false);
  console.log(showLanding);

  return (
    <div
      className="flex h-full my-auto bg-[#17181C] justify-center"
      style={{
        height: "100vh",
        maxHeight: "1000px",
      }}
    >
      <div
        className={`flex flex-col max-w-7xl text-white my-auto text-center gap-y-8 transition-all duration-[2s] ${
          showLanding ? "-translate-y-[1200px]" : "translate-y-0"
        } `}
      >
        <p className="md:text-3xl text-2xl font-extralight">
          Welcome to our PokeApp <br /> Let's find your favorite pokemon
        </p>
        <a
          onClick={() => setShowLanding(!showLanding)}
          className="cursor-pointer slide md:text-2xl text-xl font-extralight px-6 py-1.5 bg-white w-fit mx-auto rounded-full"
        >
          Let's Start
        </a>
      </div>
    </div>
  );
}
