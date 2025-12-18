import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";
import MatrixRain from "./components/MatrixRain";

export default function Home() {
  return (
    
    <main className="relative bg-transparent min-h-screen flex flex-col overflow-x-hidden">
      
      
      <div className="fixed inset-0 z-[-1]">
        <MatrixRain />
      </div>
      
      
      <Navbar />

      
      <Hero />
      <Features />
      <Newsletter />
      
     
      <footer className="py-8 text-center text-neutral-600 text-xs font-mono z-10 border-t border-white/5 bg-black/80 backdrop-blur-sm">
        <div className="flex justify-center gap-6 mb-4">
          <span>SURONEX_SYSTEMS</span>
        </div>
        <div className="flex justify-center gap-6">
          <span>PRIVACY_PROTOCOL</span>
          <span>TERMS_OF_SERVICE</span>
          <span>STATUS_PAGE</span>
        </div>
        <div className="mt-4 opacity-50">© 2025 ENCRYPTED.</div>
      </footer>
    </main>
  );
}