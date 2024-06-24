import React from "react";
import { HeaderList } from "@/config/Headerlist";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AllsocialMedia } from "@/config";
import { XMarkIcon } from "@heroicons/react/20/solid";
interface TopheaderProps {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
}

function Sidebar({ setShowSidebar, show }: TopheaderProps) {
  const pathName = usePathname();

  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => setShowSidebar((oldVal) => !oldVal)}
    />
  );

  const className =
    "bg-sidebar-bg w-[300px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
  // Append class based on state of sidebar visiblity
  const appendClass = show ? " ml-0" : " ml-[-300px] md:ml-0";

  return (
<>
      <div className={`${className}${appendClass}`}>
        <div className="flex flex-col h-full w-full">
          <div className="flex justify-end pl-8 pt-4 z-40">
            <XMarkIcon
              onClick={() => setShowSidebar((oldVal) => !oldVal)}
              className="w-8 h-8 text-white md:hidden float-right hover:opacity-60 cursor-pointer hover:scale-110"
            />
          </div>
          <div className="flex flex-col gap-4 flex-1 w-full  ">
            <Link
              href="/"
              className="mb-12 flex gap-3 items-center cursor-pointer pt-6"
            >
              <Image
                src="/MATARLOGO.png"
                width={132}
                height={138}
                alt="MATARLOGO logo"
                className="mx-auto"
              />
            </Link>
            {HeaderList.map((items, indx) => (
              <Link href={items.link} key={indx}>
                <div
                  className={`flex gap-2 relative   p-4 px-6 items-center hover:bg-opacity-50 ${
                    pathName === items.link
                      ? "bg-sidebar-active manu-active"
                      : ""
                  }  hover:bg-opacity-70`}
                >
                  <Image
                    src={`/sidebar/${items.icon}`}
                    alt={items.name}
                    width={25}
                    height={25}
                  />
                  <p className="text-sm font-semibold  font-RussoOne text-white pointer-events-none">
                    {items.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="pb-12">
            <div className="flex flex-row h-fit gap-5 justify-center py-2 px-3  ">
              {AllsocialMedia.map((e, index) => {
                return (
                  <a
                    key={index}
                    href={""}
                    target="_blank"
                    className="  transition-all hover:bg-opacity-50  flex items-center justify-center   rounded-[5px] bg-opacity-10"
                  >
                    <Image
                      src={`/social/${e.name}`}
                      width={30}
                      height={30}
                      alt="sayed"
                    />
                  </a>
                );
              })}
            </div>
            <div className="text-white text-sm font-normal font-Manjari text-center py-4">
              @ 2024. All rights reserved by Matar
            </div>
          </div>
        </div>
      </div>

      {show ? <ModalOverlay /> : <></>}
  </>
  );
}

export default Sidebar;
