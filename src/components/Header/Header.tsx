import React, { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { HeaderList } from "../../config/Headerlist";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import ConnectButton from "../connetbutton/ConnectButton";

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const [scrolling, setScrolling] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960 && openNav) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navList = (
    <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-5 md:text-sm md:font-medium">
      {HeaderList?.map((e: any, index) => (
        <li key={index}>
          {e.islink ? (
            <a
              href={e?.link}
              target="_blank"
              rel="noreferrer"
              className={`nav_link_li`}
              onClick={() => {
                setOpenNav(false);
              }}
            >
              {e?.name}
            </a>
          ) : e.isDivlink ? (
            <a
              // scroll={(el) =>
              //   el.scrollIntoView({
              //     behavior: "smooth",
              //     block: "start", // Scroll to the top of the element
              //     inline: "nearest", // Align to the nearest edge of the viewport
              //   })
              // }
              href={e.link}
              // smooth={true}
              //  smooth={e.link=="nftai"?isDesktopOrLaptop?true:false:true}
              //href={e.link}
              onClick={() => {
                setOpenNav(false);
              }}
            >
              <p className={`nav_link_li cursor-pointer`}> {e?.name}</p>
            </a>
          ) : (
            <Link
              onClick={() => {
                setOpenNav(false);
              }}
              href={e?.link}
            >
              <p className={`nav_link_li `}> {e?.name}</p>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <header 
      className={`mx-auto ${
        openNav ? "pb-5 overflow-hidden  h-[100vh] " : "pb-0 "
      } ${
        scrolling ? "backdrop-blur-md" : ""
      }  items-center sticky  bg-transparent border-none z-[100]   w-full   top-[0px]  `}
    >
      <div className="mx-auto flex flex-wrap items-center justify-between container space-x-2">
        <Link
          href="/"
          className="cursor-pointer flex  justify-center items-center gap-3 p-5"
        >
          <img
            src="/FOX LOGO.svg"
            width={70}
            alt="logo"
            className=" cursor-pointer w-[60px]"
            height={50}
          />
          <div className=" hidden  md:block">
          <img
            src="/TEXT_LOGO.svg"
            alt="logo"
            className=" cursor-pointer "
            height={50}
          />

          </div>
        </Link>
        <div className="hidden lg:block">
          {navList}

          {/* <ConnectButtonwagmi /> */}
        </div>
        <div className="hidden  lg:flex  gap-3 flex-row items-center">
        <a className="homebtn text-white  font-PlusJakartaSans " href="" target='_blank'>
            <p> Telegram</p>
          </a>
        </div>

        <div className="flex flex-row gap-2 ">
          <IconButton
            variant="text"
            className="flex items-center text-xl text-white mr-3 h-8 w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
            placeholder=""
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="container">
          {navList}
          {/* <ConnectButtonwagmi /> */}
          <div className="px-3 flex flex-row gap-3 items-center">
           <a className="homebtn font-PlusJakartaSans tracking-[3px]" href="" target='_blank'>
            <p> Telegram</p>
          </a>
          </div>
        </div>
      </Collapse>
    </header>
  );
}
