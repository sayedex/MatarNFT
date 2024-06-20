import React from "react";
import { Progress, Space } from "antd";
import { useTheme } from "next-themes";
type Props = {
  filled: number;
  LfilledColor:string,
  dfilledColor:string
};
//#0ddace

function LineProgress({ filled ,LfilledColor,dfilledColor}: Props) {
    const { systemTheme, theme, setTheme } = useTheme();
    const color= `${theme === "dark"?LfilledColor:dfilledColor}`
    
    const filledBarStyle = {
      height: "100%",
      width: `${filled > 100 ? 100:filled}%`,
      backgroundColor: color,
      boxShadow: `${"0px 0px 16px 0px"} ${color}`,
    
    };
 
    
  
  return (
    // <Progress
    //   percent={filled}
    //   showInfo={false}
    //   strokeColor={"#0ddace"}
    //   strokeWidth={7}
    //   trailColor={theme=="dark" ? "#233649":"#E5EEF6"}
    // />

    <div className=" h-[10px]  bg-[#E5EEF6] dark:bg-[#2B3947] w-full rounded-2xl">
      <div className="rounded-2xl overflow-hidden"  style={filledBarStyle}>

      </div>
    </div>
  );
}

export default LineProgress;
