import { useAppSelector, useAppdispatch } from "@/hooks/redux"; // Assuming you have a custom Redux hook
import { addLocalImage } from "@/store/Nftslice";
import { createImage } from "@/reducer/genarate";
import { useState } from "react";
import userService from "@/service/Nft";
import axios from "axios";
import { toast } from "react-toastify";
const useNft = () => {
  const dispatch = useAppdispatch();
  const { signin, login, loading, genarateload, imageurl, ipfsuri } =
    useAppSelector((state) => state.Nftslice);

  const [uploadLoading, setUploaduploadLoading] = useState(false);
  const [ipfsurl, setipfsurl] = useState("");
  const [balance, setbalance] = useState("");

  const genarateImage = (data: any) => {
    dispatch(createImage({ data }));
  };

  const addImage = (url: string) => {
    dispatch(addLocalImage({ url: url }));
  };

  const UploadLocalImage = async (fileImg: any) => {
    setUploaduploadLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", fileImg);
      const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_PINATA_JWT}`,
        },
      });
      const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
      setUploaduploadLoading(false);
      return ImgHash;
    } catch {
      setUploaduploadLoading(false);
      return "";
    }
  };

  const Storenft = async (
    imageurl: string,
    nftinfo: {
      name: string;
      description: string;
    }
  ) => {
    let sign_toast_id;
    sign_toast_id = toast.loading("Uploading metadata to IPFS...");

    setUploaduploadLoading(true);

    const data = {
      image: imageurl,
      name: nftinfo.name,
      description: nftinfo.description,
    };

    try {
      const res = await userService.storenft(data);
      const url = res.data.ipfsUri;
      setipfsurl(url);
      toast.dismiss(sign_toast_id);
      toast.success("Metadata uploaded successfully - Minting started!");

      setUploaduploadLoading(false);
      return true;
    } catch (error) {
      toast.dismiss(sign_toast_id);
      console.error("Error upuploadLoading metadata:", error);
      setUploaduploadLoading(false);
      toast.error("Something went wrong. Please try again.");
    }

    return false;
  };

  return {
    signin,
    login,
    uploadLoading,
    genarateload,
    imageurl,
    genarateImage,
    ipfsurl,
    addImage,
    UploadLocalImage,
    Storenft,
  };
};
export default useNft;
