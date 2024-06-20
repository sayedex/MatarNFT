import React from 'react'

type Props = {
    label: string;
    value:string
}

function Staticinput({label,value}: Props) {
  return (
    <div className="relative flex flex-col gap-2 text-left min-w-full">
    <p className="tranfer_lebel dark:text-darktext">{label}</p>
    <div>
      <button className="space-x-2  bg-[#FFFFFF] dark:border-none  dark:bg-grayDark border-[1px] border-grayborder text-sm hover:bg-midnight-100 text-default hover:text-info hover:dark:text-white  transition-colors group w-full px-4 py-4 relative rounded-lg flex items-center justify-between h-12 sm:px-4 bg-transparent font-sm">
        <div className="flex items-center truncate flex-1 !overflow-visible">
          <div className="text-left font-normal">
            <span className="text-sm">{value?.slice(0, 5) + "..." + value?.slice(-5)}</span>
          </div>
        </div>
      </button>
    </div>
  </div>
  )
}

export default Staticinput