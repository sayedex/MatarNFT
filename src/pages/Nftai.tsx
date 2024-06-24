import React from "react";
import Main from "@/components/NFTai/Main";
type Props = {};

function Nftai({}: Props) {
  return (
    <div className="px-3 md:px-10 py-14 md:py-12 max-w-7xl  mx-auto">
      <div className=" text-white text-5xl mb-12 md:text-7xl font-bold font-RussoOne mt-20 md:mt-16">
        Generate NFT & Mint
      </div>

      <Main></Main>
    </div>
  );
}

export default Nftai;
