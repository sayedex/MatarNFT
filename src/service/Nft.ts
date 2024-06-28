import newRequest from "../utils/API";
const globalService = {
  createImage:(data:any)=>{
    return newRequest.post("/user/createImage",data)
  },
  storenft:(data:any)=>{
    return newRequest.post("/user/storenft",data)
  },
  checkfreelimit:()=>{
    return newRequest.get("/user/checkfreelimit")
  },
  getSignature:()=>{
    return newRequest.post("/user/getSignature")
  }
};

export default globalService;
