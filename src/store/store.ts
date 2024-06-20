import { configureStore } from '@reduxjs/toolkit';
import walletSlice from "./walletSlice";
import Nftslice from "./Nftslice"
const store = configureStore({
    reducer: {
        wallet:walletSlice,
        Nftslice:Nftslice
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =  typeof store.dispatch