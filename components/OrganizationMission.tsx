
import React from 'react';
import { Target, Network, ShieldCheck, Zap } from 'lucide-react';

export const OrganizationMission: React.FC = () => {
  return (
    <section id="join-org" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-bold impact-font mb-6 text-stone-900 leading-none">
            LE MOTEUR DE LA <br />
            <span className="text-red-600 underline decoration-stone-200 underline-offset-8">CONVERGENCE</span>
          </h2>
          <div className="text-2xl md:text-4xl text-stone-400 font-light italic mt-4">De Motor van de Convergentie</div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12 py-10">
            <div className="flex gap-8 group">
              <div className="shrink-0 w-20 h-20 bg-stone-900 text-white rounded-[2rem] flex items-center justify-center group-hover:bg-red-600 transition-colors shadow-lg">
                <Target size={36} />
              </div>
              <div>
                <h4 className="impact-font text-2xl mb-2">Poids Institutionnel / Institutioneel Gewicht</h4>
                <p className="text-xl text-stone-600 leading-relaxed">Nous transformons la solidarité individuelle en une puissance institutionnelle coordonnée.</p>
              </div>
            </div>
            
            <div className="flex gap-8 group">
              <div className="shrink-0 w-20 h-20 bg-stone-900 text-white rounded-[2rem] flex items-center justify-center group-hover:bg-orange-600 transition-colors shadow-lg">
                <Network size={36} />
              </div>
              <div>
                <h4 className="impact-font text-2xl mb-2">Kit de Solidarité / Solidariteitskit</h4>
                <p className="text-xl text-stone-600 leading-relaxed">Accédez à un réseau d'expertise et de partage de ressources unique en Belgique.</p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="shrink-0 w-20 h-20 bg-stone-900 text-white rounded-[2rem] flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-lg">
                <Zap size={36} />
              </div>
              <div>
                <h4 className="impact-font text-2xl mb-2">Dignité et Droits / Waardigheid en Rechten</h4>
                <p className="text-xl text-stone-600 leading-relaxed">Chaque organisation apporte sa légitimité pour défendre un avenir commun et fier.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-stone-900 text-white p-12 md:p-16 rounded-[4rem] shadow-3xl relative overflow-hidden border-t-8 border-red-600">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl"></div>
            <h3 className="text-4xl impact-font mb-4 text-orange-400 tracking-tight">Rejoindre le mouvement</h3>
            <h4 className="text-xl text-stone-500 mb-10 italic font-light">Word lid van de beweging</h4>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-black text-stone-500">Organisation</label>
                  <input type="text" className="w-full bg-stone-800 border-2 border-stone-700 rounded-2xl p-5 text-white focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all" placeholder="Nom de la structure" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-black text-stone-500">Email Contact</label>
                  <input type="email" className="w-full bg-stone-800 border-2 border-stone-700 rounded-2xl p-5 text-white focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all" placeholder="adresse@mail.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-stone-500">Secteur / Sector</label>
                <select className="w-full bg-stone-800 border-2 border-stone-700 rounded-2xl p-5 text-white focus:ring-2 focus:ring-red-600 transition-all appearance-none">
                  <option>Social / Sociaal</option>
                  <option>Syndical / Vakbond</option>
                  <option>Culturel / Cultureel</option>
                  <option>Juridique / Juridisch</option>
                </select>
              </div>
              <button className="w-full bg-red-600 hover:bg-white hover:text-red-600 text-white impact-font py-6 rounded-2xl transition-all font-bold text-2xl shadow-[0_15px_40px_rgba(220,38,38,0.3)] transform active:scale-95">
                DEVENIR MEMBRE FONDATEUR / WORD STICHTER
              </button>
            </form>
            <p className="mt-10 text-stone-500 text-center text-sm font-medium tracking-wide">
              Une initiative bilingue pour la régularisation et la dignité nationale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
