import React, { useState } from "react";
import InputAmount from "./Helper/InputAmount";
import { tag_search } from "@/config/nft";
import useNft from "@/hooks/useNft";
import PuffLoader from "react-spinners/PuffLoader";
import LazyloadImage from "@/components/Lazyload/LazyloadImage";
import { ConvertLink } from "@/utils/ipfs";
import {
ArrowDownTrayIcon
  } from "@heroicons/react/24/solid";
type Props = {};

function Main({}: Props) {
  const [artPrompt, setartPrompt] = useState("");

  // hook
  const {
    signin,
    login,
    loading,
    imageurl,
    genarateImage,
    genarateload,
    ipfsuri: Imageifps,
    addImage,
  } = useNft();

  const handleChange = (e: string) => {
    setartPrompt(e);
  };


  const MakeImage = async()=>{


    

    genarateImage({
      prompt:artPrompt
    })
  }


  const handleDownload = async () => {


      try {
        const _url = ("https://oaidalleapiprodscus.blob.core.windows.net/private/org-7pKfDV3DttfWywUgHtJkwREN/user-W7LUZ3LG26x7uyj8XBDIccoj/img-mb7cUkkwPFNtl1E6sn7cO1HC.png?st=2024-06-24T02%3A52%3A05Z&se=2024-06-24T04%3A52%3A05Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-06-23T14%3A19%3A18Z&ske=2024-06-24T14%3A19%3A18Z&sks=b&skv=2023-11-03&sig=AS/5u4xUrZw6FAODpiT%2BU6HmGqBvJZlVjCaMY44Xkh0%3D");
        const proxyUrl = `/api/proxy?url=${encodeURIComponent(_url)}`;

       
        fetch(_url)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = 'downloaded_image.png';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        })
        .catch(() => alert('Failed to download image'));

    
      } catch (error) {
        console.error("Error downloading image:", error);
   
      }
  
  };

  const startDownload = () => {
    const _url = "https://oaidalleapiprodscus.blob.core.windows.net/private/org-7pKfDV3DttfWywUgHtJkwREN/user-W7LUZ3LG26x7uyj8XBDIccoj/img-mb7cUkkwPFNtl1E6sn7cO1HC.png?st=2024-06-24T02%3A52%3A05Z&se=2024-06-24T04%3A52%3A05Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-06-23T14%3A19%3A18Z&ske=2024-06-24T14%3A19%3A18Z&sks=b&skv=2023-11-03&sig=AS/5u4xUrZw6FAODpiT%2BU6HmGqBvJZlVjCaMY44Xkh0%3D?sayed=12";
    
    const image = new Image();
    image.crossOrigin = "Anonymous"; // Required to avoid CORS issues
    image.src = _url;

    image.onload = function() {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx:any = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);
      
      // Convert canvas to data URL
      const dataURL = canvas.toDataURL('image/png');
      
      // Create a temporary anchor element to trigger download
      const a = document.createElement('a');
      a.href = dataURL;
      a.download = 'downloaded_image.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
    
    image.onerror = function() {
      console.error('Failed to load the image.');
    };
  };



  return (
    <div className=" bg-cyan-400 bg-opacity-10 rounded-[10px] border border-cyan-400 px-8 py-12 max-w-7xl mx-auto">
      <div className="flex flex-row   bg-opacity-5 rounded-[5px]">
        <InputAmount value={artPrompt} handlevaluechange={handleChange} />
        {/* <GenerateButton
          connetwallet={address != undefined}
          onClickSignin={() => loginUser()}
          signin={signin}
          loading={genarateload == "pending" || loading == "pending"}
          onClickGenerate={GenarateNFT}
        /> */}
      </div>

      <div className="flex flex-wrap gap-5 pt-5 ">
        {tag_search.map((e, index) => {
          return (
            <button
              onClick={() => handleChange(e)}
              className="px-2 py-1 text-sm flex items-center font-Oxanium text-white  bg-sky-500/opacity-5 border border-sky-500"
              key={index}
            >
              {e}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-[400px] border border-cyan-400  bg-cyan-400 bg-opacity-10 rounded-[50px] mt-8">
          {genarateload == "pending" ? (
            <div className="text-center mt-10  aspect-square flex items-center justify-center">
              <div className="text-white text-center flex justify-center flex-col">
                {" "}
                <PuffLoader className="mx-auto" color="#ffff" /> Please wait..
              </div>{" "}
            </div>
          ) : imageurl === "" ? (
            <div className="w-full flex flex-col items-center justify-center  aspect-square	  mx-auto   ">
              <div>
                <img className="px-2 md:px-5 pointer-events-none" src="/MATARLOGONFT.png" />
              </div>
            </div>
          ) : (
            <div className="mx-auto flex justify-center py-5 mt-2">
              <LazyloadImage src={ConvertLink(imageurl)} />
            </div>
          )}
        </div>

        <div className="py-10 md:w-[50%] flex flex-col">
          <div className="flex-1">
            <div className=" text-white text-2xl font-medium font-Oxanium capitalize">
              {artPrompt}
            </div>
            <div className=" text-white text-sm font-medium font-Oxanium capitalize">
              1024 x 1024{" "}
            </div>
            <div className="h-[2px] bg-cyan-400 w-full mt-2 "></div>
            <div className="mt-6 flex flex-row items-center gap-3 mb-6" >
            <button onClick={()=>MakeImage()} className="sButton bg-btn-gradient ">
              Mint Now
            </button>
            <button onClick={()=>handleDownload()} className="sButton flex flex-row items-center gap-2">
              <ArrowDownTrayIcon width={20} height={20} className="text-white font-bold"/>
              Download
            </button>
          </div>
          </div>
       

          <div className="">
            <div className="text-white text-xl font-medium font-Oxanium capitalize mb-3">
              Note:
            </div>
            <div className="text-white text-base md:text-xl font-medium font-Oxanium capitalize bg-gradient-to-b from-sky-500 to-blue-800 rounded-[10px] px-3 py-3">
              Price: 1$ of matar for minting + bNB Fees
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
