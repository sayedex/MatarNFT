import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { createImage } from "@/reducer/genarate";
export interface PoolsState {
  loading: "idle" | "pending" | "done" | "error";
  genarateload: "idle" | "pending" | "done" | "error";
  signin: boolean;
  login: boolean;
  imageurl: string;
  ipfsuri: any;
  
}

const initialState: PoolsState = {
  loading: "idle",
  genarateload: "idle",
  signin: false,
  login: false,
  imageurl: "",
  ipfsuri: "",
};

// Define the slice for pools data and token prices
const Nftslice = createSlice({
  name: "Nftslice",
  initialState,
  reducers: {
    addLocalImage: (state, action: PayloadAction<{ url: string }>) => {
      state.imageurl = action.payload.url;
    },
  },
  extraReducers: (builder) => {
      builder
        .addCase(createImage.pending, (state) => {
          state.genarateload = "pending";
          state.imageurl = "";
        })
        .addCase(createImage.fulfilled, (state, action) => {
          state.genarateload = "done";
          state.imageurl = action.payload.imageurl;
          state.ipfsuri = action.payload.ipfsuri;
          console.log(action, "action");
        })
        .addCase(createImage.rejected, (state, action) => {
          state.genarateload = "error";
          console.log(action.error);
        });
  },
});

export const { addLocalImage } = Nftslice.actions;
export default Nftslice.reducer;
