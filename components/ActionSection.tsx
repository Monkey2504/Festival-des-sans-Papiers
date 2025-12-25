import React from 'react';
import { Users, ShieldCheck, Zap, Heart } from 'lucide-react'; // Ajout de Zap pour l'énergie locale

export const ActionSection: React.FC = () => {
  return (
    <section id="actions" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 impact-font">Co-Créer la Victoire : Vos Forces Vives</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Votre action est la pierre angulaire de notre mouvement. Choisissez comment vous souhaitez construire l'électrochoc national.
          </p>
        </div>
        
        {/* Grille 2x2 pour les actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Action Card 1: Organiser un Événement Local (Nouveau Focus) */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-b-4 border-red-600 group">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Zap size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 impact-font">Organiser Localement</h3>
            <p className="text-stone-600 mb-6 leading-relaxed text-sm">
              Lancez une **soirée citoyenne** (université, ASBL) pour financer collectivement la cagnotte nationale. C'est l'autonomie en action !
            </p>
            <button className="w-full impact-font py-3 bg-red-600 text-white rounded-lg hover:bg-stone-900 transition-colors">KIT DE LANCEMENT LOCAL</button>
          </div>

          {/* Action Card 2: Bénévole */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-b-4 border-orange-500 group">
            <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 impact-font">Être Bénévole</h3>
            <p className="text-stone-600 mb-6 leading-relaxed text-sm">
              Offrez votre temps et vos bras pour l'organisation terrain, l'accueil, la logistique et l'encadrement à Bruxelles.
            </p>
            <button className="w-full impact-font py-3 bg-stone-900 text-white rounded-lg hover:bg-orange-500 transition-colors">REJOINDRE L'ÉQUIPE</button>
          </div>

          {/* Action Card 3: Personne Ressource */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-b-4 border-stone-900 group">
            <div className="w-16 h-16 bg-stone-100 text-stone-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 impact-font">Expertise Stratégique</h3>
            <p className="text-stone-600 mb-6 leading-relaxed text-sm">
              Apportez votre expertise juridique, média, événementielle ou vos réseaux pour sécuriser le Festival pilote.
            </p>
            <button className="w-full impact-font py-3 bg-stone-900 text-white rounded-lg hover:bg-red-600 transition-colors">OFFRIR MON EXPERTISE</button>
          </div>

          {/* Action Card 4: Donner (Reste essentiel, mais minimisé) */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-b-4 border-stone-400 group">
            <div className="w-16 h-16 bg-stone-100 text-stone-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 impact-font">Soutien Direct</h3>
            <p className="text-stone-600 mb-6 leading-relaxed text-sm">
              Le moyen le plus rapide de débloquer la date du Festival. Chaque euro est un vote pour l'action immédiate.
            </p>
            <button className="w-full impact-font py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-500 transition-colors">FAIRE UN DON RAPIDE</button>
          </div>
        </div>
      </div>
    </section>
  );
};