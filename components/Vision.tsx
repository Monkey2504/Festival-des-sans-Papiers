
import React from 'react';
import { Zap } from 'lucide-react';

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-20 items-center">
        
        {/* Visual with Sticker - Previous style */}
        <div className="md:w-1/2 relative">
          <div className="relative z-10">
            <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-stone-800 shadow-3xl transform -rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1540910419892-f0c74b0e33b3?auto=format&fit=crop&q=80&w=1200" 
                alt="Vision stratégique" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bilingual Sticker */}
            <div className="absolute top-10 -right-12 bg-orange-500 p-8 rounded-3xl text-stone-900 shadow-2xl transform rotate-6 z-20">
              <p className="impact-font text-4xl leading-none">L'ESSAIMAGE</p>
              <p className="text-sm font-black uppercase tracking-widest mt-1">De Zwermstrategie</p>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-600/20 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="md:w-1/2 space-y-10">
          <h2 className="text-6xl md:text-7xl font-bold impact-font leading-none">
            NOTRE VISION <br />
            <span className="text-orange-500">PLURIANNUELLE</span>
          </h2>
          
          <p className="text-2xl text-stone-300 leading-relaxed font-light">
            Bruxelles est notre investissement pilote. Nous finançons aujourd'hui l'outil qui permettra demain de faire rayonner la résistance dans chaque région.
          </p>
          
          <div className="space-y-6">
            {[
              "Un Kit de Lancement Universel pour l'organisation autonome.",
              "Formation de Multiplicateurs dans chaque ville de Belgique.",
              "Une force nationale durable, joyeuse et annuelle."
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-center group">
                <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-xl font-bold impact-font">{i+1}</span>
                </div>
                <p className="text-xl text-stone-100 font-medium">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="pt-8">
            <a href="#join-org" className="inline-flex items-center gap-4 bg-white text-stone-900 impact-font px-12 py-6 rounded-full hover:bg-orange-500 hover:text-white transition-all shadow-2xl font-black text-2xl transform hover:-translate-y-2">
              <span>DEVENIR MULTIPLICATEUR LOCAL</span>
              <Zap size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
