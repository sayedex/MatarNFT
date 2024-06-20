import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "@/service/Nft";

export const createImage = createAsyncThunk(
  "createImage",
  async (params: { data: any }, { rejectWithValue }) => {
    try {
      const response = await userService.createImage(params.data);
      const imageurl = response.data.imageurl;
      const ipfsuri = response.data.ipfsuri
      return { imageurl,ipfsuri };
    } catch (error: any) {
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
