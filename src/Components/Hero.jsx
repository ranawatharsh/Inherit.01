const Hero = () => (
  <section id="hero" className="h-screen flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-6xl font-black text-white italic">Trustless Inheritance</h1>
    <p className="mt-6 text-zinc-500 uppercase tracking-widest text-sm max-w-xl">
      Decentralized protocol to transfer assets automatically.
    </p>
    <a href="#vault" className="mt-10 px-10 py-4 bg-rose-600 text-white font-bold">
      Add Nominee
    </a>
  </section>
);

export default Hero;
