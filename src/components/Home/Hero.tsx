import Link from "next/link";
import React from "react";

type Props = {};

const BUTTON = [
  {
    name: "Create your Own NFT",
    route: "/nftai",
  },
  {
    name: "How its work?",
    route: "/",
  },
];

function Hero({}: Props) {
  return (
    <div className="flex flex-col-reverse pt-20 md:pt-0 md:flex-row items-start justify-center gap-14 md:gap-16 w-full xl:max-w-7xl mx-auto ">
      <div className="w-full md:mt-12">
        <div className=" text-white text-4xl md:text-[70px] font-bold font-RussoOne">
          Generate NFT
        </div>
        <div className="  text-white text-2xl md:text-6xl font-semibold font-Oxanium capitalize py-6 md:py-12 md:leading-[70px]	 ">
          Revolutionize digital <br /> art with our platform
        </div>

        <div className="flex flex-col  md:flex-row gap-6 mx-auto">
          {BUTTON.map((e, indx) => {
            return (
              <Link
              key={indx}
                className={`${
                  indx == 0
                    ? " bg-gradient-to-b from-sky-500 to-blue-800"
                    : "bg-sky-500 bg-opacity-5"
                } px-6 py-4 font-Oxanium capitalize rounded-xl text-white
        `}
                href={e.route}
              >
                {e.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div>
        <img
          src="/NFTCards.png"
          className="pointer-events-none w-[90vw] md:max-w-[600px]"
        />
      </div>
    </div>
  );
}

export default Hero;
