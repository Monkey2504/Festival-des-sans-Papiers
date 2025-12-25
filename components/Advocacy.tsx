
import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

interface Content {
  title: string;
  subtitle: string;
  manifesto_fr: string;
  manifesto_nl: string;
  quote: string;
  quote_source: string;
}

const useMilitantContent = (): Content => {
  return {
    title: "Un Nouvel Élan de Solidarité : Pourquoi Aujourd'hui ?",
    subtitle: "Een Nieuwe Golf van Solidariteit: Waarom Nu?",
    manifesto_fr: 
      "Le mouvement grandit. Nous transformons chaque défi en une opportunité de célébrer notre résilience. Ce Festival est l'outil que nous bâtissons ensemble pour porter la voix de la dignité. Financer cet événement, c'est investir dans une force de frappe nationale, créée par la convergence des citoyens et des organisations. Nous construisons la plateforme qui nous permet d'affirmer notre fierté.",
    manifesto_nl: 
      "De beweging groeit. We veranderen elke uitdaging in een kans om onze veerkracht te vieren. Dit Festival is het instrument dat we samen bouwen om de stem van waardigheid te laten horen. Het financieren van dit evenement is investeren in een nationale kracht, gecreëerd door de convergentie van burgers en organisaties.",
    quote: "La joie est notre plus belle résistance. Ensemble, nous sommes invincibles.",
    quote_source: "CIRE & Coalition (2025)",
  };
};

export const Advocacy: React.FC = () => {
  const { title, subtitle, manifesto_fr, manifesto_nl, quote, quote_source } = useMilitantContent();
  
  return (
    <section id="advocacy" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Visual with Sticker - Previous graphic style */}
          <div className="relative order-1 md:order-2">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl transform rotate-1 border-8 border-stone-50">
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200" 
                alt="Force collective et engagement" 
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </div>
            {/* The "Sticker" element */}
            <div className="absolute -bottom-6 -left-6 p-8 bg-red-600 rounded-2xl text-white shadow-2xl transform -rotate-3 z-20">
              <p className="impact-font text-3xl md:text-4xl leading-none tracking-tighter">
                L'ALLUMETTE <br />DU RENOUVEAU
              </p>
            </div>
          </div>
          
          {/* Content side */}
          <div className="order-2 md:order-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-black impact-font text-stone-900 leading-[0.9]">
                {title}
              </h2>
              <h3 className="text-2xl md:text-3xl text-red-600 font-light italic leading-tight">
                {subtitle}
              </h3>
            </div>
            
            <p className="text-xl text-stone-700 leading-relaxed font-light">
              {manifesto_fr}
            </p>
            
            <p className="text-lg text-stone-400 italic leading-relaxed font-light border-l-2 border-stone-100 pl-6">
              {manifesto_nl}
            </p>

            <div className="pt-8">
              <div className="bg-orange-50 p-8 rounded-[2rem] border-2 border-orange-100 relative shadow-sm">
                <Quote size={40} className="text-orange-500/20 absolute top-4 right-4" />
                <p className="text-2xl italic text-stone-800 font-medium leading-snug">
                  "{quote}"
                </p>
                <p className="text-sm text-stone-500 mt-4 uppercase tracking-widest font-bold">
                  — {quote_source}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
