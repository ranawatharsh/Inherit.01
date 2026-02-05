import { useState } from "react";
import { useWriteContract } from "wagmi";
import { parseEther } from "viem";

import { contractConfig } from "../web3/contract";
import { erc20Abi } from "../web3/erc20";

const TOKEN_ADDRESS = "0xYourERC20TokenAddress";

const VaultForm = () => {
  const { writeContractAsync } = useWriteContract();
  const [nominee, setNominee] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // 1️⃣ Approve ERC20
      await writeContractAsync({
        address: "0x0000000000000000000000000000000000000000",
        abi: erc20Abi,
        functionName: "approve",
        args: [contractConfig.address, parseEther(amount)],
      });

      // 2️⃣ Call addnominee
      await writeContractAsync({
        ...contractConfig,
        functionName: "addnominee",
        args: [nominee, "0x0000000000000000000000000000000000000000", parseEther(amount)],
      });

      alert("Nominee added successfully!");
    } catch (err) {
      console.error(err);
      alert("Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="vault" className="py-32 px-6 bg-[#0c0c0c]">
      <div className="max-w-xl mx-auto border border-zinc-800 p-10">
        <h2 className="text-2xl font-bold mb-6 text-white">Add Nominee</h2>

        <input
          placeholder="Nominee Address"
          value={nominee}
          onChange={(e) => setNominee(e.target.value)}
          className="w-full p-3 bg-black border border-zinc-800 mb-4"
        />

        <input
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 bg-black border border-zinc-800 mb-6"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-4 bg-rose-600 hover:bg-rose-500 font-bold text-white"
        >
          {loading ? "Processing..." : "Add Nominee"}
        </button>
      </div>
    </section>
  );
};

export default VaultForm;
