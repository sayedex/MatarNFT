import { useAppSelector, useAppdispatch } from "../hooks/redux";
import { useEffect } from "react";
import { Header as Headerrr } from "@/components/Header/Header";

import GoToTop from "@/components/Gtop/GoToTop";
import { useAccount } from "wagmi";
import { setNetwork } from "@/store/walletSlice";
import Fotter from "@/components/Fotter/Fotter";
import Sidebar from "@/components/Sidebar/Sidebar";
import Mobilebar from "@/components/Sidebar/Mobilebar";
import Topheader from "@/components/Header/Topheader";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = (props: any) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-sine",
      // delay: 100,
    });
  }, []);

  return (
    <div className="mx-auto bg-[#05042B] relative h-screen  xl:flex  ">
      <Sidebar />
      <Mobilebar />
      <div className="relative overflow-y-auto overflow-x-hidden flex-1">
        <Topheader/> {props.children}
      </div>
      {/* <GoToTop /> */}
      {/* <Fotter /> */}
    </div>
  );
};

export default Layout;
