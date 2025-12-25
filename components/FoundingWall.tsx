
import React from 'react';
import { Shield, Plus } from 'lucide-react';

const FOUNDING_ORGS = [
  { name: "Collectif des Travailleurs Sans Papiers", logo: "https://picsum.photos/seed/org1/200/200" },
  { name: "Solidarité Migrants Bruxelles", logo: "https://picsum.photos/seed/org2/200/200" },
  { name: "Réseau Éducation Sans Frontières", logo: "https://picsum.photos/seed/org3/200/200" },
  { name: "Droit au Logement (DAL)", logo: "https://picsum.photos/seed/org4/200/200" },
  { name: "Ligue des Droits Humains", logo: "https://picsum.photos/seed/org5/200/200" },
  { name: "Syndicat Étudiant Libre", logo: "https://picsum.photos/seed/org6/200/200" },
];

export const FoundingWall: React.FC = () => {
  return (
    <section id="founding-wall" className="py-24 bg-stone-50 text-stone-900 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 text-red-600 mb-6 bg-red-50 px-6 py-2 rounded-full border border-red-100">
            <Shield size={20} />
            <span className="impact-font text-sm tracking-[0.2em] uppercase font-bold">Pacte de Coalition / Coalitiepact</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold impact-font mb-6 text-stone-900 leading-none">
            LE MUR DES FONDATEURS
          </h2>
          <p className="text-stone-600 text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Ces organisations portent avec nous l'espoir d'une société plus juste et inclusive. <br />
            <span className="text-stone-400 italic">Deze organisaties dragen samen met ons de hoop op een rechtvaardigere samenleving.</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {FOUNDING_ORGS.map((org, i) => (
            <div 
              key={i} 
              className="group relative aspect-square bg-white rounded-[2rem] flex items-center justify-center p-8 border-2 border-stone-200 hover:border-red-500 transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] cursor-default overflow-hidden"
            >
              <img 
                src={org.logo} 
                alt={org.name} 
                className="w-full h-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-red-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-6 text-center">
                <span className="text-white impact-font text-lg font-bold">
                  {org.name}
                </span>
              </div>
            </div>
          ))}
          
          <a 
            href="#join-org"
            className="aspect-square bg-white border-4 border-dashed border-stone-300 rounded-[2rem] flex flex-col items-center justify-center p-8 hover:border-orange-500 hover:bg-orange-50 transition-all group shadow-inner"
          >
             <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
               <Plus size={32} />
             </div>
             <span className="impact-font text-stone-400 group-hover:text-orange-600 text-center text-lg">VOTRE LOGO <br /> UW LOGO</span>
          </a>
        </div>

        <div className="mt-20 p-1.5 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-[3rem] shadow-2xl">
          <div className="bg-white p-12 md:p-16 rounded-[2.9rem] flex flex-col md:flex-row items-center gap-12">
            <div className="shrink-0 text-center">
               <div className="text-[10rem] font-bold impact-font text-red-600 leading-none tracking-tighter">12+</div>
               <div className="text-sm uppercase tracking-[0.4em] mt-2 text-stone-400 font-black">Partenaires / Partners</div>
            </div>
            <div className="h-32 w-px bg-stone-200 hidden md:block"></div>
            <div className="flex-1">
              <p className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight impact-font mb-6">
                "Nous ne cherchons pas des spectateurs, mais des bâtisseurs. Le festival est le levier, la coalition est le moteur."
              </p>
              <p className="text-xl text-stone-500 italic font-light">"We zoeken geen toeschouwers, maar bouwers. Het festival is de hefboom, de coalitie is de motor."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
