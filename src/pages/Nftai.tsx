import React from "react";
import Main from "@/components/NFTai/Main";
type Props = {};

function Nftai({}: Props) {
  return (
    <div className="px-3 md:px-10 py-12 max-w-7xl  mx-auto">
      <div className=" text-white text-3xl mb-3 md:text-[100px] font-bold font-RussoOne">
        Generate NFT & Mint
      </div>

      <Main></Main>
    </div>
  );
}

export default Nftai;
