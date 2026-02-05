import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import VaultForm from "./Components/VaultForm";
import Claim from "./Components/Claim";

const App = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-[#d1d1d1] font-mono">
      <Navbar />
      <Hero />
      <VaultForm />
      <Claim />
    </div>
  );
};

export default App;
