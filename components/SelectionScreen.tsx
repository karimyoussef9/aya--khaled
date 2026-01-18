
import React from 'react';
import { Team } from '../types';
import { Heart, User, Users } from 'lucide-react';

interface SelectionScreenProps {
  onSelect: (team: Team) => void;
  selectedTeam: Team;
}

const SelectionScreen: React.FC<SelectionScreenProps> = ({ onSelect, selectedTeam }) => {
  return (
    <div className="fixed inset-0 flex flex-col md:flex-row overflow-hidden font-serif">
      {/* Team Groom Side */}
      <button
        onClick={() => onSelect('groom')}
        className={`relative group flex-1 h-1/2 md:h-full transition-all duration-700 ease-in-out border-b md:border-b-0 md:border-r border-slate-200 overflow-hidden ${
          selectedTeam === 'groom' ? 'md:flex-[1.5]' : selectedTeam === 'bride' ? 'md:flex-[0.5]' : ''
        }`}
      >
        <div className="absolute inset-0 bg-slate-900 transition-transform duration-700 group-hover:scale-105">
          <img 
            src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1200" 
            alt="Groom Suit Detail" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-8">
          <div className="w-20 h-20 mb-6 rounded-full bg-slate-800/80 backdrop-blur-md flex items-center justify-center border-2 border-slate-400 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
            <User size={40} className="text-slate-100" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider drop-shadow-lg">TEAM GROOM</h2>
          <p className="text-slate-200 font-sans italic bg-black/20 px-4 py-1 rounded-full backdrop-blur-sm">Standing with Dr. Khalid</p>
        </div>
      </button>

      {/* Middle Connector */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-rose-500 hidden md:flex border-4 border-white">
        <Heart fill="currentColor" size={32} className="animate-pulse" />
      </div>

      {/* Team Bride Side */}
      <button
        onClick={() => onSelect('bride')}
        className={`relative group flex-1 h-1/2 md:h-full transition-all duration-700 ease-in-out overflow-hidden ${
          selectedTeam === 'bride' ? 'md:flex-[1.5]' : selectedTeam === 'groom' ? 'md:flex-[0.5]' : ''
        }`}
      >
        <div className="absolute inset-0 bg-rose-900 transition-transform duration-700 group-hover:scale-105">
          <img 
            src="https://images.unsplash.com/photo-1546193430-c2d20e03977a?auto=format&fit=crop&q=80&w=1200" 
            alt="Bride Dress Detail" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-8">
          <div className="w-20 h-20 mb-6 rounded-full bg-rose-800/80 backdrop-blur-md flex items-center justify-center border-2 border-rose-300 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
            <Users size={40} className="text-rose-100" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider drop-shadow-lg">TEAM BRIDE</h2>
          <p className="text-rose-100 font-sans italic bg-black/20 px-4 py-1 rounded-full backdrop-blur-sm">Standing with Dr. Aya</p>
        </div>
      </button>

      {/* Intro Text Overlays */}
      <div className="absolute top-10 left-0 right-0 text-center z-20 pointer-events-none px-4">
        <p className="text-white md:text-neutral-800 text-sm tracking-[0.3em] font-sans uppercase bg-black/40 md:bg-white/70 inline-block px-6 py-2 rounded-full backdrop-blur-md border border-white/20">
          Please select your side to enter
        </p>
      </div>
    </div>
  );
};

export default SelectionScreen;
