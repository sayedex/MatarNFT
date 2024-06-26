import React, { useState } from "react";
import InputAmount from "./Helper/InputAmount";
import { tag_search } from "@/config/nft";
import { Token_contract, Presale_contract, MINT_COST } from "@/config";
import useNft from "@/hooks/useNft";
import { useEthersSigner } from "@/hooks/useEthersSigner";
import useMintHooks from "@/hooks/useTransation";
import PuffLoader from "react-spinners/PuffLoader";
import ScaleLoader from "react-spinners/ScaleLoader"
import LazyloadImage from "@/components/Lazyload/LazyloadImage";
import { ConvertLink } from "@/utils/ipfs";
import { Mintnft } from "./model/Model";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
type Props = {};

const chainId = 137;
function Main({}: Props) {
  const {isConnected,address} = useAccount()
  const [artPrompt, setartPrompt] = useState("");
  const [mintmodel, setmintmodel] = useState(false);
  const [stepindex, setstepindex] = useState(0);
  const [fileImg, setFileImg] = useState<File | null>(null);
  const [isLocalImg, setisLocalImg] = useState(false);
  const [nftinfo, setnftinfo] = useState({
    name: "",
    description: "",
  });

  // hook
  const {
    signin,
    login,
    uploadLoading,
    imageurl,
    genarateImage,
    genarateload,
    ipfsurl:MetadataURI,
    addImage,
    UploadLocalImage,
    Storenft,
  } = useNft();
  const signer = useEthersSigner({ chainId: chainId });
  const { ApproveAndMint,loading,balance } = useMintHooks(signer, chainId);
  const handleChange = (e: string) => {
    setartPrompt(e);
  };

  const storenftformetadata = async () => {

    if(Number(balance) < MINT_COST){
      toast.error("Low balance");
      return;
    }
    
    if(imageurl==""){
      toast.error("Image cannot be empty");
      return;
    }
    if (!nftinfo.name.trim() || !nftinfo.description.trim()) {
      toast.error("Name and description cannot be empty");
      return;
    }
    //take image from local image if localimage true ..
    if (isLocalImg) {
      const uploadLocal = await UploadLocalImage(fileImg);

      const isdone = await Storenft(uploadLocal, nftinfo);
      if (isdone) {
        setstepindex(1);
        ApproveAndMint(MetadataURI);
        setmintmodel(false)
        // lets run minting transation...
      }

      // const uploadLocal = UploadLocalImage("")
    } else {
      const isdone = await Storenft(imageurl, nftinfo);
      if (isdone) {
        setstepindex(1);
        ApproveAndMint(MetadataURI);
        setmintmodel(false)
        // lets run minting transation...
      }
    }


  };

  const Mint = async () => {
    ApproveAndMint('sayed.com')
  };
  const Generate = async () => {
    if(!artPrompt.trim() ){
      toast.error("prompt cannot be empty");
      return;
    }
    genarateImage({
      prompt: artPrompt,
    });
  };


  const MintModel  = ()=>{
    if(imageurl==""){
      toast.error("Image cannot be empty");
      return;
    }

    if(!address){
      toast.error("Please connect your wallet");
      return;
    }

    setmintmodel(true);
  }



  const handleInfoChange = (fieldName: string, value: string) => {
    setnftinfo((prevInfo) => ({
      ...prevInfo,
      [fieldName]: value,
    }));
  };
  const handleDownload = async () => {
    if (imageurl !== "") {
      try {
        const _url = ConvertLink(imageurl);
        const response = await fetch(_url);
        const imageblob = await response.blob();

        const anchor = document.createElement("a");
        anchor.href = URL.createObjectURL(imageblob);
        anchor.download = "image.png";

        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);

        toast.success("Image downloaded successfully!");

        
      } catch (error) {
        console.error("Error downloading image:", error);
        toast.error("Failed to download image. Please try again.");
      }
    }
  };


  return (
    <div className=" bg-cyan-400 bg-opacity-10 rounded-[10px] border border-cyan-400 px-8 py-12 max-w-7xl mx-auto">
      <Mintnft
        open={mintmodel}
        mintnft={() => Mint()}
        uploadmetadata={() => storenftformetadata()}
        stepindex={stepindex}
        onClose={() => setmintmodel(false)}
        loading={uploadLoading || loading}
        onInfoChange={handleInfoChange}
      />

      <div
        className="flex flex-row   bg-opacity-5 rounded-[5px] space-x-5 font-Oxanium"
      >
        <InputAmount value={artPrompt} handlevaluechange={handleChange} />
        <button
          onClick={() => Generate()}
          disabled={genarateload == "pending"}
          className="text-white bg-gradient-to-b px-6 from-sky-500 to-blue-800 rounded-[10px] border-2 border-cyan-400"
        >
          Generate
        </button>
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
        <div className="w-full md:w-[400px] mt-8">
          {genarateload == "pending" ? (
            <div className="text-center mt-10  aspect-square flex items-center justify-center">
              <div className="text-white text-center flex justify-center flex-col font-Oxanium">
                {" "}
                <PuffLoader className="mx-auto" color="#ffff" /> Please wait..
              </div>{" "}
            </div>
          ) : imageurl === "" ? (
            <div className="w-full flex flex-col items-center justify-center  aspect-square	  mx-auto border border-cyan-400  bg-cyan-400 bg-opacity-10 rounded-[50px]    ">
              <div>
                <img
                  className="px-2 md:px-5 pointer-events-none"
                  src="/MATARLOGONFT.png"
                />
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
            <div className="mt-6 flex flex-row items-center gap-3 mb-6 font-Oxanium">
              <button
             disabled={ uploadLoading || loading}
                onClick={() => {
                  MintModel();
                  // Mint()
                }}
                className="sButton bg-btn-gradient h-[50px] "
              >
              {
                  uploadLoading || loading ? <ScaleLoader  color="#ffff"/>:"  Mint Now"
                }
              </button>
              <button
                onClick={() => handleDownload()}
                className="sButton flex flex-row items-center gap-2"
              >
                <ArrowDownTrayIcon
                  width={20}
                  height={20}
                  className="text-white font-bold"
                />
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
