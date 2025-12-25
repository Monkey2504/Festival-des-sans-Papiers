import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Gauge } from './components/Gauge';
import { Advocacy } from './components/Advocacy';
import { DateStrategy } from './components/DateStrategy';
import { ActionSection } from './components/ActionSection';
import { Vision } from './components/Vision';
import { OrganizationMission } from './components/OrganizationMission';
import { FoundingWall } from './components/FoundingWall';
import { Footer } from './components/Footer';
import { CampaignStats } from './types'; // Assumer que ce type est défini

const App: React.FC = () => {
  // Définition de l'état initial de la cagnotte (20.000€ objectif)
  const [stats, setStats] = useState<CampaignStats>({
    target: 20000,
    current: 4250, // Valeur initiale
  });

  // Simulation de l'augmentation dynamique de la cagnotte pour l'effet d'urgence
  useEffect(() => {
    const timer = setInterval(() => {
      setStats(prev => {
        // Augmentation aléatoire, mais ne dépasse jamais la cible
        const newCurrent = Math.min(prev.target, prev.current + Math.floor(Math.random() * 50));
        return {
          ...prev,
          current: newCurrent
        };
      });
    }, 15000); // Mise à jour toutes les 15 secondes
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Le Gauge doit être rendu en premier pour être sticky et visible après le Hero */}
      <Gauge stats={stats} /> 
      
      {/* Hero : L'accroche choc et le CTA principal */}
      <Hero />
      
      <main className="flex-grow">
        
        {/* DateStrategy : Explique le lien entre la jauge et la date (Urgence) */}
        <DateStrategy stats={stats} />
        
        {/* Advocacy : Le Manifeste et le Plaidoyer (Justification de la crise) */}
        <Advocacy />
        
        {/* FoundingWall : Preuve sociale (Crédibilité) */}
        <FoundingWall />
        
        {/* OrganizationMission : Recrutement institutionnel (Partenaires ONG/ASBL) */}
        <OrganizationMission />
        
        {/* ActionSection : Les 3 Piliers (Don, Bénévole, Ressource, inclut l'appel aux soirées locales) */}
        <ActionSection />
        
        {/* Vision : L'essaimage et la pérennité (La preuve que ce n'est pas un one-shot) */}
        <Vision />
        
      </main>
      
      {/* Footer : Informations légales et contacts */}
      <Footer />
    </div>
  );
};

export default App;