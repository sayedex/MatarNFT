import React, { ChangeEvent } from "react";

type Props = {
  label: string;
  handlevaluechange: (value: any) => void;
  value: any;
  placeHolder:string
};


function Dynamicinput({ handlevaluechange, value, label,placeHolder }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handlevaluechange(e.target.value);
  };
  return (
    <div className="flex flex-col gap-2 dark:text-darktext">
      <p className="tranfer_lebel dark:text-darktext">{label}</p>
      <div>
        <div className="relative w-full">
          <div>
            <div className="relative w-full">
              <input
                className="py-2.5 dark:text-darktext bg-[#FFFFFF] dark:bg-grayDark border-[1px] dark:border-none  border-grayborder   px-4 rounded-md w-full text-sm h-[48px] "
                placeholder={placeHolder}
                value={value}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dynamicinput;
