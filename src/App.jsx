import React, { useState } from 'react';

// --- Industrial SVG Icons ---
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="12" r="3"/></svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
);

const App = () => {
  const [nominee, setNominee] = useState('');
  const [tokenType, setTokenType] = useState('ETH_NATIVE');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('STNDBY');
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePing = () => {
    setIsAnimating(true);
    setStatus('PING_RCVD');
    setTimeout(() => {
      setStatus('STNDBY');
      setIsAnimating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#d1d1d1] font-mono selection:bg-rose-500/30 overflow-x-hidden">
      {/* Subtle Grid Background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-[#1a1a1a] bg-[#080808]/90 backdrop-blur-md px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="border border-rose-500/40 p-1.5 text-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
            <ShieldIcon />
          </div>
          <span className="text-lg font-black tracking-widest text-white uppercase italic">
            Inherit<span className="text-rose-600">.01</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">
          <a href="#hero" className="hover:text-white transition-all">Overview</a>
          <a href="#vault" className="hover:text-white transition-all">Config</a>
          <a href="#claim" className="hover:text-white transition-all">Protocol</a>
        </div>

        <button className="border border-zinc-800 hover:border-zinc-500 px-6 py-2 transition-all text-[10px] font-bold uppercase tracking-widest text-zinc-300">
          Connect Wallet
        </button>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-5xl z-10">
          <div className="text-rose-500 text-[10px] font-bold uppercase tracking-[0.5em] mb-6">
            // Non-Custodial Inheritance Protocol
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase italic leading-[0.9]">
            Trustless. Transparent. <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #333' }}></span>
          </h1>
          <p className="mt-8 text-zinc-500 text-sm md:text-base max-w-xl mx-auto uppercase tracking-widest leading-loose">
            A decentralized inheritance protocol that automatically transfers your crypto assets to your nominee after your passing — securely, transparently, and without trust.
          </p>
          <div className="mt-12 flex justify-center">
            <a href="#vault" className="px-10 py-4 bg-rose-600 hover:bg-rose-500 text-white font-bold transition-all shadow-xl shadow-rose-900/20 uppercase tracking-widest text-xs">
              Add Nominee
            </a>
          </div>
        </div>
      </section>

      {/* Vault Config */}
      <section id="vault" className="py-32 px-6 border-t border-[#1a1a1a] bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Add Nominee Detials</h2>
            <div className="space-y-4 text-zinc-500 text-[11px] uppercase tracking-widest leading-relaxed">
              <p className="flex gap-4"><span className="text-rose-600 font-bold">[01]</span> Identify the destination nominee.</p>
              <p className="flex gap-4"><span className="text-rose-600 font-bold">[02]</span> Commit assets to the immutable escrow.</p>
              <p className="flex gap-4"><span className="text-rose-600 font-bold">[03]</span> Pulse "Proof of Life" to reset timers.</p>
              <p className="flex gap-4"><span className="text-rose-600 font-bold">[04]</span> Migrate assets upon timeout detection.</p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-black border border-zinc-800 p-10 relative group shadow-2xl">
            <form className="space-y-8 relative z-10">
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">Nominee_Endpoint</label>
                <input 
                  type="text" 
                  placeholder="0x000...000"
                  className="w-full bg-[#080808] border border-zinc-800 focus:border-rose-500/50 p-4 text-sm font-mono text-zinc-300 outline-none transition-all placeholder:text-zinc-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">Asset_Class</label>
                  <select className="w-full bg-[#080808] border border-zinc-800 focus:border-rose-500/50 p-4 text-sm font-mono text-zinc-300 outline-none cursor-pointer">
                    <option>ETH_NATIVE</option>
                    <option>USDC_STABLE</option>
                    <option>WBTC_TOKEN</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">Volume</label>
                  <input 
                    type="number" 
                    placeholder="0.00"
                    className="w-full bg-[#080808] border border-zinc-800 focus:border-rose-500/50 p-4 text-sm font-mono text-zinc-300 outline-none transition-all"
                  />
                </div>
              </div>

              <button className="w-full py-5 bg-zinc-900 hover:bg-rose-600 border border-zinc-800 hover:border-rose-500 text-zinc-400 hover:text-white font-bold transition-all uppercase tracking-widest text-xs">
                Commit_To_Vault
              </button>
            </form>

            <div className="mt-16 pt-10 border-t border-zinc-900 flex flex-col items-center">
              <button 
                onClick={handlePing}
                className={`relative w-24 h-24 border-2 flex items-center justify-center transition-all duration-500 ${isAnimating ? 'border-rose-500 text-rose-500 shadow-[0_0_30px_rgba(244,63,94,0.3)]' : 'border-zinc-800 text-zinc-800 hover:border-rose-500/50 hover:text-rose-500'}`}
              >
                <div className={isAnimating ? 'animate-pulse' : ''}>
                  <HeartIcon />
                </div>
              </button>
              <div className="mt-6 text-center">
                <span className="block text-[10px] font-black uppercase tracking-[0.5em] text-white">Heartbeat_Sensor</span>
                <span className={`block text-[9px] mt-1 uppercase tracking-widest ${isAnimating ? 'text-rose-500' : 'text-zinc-700'}`}>Status: {status}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Section */}
      <section id="claim" className="py-32 px-6 bg-[#080808] text-center border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-white uppercase italic mb-12 tracking-tighter underline decoration-zinc-800 decoration-2 underline-offset-8">Access_Portal</h2>
          <div className="border border-zinc-800 p-2 flex flex-col md:flex-row gap-2 bg-[#0c0c0c]">
            <input 
              type="text" 
              placeholder="Origin_Wallet_Address" 
              className="flex-1 bg-transparent p-4 text-xs font-mono text-zinc-400 focus:outline-none placeholder:text-zinc-900"
            />
            <button className="px-12 py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-rose-500 hover:text-white transition-all">
              Initiate_Scan
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-zinc-900 bg-[#080808] text-center">
        <div className="text-zinc-700 text-[9px] font-black uppercase tracking-[0.6em]">
          Legacy Vault Protocol // Immutable Build v4.1.0
        </div>
      </footer>
    </div>
  );
};

export default App;