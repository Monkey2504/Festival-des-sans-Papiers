
import React from 'react';
import { Users, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Image: High energy party/celebration */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=2000" 
          alt="Célébration collective et festive" 
          className="w-full h-full object-cover brightness-[0.35] grayscale-[10%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-stone-900/60"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="inline-block px-6 py-2 bg-red-600 text-white text-sm font-black tracking-[0.4em] mb-10 uppercase rounded-full shadow-xl">
          Bruxelles • Brussel • 2025
        </div>
        
        <h1 className="text-7xl md:text-[10rem] font-bold mb-4 leading-[0.85] tracking-tighter text-white impact-font drop-shadow-2xl">
          FESTIVAL DES <br />
          <span className="text-orange-500">SANS PAPIERS</span>
        </h1>
        
        <div className="text-2xl md:text-4xl mb-12 text-stone-300 font-light tracking-wide italic normal-case">
          Festival van de mensen zonder papieren
        </div>
        
        <p className="text-xl md:text-2xl text-stone-100 mb-12 max-w-4xl mx-auto leading-relaxed font-medium px-4">
          Une célébration de la dignité, un nouvel élan pour nos droits communs. <br />
          <span className="text-orange-400 font-light">Een viering van waardigheid, een nieuwe impuls voor onze gemeenschappelijke rechten.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#join-org" 
            className="group relative inline-flex items-center justify-center px-12 py-6 font-bold text-stone-900 transition-all duration-300 bg-white rounded-full hover:bg-orange-500 hover:text-white w-full sm:w-auto transform hover:scale-105 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            <span className="relative impact-font text-2xl tracking-wider">NOUS REJOINDRE / MEEDOEN</span>
          </a>
          <a 
            href="#donation"
            className="group inline-flex items-center gap-3 impact-font text-xl text-white hover:text-orange-400 transition-colors py-6 px-12 border-2 border-white/40 rounded-full hover:border-orange-500 backdrop-blur-md"
          >
            <Heart size={24} className="group-hover:fill-orange-500 transition-colors" />
            SOUTENIR / STEUNEN
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-4 opacity-60">
        <div className="text-[10px] uppercase tracking-[0.5em] text-white font-black">
          L'allumette du renouveau • De lucifer van vernieuwing
        </div>
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </header>
  );
};
