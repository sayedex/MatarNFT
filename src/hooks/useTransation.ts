import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  getTokeninstance,
  getContractInstanceSigner,
  getTokeninstanceBysigner,
  
} from "@/utils/contracthelper";
import { ConvertEthTonormal} from "@/utils/numbers";
import { getPublicProvider } from "@/utils/contracthelper";
import { Token_contract, Presale_contract } from "@/config";
import ABI from "@/config/ABI/Nftminter.json";
import { FormatUnit } from "@/utils/contracthelper";

const useMintHooks = (signer: any, chainId: number) => {
  const [loading, setLoading] = useState(false);
  const [balance, setbalance] = useState("0");

  const CheckBalance = async () => {
    setLoading(true);
    try {
      const myContract = await getTokeninstanceBysigner(
        Presale_contract,
        signer
      );
      const currentBalance = await myContract.balanceOf(signer._address);
      const userBalance = await ConvertEthTonormal(currentBalance, 18);
      setbalance(userBalance);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (signer != undefined) {
      CheckBalance();
    }
  }, [signer, Presale_contract]);

  const ApproveAndMint = async (url: string,sg:string,msg:string,cost:number) => {
    setLoading(true)
    const tokenContractInstance = await getTokeninstance(
      Token_contract,
      true,
      chainId,
      signer
    );

    const currentBalance = await tokenContractInstance.balanceOf(signer._address);
    const userBalance = await ConvertEthTonormal(currentBalance, 18);

    if (Number(userBalance) < Number(cost)) {
      toast.error("Low balance");
      return;
    }



    let approvalToastId;
    let mintingToastId;

  
    const MintercontractInstance = await getContractInstanceSigner(
      Presale_contract,
      ABI,
      signer
    );

    try {
      const amount = await FormatUnit(cost, 18);
      // Approval transaction
      approvalToastId = toast.loading("Approval started...");
      const approvalResponse = await tokenContractInstance.approve(
        Presale_contract,
        amount
      );
      const approvalReceipt = await approvalResponse.wait();
      toast.dismiss(approvalToastId);

      if (approvalReceipt) {
        toast.success("Approval successful");
      } else {
        toast.error("Approval failed");
        setLoading(false);
        return;
      }

      // Minting transaction
      mintingToastId = toast.loading("Minting started...");
      const mintResponse = await MintercontractInstance.Mint(url,sg,msg,amount);
      const mintReceipt = await mintResponse.wait();
      toast.dismiss(mintingToastId);

      if (mintReceipt) {
        toast.success("Mint done");
      } else {
        toast.error("Mint failed");
      }
      setLoading(false);
    } catch (error) {
      if (approvalToastId) toast.dismiss(approvalToastId);
      if (mintingToastId) toast.dismiss(mintingToastId);
      toast.error("Transaction failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, ApproveAndMint, balance };
};

export default useMintHooks;
