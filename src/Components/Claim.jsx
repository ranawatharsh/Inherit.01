const Claim = () => (
  <section id="claim" className="py-32 px-6 text-center">
    <h2 className="text-3xl font-black text-white italic mb-10">
      Claim Assets
    </h2>

    <input
      placeholder="Owner Wallet Address"
      className="p-4 bg-black border border-zinc-800 w-96 max-w-full"
    />
    <button className="ml-2 px-10 py-4 bg-white text-black font-bold">
      Claim
    </button>
  </section>
);

export default Claim;
