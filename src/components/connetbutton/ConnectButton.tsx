import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
export default function ConnectButton() {
  const { open, close } = useWeb3Modal();
  const { address, isConnecting, isDisconnected } = useAccount();

  const connetButton = () => {
    // open({ view: 'Account' })
    open();
  };
  return (
    <button
      onClick={connetButton}
      className=" px-4 py-3 relative z-50 font-medium text-[14px] rounded-2xl text-white bg-button-color  "
    >
      {address
        ? address?.slice(0, 5) + "..." + address?.slice(-5)
        : "Connect Wallet"}
    </button>
  );
}
