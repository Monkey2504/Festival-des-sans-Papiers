import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react'; // Ajout des icônes pour la clarté

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-2">
            <h3 className="impact-font text-4xl mb-4 text-red-500">Festival des Sans Papiers</h3>
            <h4 className="text-stone-500 text-xl italic mb-6">Festival van de mensen zonder papieren</h4>
            <p className="text-stone-400 max-w-md mb-8 leading-relaxed text-lg">
              Une coalition d'acteurs engagés pour un avenir où la dignité et les droits fondamentaux sont garantis pour tous, sans exception. **Nous sommes notre propre moteur.**
            </p>
            <div className="flex gap-6">
              {/* Utilisation d'icônes Lucide pour les réseaux sociaux */}
              <a href="#" aria-label="Facebook" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all transform hover:-translate-y-1">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Twitter (X)" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all transform hover:-translate-y-1">
                <Twitter size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all transform hover:-translate-y-1">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase text-xs tracking-[0.3em] text-red-500 mb-8">Navigation</h4>
            <ul className="space-y-4 text-stone-300 font-medium">
              <li><a href="#advocacy" className="hover:text-white transition-colors">Manifeste / Manifest</a></li>
              <li><a href="#founding-wall" className="hover:text-white transition-colors">Coalition / Coalitie</a></li>
              <li><a href="#donation" className="hover:text-white transition-colors">Déverrouiller la Date / Ontgrendel de Datum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Presse / Pers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase text-xs tracking-[0.3em] text-red-500 mb-8">Action & Contact</h4>
            <ul className="space-y-4 text-stone-300">
              <li className="flex flex-col">
                <span className="text-stone-500 text-xs">Kit de Lancement Local</span>
                <a href="#actions" className="hover:text-white transition-colors font-medium">Organiser une Soirée Citoyenne</a>
              </li>
              <li className="flex flex-col mt-4">
                <span className="text-stone-500 text-xs">Email</span>
                <span>contact@festival-sans-papiers.be</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-600 text-sm font-medium">
          <p>© 2025 Festival des Sans Papiers. <span className="text-red-500 font-bold">Nous construisons notre victoire.</span></p>
          <div className="flex gap-8 uppercase tracking-widest text-[10px]">
            <a href="#" className="hover:text-white">Mentions Légales</a>
            <a href="#" className="hover:text-white">Charte de la Coalition</a>
          </div>
        </div>
      </div>
    </footer>
  );
};