import React from "react";
import { HeaderList } from "@/config/Headerlist";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AllsocialMedia } from "@/config";
type Props = {};

function Sidebar({}: Props) {
  const pathName = usePathname();

  return (
    <div className="hidden xl:flex xl:flex-shrink-0 w-[360px] ">
      <div className="absolute  overflow-y-auto z-50 bottom-0 right-0 md:top-0 left-0 w-[360px] bg-gradient-to-b from-slate-900 to-sky-950  ">
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-4 flex-1  ">
            <Link
              href="/"
              className="mb-12 flex gap-3 items-center cursor-pointer pt-12"
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
                  className={`flex gap-2 p-4 px-6 items-center hover:bg-opacity-50 rounded-[6px] ${
                    pathName === items.link
                      ? "bg-gradient-to-b from-sky-500 to-blue-800"
                      : "text-black-2"
                  }`}
                >
                  <Image
                    src={`/sidebar/${items.icon}`}
                    alt={items.name}
                    width={34}
                    height={34}
                  />
                  <p className="text-16 font-semibold max-xl:hidden font-RussoOne text-white">
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
          <div className="text-white text-sm font-normal font-Manjari text-center py-4">@ 2024. All rights reserved by Matar</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
