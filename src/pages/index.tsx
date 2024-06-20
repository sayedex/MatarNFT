import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import Hero from "@/components/Home/Hero";
import { ethers } from "ethers";

//chart
import { useAccount } from "wagmi";

export default function Home() {
  const { address } = useAccount();



  return (
    <div className=" relative overflow-x-hidden flex items-center h-full px-6 w-full pb-16  ">
  <Hero/>
    </div>
  );
}
