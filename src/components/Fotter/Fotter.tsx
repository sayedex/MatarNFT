import React from "react";
import { AllsocialMedia } from "@/config";
import Image from "next/image";
const LINK = [
  {
    name: "TELEGRAM",
    link: "",
  },
  {
    name: "X (TWITTER)",
    link: "",
  },
];
//from-pink-600 to-pink-900 
type Props = {};
//bg-gradient-to-b from-teal-300 to-teal-500
function Fotter({}: Props) {
  return (
    <div className="stopscrollpadding" id="contact">
      {/* box */}
      <div className="px-3 mb-12">
        <div className="max-w-7xl  bg-white  py-8 space-y-10  rounded-[36px] bg-opacity-75  mx-auto  ">
          <div className=" text-center text-slate-900 text-5xl font-bold font-PlusJakartaSans leading-[68px]">
            Join Community
          </div>
          <div className="max-w-[600px] mx-auto flex flex-wrap gap-5 md:gap-14">
            {LINK.map((e, indx) => {
              return (
                <a
                  key={indx}
                  href={""}
                  target="_blank"
                  className={`h-[63px] bg-gradient-to-b  rounded-[5px] justify-start  transition-all hover:bg-white  w-fit  mx-auto px-[25px] py-2.5 
                  items-start gap-2.5 inline-flex ${indx==0 ? "from-green-500 to-green-700":"from-pink-600 to-pink-900 "}`}
                >
                  <div
                    className="text-slate-900
                    font-['Audiowide'] text-[25px] uppercase leading-[42.64px] "
                  >
                    {e.name}
                  </div>
                </a>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-5 justify-center py-2">
            {AllsocialMedia.map((e, index) => {
              return (
                <a
                  key={index}
                  href={""}
                  target="_blank"
                  className=" w-[68.52px]  transition-all hover:bg-opacity-50  h-[69.53px] flex items-center justify-center  bg-slate-900 bg-opacity-5 rounded-[5px] bg-opacity-10"
                >
                  <Image
                    src={`/fotter/${e.name}`}
                    width={e.w}
                    height={e.h}
                    alt="sayed"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {/* box */}

      {/* social */}

      {/* social */}

      {/* copyright     */}
      <div className="py-10 border-t-2  border-white border-opacity-20">
        <div className=" text-white text-sm md:text-lg text-center font-normal font-['Plus Jakarta Sans']">{`©All rights reserved ©2024 Foxe Erope.`}</div>
      </div>
      {/* copyright     */}
    </div>
  );
}

export default Fotter;
