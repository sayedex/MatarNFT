import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "@/service/Nft";
import { toast } from "react-toastify";
export const createImage = createAsyncThunk(
  "createImage",
  async (params: { data: any }, { rejectWithValue }) => {
    try {
      const response = await userService.createImage(params.data);
      const imageurl = response.data.imageurl;
      const ipfsuri = response.data.ipfsuri;
      return { imageurl, ipfsuri };
    } catch (error: any) {
      toast.error(error.response.data);

      return rejectWithValue(error.response.data);
    }
  }
);

export const Storenfttoipfs = async (data: any) => {
  try {
    const res = await userService.storenft(data);
    return res.data.ipfsUri;
  } catch {}
};

interface SignatureResponse {
  cost: number;
  signature: string;
  msg:string;
}

interface ErrorResponse {
  message: string;
  [key: string]: any;
}

export const getSignatureforUser = createAsyncThunk<
  SignatureResponse,
  void,
  { rejectValue: ErrorResponse }
>(
  'getSignatureforUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await userService.getSignature();
      const res = response.data as SignatureResponse;

      return {
        cost: res.cost,
        signature: res.signature,
        msg:res.msg
      };
    } catch (error: any) {
      const errorMessage = error.response?.data as ErrorResponse;
      toast.error(errorMessage.message);

      return rejectWithValue(errorMessage);
    }
  }
);