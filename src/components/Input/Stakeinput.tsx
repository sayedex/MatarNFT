import React, { ChangeEvent } from "react";
import { SunIcon, MoonIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";
type Props = {
  label: string;
  handlevaluechange: (value: any) => void;
  handgleOpendate: () => void;
  value: any;
  placeHolder:string
};

function Stakeinput({ handlevaluechange, value, label ,handgleOpendate,placeHolder}: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handlevaluechange(e.target.value);
  };


  return (
    <div className="flex flex-col gap-2">
      <p className="tranfer_lebel dark:text-darktext">{label}</p>
      <div>
        <div className="relative w-full items-center">
          <div>
          
            <div className="relative w-full">
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 bg-[#FFFFFF] dark:text-darktext dark:bg-grayDark border-[1px] dark:border-none  border-grayborder  py-3 border-gray-300 px-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeHolder}
                value={value}
                onChange={handleChange}
              />
              <div className="absolute inset-y-0 end-[15px] flex items-center ps-3 cursor-pointer">
                <CalendarDaysIcon onClick={()=>handgleOpendate()} width={20} className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stakeinput;
