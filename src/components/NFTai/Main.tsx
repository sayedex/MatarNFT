import React, { useState } from "react";
import InputAmount from "./Helper/InputAmount";
import { tag_search } from "@/config/nft";
import useNft from "@/hooks/useNft";
import PuffLoader from "react-spinners/PuffLoader";
import LazyloadImage from "@/components/Lazyload/LazyloadImage";
import { ConvertLink } from "@/utils/ipfs";
import {
ArrowDownTrayIcon
  } from "@heroicons/react/24/solid";
type Props = {};

function Main({}: Props) {
  const [artPrompt, setartPrompt] = useState("");

  // hook
  const {
    signin,
    login,
    loading,
    imageurl,
    genarateImage,
    genarateload,
    ipfsuri: Imageifps,
    addImage,
  } = useNft();

  const handleChange = (e: string) => {
    setartPrompt(e);
  };

  return (
    <div className=" bg-cyan-400 bg-opacity-10 rounded-[10px] border border-cyan-400 px-8 py-12 max-w-7xl mx-auto">
      <div className="flex flex-row   bg-opacity-5 rounded-[5px]">
        <InputAmount value={artPrompt} handlevaluechange={handleChange} />
        {/* <GenerateButton
          connetwallet={address != undefined}
          onClickSignin={() => loginUser()}
          signin={signin}
          loading={genarateload == "pending" || loading == "pending"}
          onClickGenerate={GenarateNFT}
        /> */}
      </div>

      <div className="flex flex-wrap gap-5 pt-5 ">
        {tag_search.map((e, index) => {
          return (
            <button
              onClick={() => handleChange(e)}
              className="px-2 py-1 text-sm flex items-center font-Oxanium text-white  bg-sky-500/opacity-5 border border-sky-500"
              key={index}
            >
              {e}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-[400px] border border-cyan-400  bg-cyan-400 bg-opacity-10 rounded-[50px] mt-8">
          {genarateload == "pending" ? (
            <div className="text-center mt-10  aspect-square flex items-center justify-center">
              <div className="text-[#e8b10e] text-center flex justify-center flex-col">
                {" "}
                <PuffLoader className="mx-auto" color="#e8b10e" /> Please wait..
              </div>{" "}
            </div>
          ) : imageurl === "" ? (
            <div className="w-full flex flex-col items-center justify-center  aspect-square	  mx-auto   ">
              <div>
                <img className="px-2 md:px-5 pointer-events-none" src="/MATARLOGONFT.png" />
              </div>
            </div>
          ) : (
            <div className="mx-auto flex justify-center py-5 mt-2">
              <LazyloadImage src={ConvertLink(imageurl)} />
            </div>
          )}
        </div>

        <div className="py-10 md:w-[50%] flex flex-col">
          <div className="flex-1">
            <div className=" text-white text-2xl font-medium font-Oxanium capitalize">
              {artPrompt}
            </div>
            <div className=" text-white text-sm font-medium font-Oxanium capitalize">
              1024 x 1024{" "}
            </div>
            <div className="h-[2px] bg-cyan-400 w-full mt-2 "></div>
            <div className="mt-6 flex flex-row items-center gap-3 mb-6" >
            <button className="sButton bg-btn-gradient ">
              Mint Now
            </button>
            <button className="sButton flex flex-row items-center gap-2">
              <ArrowDownTrayIcon width={20} height={20} className="text-white font-bold"/>
              Download
            </button>
          </div>
          </div>
       

          <div className="">
            <div className="text-white text-xl font-medium font-Oxanium capitalize mb-3">
              Note:
            </div>
            <div className="text-white text-base md:text-xl font-medium font-Oxanium capitalize bg-gradient-to-b from-sky-500 to-blue-800 rounded-[10px] px-3 py-3">
              Price: 1$ of matar for minting + bNB Fees
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
