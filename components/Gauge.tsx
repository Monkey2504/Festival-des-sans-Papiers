import React from 'react';
import { CampaignStats } from '../types';

interface GaugeProps {
  stats: CampaignStats;
}

export const Gauge: React.FC<GaugeProps> = ({ stats }) => {
  // Calcul du pourcentage atteint, arrondi à l'entier inférieur
  const percentage = Math.floor((stats.current / stats.target) * 100);
  const displayPercentage = Math.min(100, percentage); // Assure que la barre ne dépasse pas 100%

  return (
    <section id="donation" className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row items-center gap-6">
        
        {/* Colonne de la Jauge et Statistiques */}
        <div className="flex-grow w-full">
          <div className="flex justify-between items-end mb-2">
            <span className="text-stone-500 font-bold uppercase text-xs tracking-widest">
              État de la cagnotte pour déverrouiller la date
            </span>
            <span className="impact-font text-2xl text-red-600">
              {stats.current.toLocaleString('fr-BE')}€ 
              <span className="text-stone-400 text-sm font-sans">
                / {stats.target.toLocaleString('fr-BE')}€
              </span>
            </span>
          </div>
          
          <div className="relative h-6 bg-stone-100 rounded-full overflow-hidden border border-stone-200 shadow-inner">
            {/* Barre de Progression (Couleurs d'Urgence) */}
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-600 to-red-600 transition-all duration-1000 ease-out"
              style={{ width: `${displayPercentage}%` }}
            >
              {/* Effet d'animation subtil */}
              <div className="absolute inset-0 bg-white/20"></div>
            </div>
            
            {/* Indicateur de Pourcentage */}
            <div className="absolute inset-0 flex items-center justify-end pr-4">
              <span className="text-[10px] font-bold text-stone-500 uppercase">
                {displayPercentage}% ATTEINT
              </span>
            </div>
          </div>
        </div>
        
        {/* Colonne du Bouton d'Action (CTA) */}
        <div className="w-full md:w-auto shrink-0">
          <button className="w-full md:w-auto bg-red-600 text-white impact-font px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors shadow-lg transform hover:scale-[1.02]">
            DÉVERROUILLER LA DATE / FAIRE UN DON
          </button>
        </div>
      </div>
    </section>
  );
};