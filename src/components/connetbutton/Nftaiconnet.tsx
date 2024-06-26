import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
export default function Nftaiconnet() {
  const { open, close } = useWeb3Modal();
  const { address, isConnecting, isDisconnected } = useAccount();

  const connetButton = () => {
    // open({ view: 'Account' })
    open();
  };
  return (
    <button
      onClick={connetButton}
      className=" sButton bg-btn-gradient h-[50px] "
    >
      {address
        ? address?.slice(0, 5) + "..." + address?.slice(-5)
        : "Connect Wallet"}
    </button>
  );
}
