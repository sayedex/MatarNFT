import React from "react";
import { Progress, Space } from "antd";
import { useTheme } from "next-themes";
type Props = {
    filled:number
};

function Circle({filled}: Props) {
    const { systemTheme, theme, setTheme } = useTheme();

    
    const containerStyle = {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      backgroundColor: theme === "dark" ? "#233649" : "#E5EEF6",
    };
  
    const filledStyle = {

      width: "100%",
      height: "100%",
      clipPath: `polygon(0 0, 100% 0, 100% ${100 - filled}%, 0 ${100 - filled}%)`,
      backgroundColor: "#0ddace",
      borderRadius: "50%",
    };

  return (
  <Progress
       type="circle"
      percent={filled}
       showInfo={false}
       strokeColor={"#0ddace"}
      size={82}
     strokeWidth={10}
    trailColor={theme=="dark" ? "#233649":"#E5EEF6"}
    style={{
      boxShadow:  `${theme === "dark" ? "0px 0px 16px 0px #80FFCCCF" :"0px 0px 0px 0px #80FFCCCF"}`,
      borderRadius:"100px",
      width: 'fit-content'
    }}
    />
    // <div style={containerStyle} className='relative'>
    //   <div style={filledStyle} className='absolute'></div>
    // </div>
  );
}

export default Circle;
