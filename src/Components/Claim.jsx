import { useWriteContract } from "wagmi";
import { useState } from "react";
import abi from "../ContractABI.json";

const Claim = () => {
  const { writeContractAsync } = useWriteContract();
  const [owner, setOwner] = useState("");

  const handleClaim = async () => {
    try {
      await writeContractAsync({
        address: "0xa131AD247055FD2e2aA8b156A11bdEc81b9eAD95",  
        abi: abi,
        functionName: "claim",
        args: [owner],
      });
      alert("Transaction sent 🚀");
    } catch (err) {
      console.log(err);
      alert(err?.shortMessage || err?.message || "Transaction failed");
    }
  };

  return (
    <section id="claim" className="py-32 px-6 text-center">
      <h2 className="text-3xl font-black text-white italic mb-10">
        Claim Assets
      </h2>

      <input
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
        placeholder="Owner Wallet Address"
        className="p-4 bg-black border border-zinc-800 w-96 max-w-full text-white"
      />

      <button
        onClick={handleClaim}
        className="ml-2 px-10 py-4 bg-white text-black font-bold hover:scale-105 transition"
      >
        Claim
      </button>
    </section>
  );
};

export default Claim;
