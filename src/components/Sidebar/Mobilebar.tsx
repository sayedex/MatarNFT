"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { HeaderList } from "@/config/Headerlist";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from "@/components/ui/sheet";
type Props = {};
import {
  ChevronUpIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

function Mobilebar({}: Props) {
  const pathName = usePathname();
  return (
    <div className="flex flex-row justify-between items-center px-6 sticky top-0 xl:hidden ">
      <Link
        href="/"
        className="mb-12 flex gap-3 items-center cursor-pointer pt-12"
      >
        <Image
          src="/MATARLOGO.png"
          width={50}
          height={50}
          alt="MATARLOGO logo"
          className="mx-auto"
        />
      </Link>

      <section className="">
        <Sheet>
          <SheetTrigger>
            <Bars3Icon className="w-8 h-8 text-white cursor-pointer duration-300 ease-in-out transition-opacity " />
          </SheetTrigger>
          <SheetContent
            hideClose
            side="left"
            className="border-none w-full max-w-[400px] bg-gradient-to-b from-slate-900 to-sky-950  "
          >
            <SheetHeader className="flex flex-row justify-between items-center space-y-0">
              <Link
                href="/"
                className="mb-12 flex gap-3 items-center cursor-pointer pt-12"
              >
                <Image
                  src="/MATARLOGO.png"
                  width={50}
                  height={50}
                  alt="MATARLOGO logo"
                  className="mx-auto"
                />
              </Link>

              <SheetClose>
                <button>
                  <XMarkIcon className="w-8 h-8 text-white cursor-pointer duration-300 ease-in-out transition-opacity" />
                </button>
              </SheetClose>
            </SheetHeader>

            {/* MOBILE NAV INTIGRATION  */}

            <SheetClose asChild>
              <div className="mt-14 ml-4 h-full flex  flex-col justify-between ">
                <div className="w-full flex flex-col gap-3">
                  {HeaderList.map((items, indx) => (
                    <SheetClose asChild key={indx}>
                      <Link href={items.link} key={indx}>
                        <div
                          className={`flex gap-4 p-4 px-6 items-center hover:bg-opacity-50 rounded-[50px]  ${
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
                    </SheetClose>
                  ))}
                </div>
                <div className="mb-32">
                  {/* <Footer user={user} type={type} /> */}
                </div>
              </div>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </section>
    </div>
  );
}

export default Mobilebar;
