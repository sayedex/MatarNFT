import React, { ChangeEvent } from "react";
import {
  SunIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

type Props = {
  handlevaluechange: (value: string) => void;
  value: string;
};

function InputAmount({ handlevaluechange, value }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    handlevaluechange(inputValue);
  };

  const handleIncrement = () => {
    handlevaluechange((Number(value) + 1).toString());
  };

  const handleDecrement = () => {
    const newValue = Math.max(Number(value) - 1, 0);
    handlevaluechange(newValue.toString());
  };

  return (
    <div className="relative w-full flex items-center py-4   bg-gradient-to-b from-sky-500 to-blue-800 rounded-[10px] border-2 border-cyan-400">
      <input
        type="text"
        title="Only numeric values are allowed."
        pattern="^[0-9]*(\.[0-9]*)?$"
        placeholder="Enter the prompt"
        className="focus:scroll-auto forced-colors:bg-clip-border placeholder:text-white capitalize border-none bg-transparent focus:ring-0 focus:border-0 outline-none text-white px-4 rounded-2xl w-full"
        value={value}
        onChange={handleChange}
      />
      {/* <div className="flex flex-col">
        <button onClick={handleIncrement}>
          <ChevronUpIcon className="h-5 w-5 text-gray-500" />
        </button>
        <button onClick={handleDecrement}>
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        </button>
      </div> */}
    </div>
  );
}

export default InputAmount;
