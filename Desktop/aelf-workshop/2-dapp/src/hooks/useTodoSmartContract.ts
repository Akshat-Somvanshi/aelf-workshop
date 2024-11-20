import { IPortkeyProvider, IChain } from "@portkey/provider-types";
import { useEffect, useState } from "react";

const useTodoSmartContract = (provider: IPortkeyProvider | null) => {
  const [smartContract, setSmartContract] =
    useState<ReturnType<IChain["getContract"]>>();

  //Step A - Function to fetch a smart contract based on deployed wallet address
  const fetchContract = async () => {
    if (!provider) return null;

    try {
      const chain = await provider?.getChain("tDVW");
      if (!chain) throw new Error("No chain");
      const address ="zJtfj1pHysJGEWB5zi7VWXjdoMyci74L1caoibwRWirx7efUe";
      const todoContract = chain?.getContract(address);
      setSmartContract(todoContract);
    } catch (error) {
      console.log(error, "====error");
    }
  } 
  useEffect(() => {
    fetchContract();
  }, [provider]);

  return smartContract;
};

export default useTodoSmartContract;
