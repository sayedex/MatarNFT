"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Bars3Icon,
} from "@heroicons/react/20/solid";
import useScrollPastThreshold from "@/hooks/useScrollPastThreshold";

interface MobilebarProps {
  setShowSidebar: (value: boolean) => void;
}

function Mobilebar({ setShowSidebar }: MobilebarProps) {
  const isBlur = useScrollPastThreshold();
  const pathName = usePathname();
  return (
    <div
      className={`md:hidden z-20 fixed top-0 left-0 right-0 px-3 py-8 flex [&>*]:my-auto  justify-between items-center ${
        isBlur ? "backdrop-blur-md" : ""
      } z-[10]`}
    >
      <Link
        href="/"
        className="flex  items-center cursor-pointer "
      >
        <img
          src="/MATARLOGO.png"
          alt="MATARLOGO logo"
          className="mx-auto w-12 pointer-events-none"
        />
      </Link> 

      <button onClick={() => setShowSidebar(true)}>
        <Bars3Icon className="w-8 h-8  hover:opacity-60 text-white cursor-pointer duration-300 ease-in-out transition-opacity " />
      </button>
    </div>
  );
}

export default Mobilebar;
