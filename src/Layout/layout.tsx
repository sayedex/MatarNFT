import { useAppSelector, useAppdispatch } from "../hooks/redux";
import { useEffect ,useState} from "react";
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
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-sine",
      // delay: 100,
    });
  }, []);

  return (
    <div className="flex " >
      <Sidebar show={showSidebar} setShowSidebar={setShowSidebar}  />
      <Mobilebar setShowSidebar={setShowSidebar} />
      <div className="relative overflow-y-auto overflow-x-hidden  flex-grow w-screen md:w-full min-h-screen">
        <Topheader/> {props.children}
      </div>
      {/* <GoToTop /> */}
      {/* <Fotter /> */}
    </div>
  );
};

export default Layout;
