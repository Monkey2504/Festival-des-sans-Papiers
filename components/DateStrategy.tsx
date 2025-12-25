import React from 'react';
import { CampaignStats } from '../types';
import { Lock, Clock, CalendarCheck } from 'lucide-react';

interface DateStrategyProps {
  stats: CampaignStats;
}

export const DateStrategy: React.FC<DateStrategyProps> = ({ stats }) => {
  const percentage = Math.floor((stats.current / stats.target) * 100);
  const isGoalReached = percentage >= 100;
  const remainingAmount = stats.target - stats.current;

  const lockedMessage = (
    <div className="text-center">
      <Lock size={64} className="text-red-600 mx-auto mb-6 animate-pulse" />
      <h3 className="text-3xl md:text-5xl font-bold impact-font mb-4 text-stone-900">
        LA DATE EST ENCORE VÉROUILLÉE
      </h3>
      <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
        Le Festival Pilote aura lieu au second semestre 2025 à Bruxelles. Cependant, **la date exacte ne sera annoncée que lorsque la jauge atteindra 20 000 €**.
      </p>
      <p className="text-2xl font-black mt-6 impact-font text-red-600">
        Il manque encore {remainingAmount.toLocaleString()}€ pour débloquer l'annonce.
      </p>
      <a href="#donation" className="inline-block mt-8 bg-orange-600 text-white impact-font px-10 py-4 rounded-full hover:bg-red-700 transition-colors shadow-lg text-xl">
        DÉVERROUILLER LA DATE MAINTENANT
      </a>
    </div>
  );

  const unlockedMessage = (
    <div className="text-center">
      <CalendarCheck size={64} className="text-green-600 mx-auto mb-6 animate-bounce" />
      <h3 className="text-3xl md:text-5xl font-bold impact-font mb-4 text-stone-900">
        LA DATE EST DÉVERROUILLÉE !
      </h3>
      <p className="text-2xl font-black impact-font mt-6 text-green-700">
        Rendez-vous le 26 Septembre 2025 à Bruxelles !
      </p>
      <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed mt-4">
        Merci à la convergence des actions locales et des donateurs ! Nous sommes prêts.
      </p>
      <a href="#join-org" className="inline-block mt-8 bg-stone-900 text-white impact-font px-10 py-4 rounded-full hover:bg-orange-600 transition-colors shadow-lg text-xl">
        VOIR LE PROGRAMME ET NOUS REJOINDRE
      </a>
    </div>
  );

  return (
    <section id="date-strategy" className="py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {isGoalReached ? unlockedMessage : lockedMessage}
          
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h4 className="text-xl font-bold impact-font text-stone-800 mb-2">
              Un Pacte de Confiance (Een Vertrouwenspact)
            </h4>
            <p className="text-stone-600 text-sm">
              Nous nous engageons : le financement est le déclencheur unique. Le succès de cette campagne repose sur l'engagement immédiat des citoyens et l'autonomie des soirées locales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};