import { useAppSelector, useAppdispatch } from "@/hooks/redux"; // Assuming you have a custom Redux hook
import { addLocalImage } from "@/store/Nftslice";
import { createImage } from "@/reducer/genarate";
const useNft = () => {
  const dispatch = useAppdispatch();
  const { signin, login, loading, genarateload, imageurl, ipfsuri } =
    useAppSelector((state) => state.Nftslice);

  const genarateImage = (data: any) => {
    dispatch(createImage({ data }));
  };

  const addImage = (url: string) => {
    dispatch(addLocalImage({ url: url }));
  };

  return {
    signin,
    login,
    loading,
    genarateload,
    imageurl,
    genarateImage,
    ipfsuri,
    addImage,
  };
};
export default useNft;