// src/services/productService.js
import newRequest from "../utils/API";
import axios from "axios";

const globalService = {
  nonce:()=>{
    return newRequest.get("/user/nonce")
  },
  createImage:(data:any)=>{
    return newRequest.post("/user/createImage",data)
  },
  storenft:(data:any)=>{
    return newRequest.post("/user/storenft",data)
  },
  checkfreelimit:()=>{
    return newRequest.get("/user/checkfreelimit")
  }
};

export default globalService;
