import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-[#1a1a1a] bg-[#080808]/90 backdrop-blur-md px-8 py-5 flex items-center justify-between">
    <div className="text-white font-black tracking-widest italic">Inherit.01</div>
    <ConnectButton />
  </nav>
);

export default Navbar;
