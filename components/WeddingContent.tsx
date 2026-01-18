
import React from 'react';
import { Team } from '../types';
import Countdown from './Countdown';
import { MapPin, Stethoscope, Calendar, Heart, Share2, ClipboardCheck } from 'lucide-react';

interface WeddingContentProps {
  team: Team;
}

const WeddingContent: React.FC<WeddingContentProps> = ({ team }) => {
  const isBrideSide = team === 'bride';
  const accentColor = isBrideSide ? 'text-rose-600' : 'text-slate-700';
  const bgColor = isBrideSide ? 'bg-rose-600' : 'bg-slate-700';
  const lightBg = isBrideSide ? 'bg-rose-50' : 'bg-slate-50';
  const borderColor = isBrideSide ? 'border-rose-200' : 'border-slate-200';

  const weddingDate = '2026-02-01T18:00:00';
  const locationUrl = 'https://www.google.com/maps?q=30.0799451,31.3998186&z=17&hl=en';

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 relative">
      {/* Floral/Medical Decorations Background */}
      <div className={`fixed top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-5 pointer-events-none ${accentColor}`}>
        <Stethoscope size={600} strokeWidth={0.5} />
      </div>
      <div className={`fixed bottom-0 left-0 translate-y-1/4 -translate-x-1/4 opacity-5 pointer-events-none ${accentColor}`}>
        <Heart size={600} strokeWidth={0.5} />
      </div>

      {/* Main Card */}
      <div className="relative z-10 bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden border border-white/50">
        {/* Header Image */}
        <div className="h-64 md:h-[450px] relative overflow-hidden">
          <img 
            src={isBrideSide 
              ? "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" 
              : "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200"
            } 
            alt="Wedding Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/95 shadow-xl border ${borderColor} text-xs font-bold uppercase tracking-widest ${accentColor}`}>
              <Stethoscope size={16} />
              A Medical Union of Hearts
              <Heart size={16} fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 py-10 md:px-16 md:py-16 text-center">
          <h2 className="font-cursive text-4xl md:text-6xl text-neutral-800 mb-6">
            The Wedding of
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
            <div className="flex flex-col items-center">
               <h1 className="font-serif text-5xl md:text-7xl font-bold text-neutral-900 leading-tight">
                Dr. Aya
              </h1>
              <p className="text-neutral-500 font-sans tracking-widest text-sm uppercase mt-2">The Bride</p>
            </div>
            <div className={`text-4xl md:text-6xl font-serif italic ${accentColor} animate-pulse drop-shadow-sm`}>&</div>
            <div className="flex flex-col items-center">
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-neutral-900 leading-tight">
                Dr. Khalid
              </h1>
              <p className="text-neutral-500 font-sans tracking-widest text-sm uppercase mt-2">The Groom</p>
            </div>
          </div>

          <p className="text-neutral-600 max-w-lg mx-auto mb-12 font-sans leading-relaxed text-lg">
            Together with our families, we joyfully invite you to witness the union of two healers embarking on their life-long journey of love, health, and happiness.
          </p>

          <hr className={`w-24 mx-auto mb-12 border-t-2 ${borderColor}`} />

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className={`p-8 rounded-[2.5rem] ${lightBg} border ${borderColor} transition-all hover:shadow-lg hover:-translate-y-1 duration-300 group`}>
              <Calendar className={`${accentColor} mx-auto mb-4 group-hover:scale-110 transition-transform`} size={36} />
              <h3 className="font-serif text-2xl font-bold mb-2">When</h3>
              <p className="text-neutral-800 font-bold text-lg">Sunday, February 1st, 2026</p>
              <p className="text-neutral-500 text-sm mt-1 uppercase tracking-tighter">Ceremony starts at 6:00 PM</p>
            </div>

            <div className={`p-8 rounded-[2.5rem] ${lightBg} border ${borderColor} transition-all hover:shadow-lg hover:-translate-y-1 duration-300 group`}>
              <MapPin className={`${accentColor} mx-auto mb-4 group-hover:scale-110 transition-transform`} size={36} />
              <h3 className="font-serif text-2xl font-bold mb-2">Where</h3>
              <p className="text-neutral-800 font-bold text-lg italic">قاعة جلاديوس</p>
              <p className="text-neutral-700 font-semibold">(Gladius Hall)</p>
              <p className="text-neutral-500 text-sm mt-1">New Cairo, Egypt</p>
            </div>
          </div>

          {/* Countdown Component */}
          <div className="mb-12 bg-neutral-50/50 p-8 rounded-[2rem] border border-neutral-100">
            <p className="text-neutral-400 font-sans uppercase tracking-[0.3em] text-xs mb-4">Counting down to our big day</p>
            <Countdown targetDate={weddingDate} accentColor={accentColor} />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 ${bgColor} text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 active:scale-95`}
            >
              <MapPin size={22} />
              <span>Get Directions</span>
            </a>
            <button 
              className={`w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-white border-2 ${borderColor} ${accentColor} rounded-full font-bold hover:bg-neutral-50 shadow-md transition-all duration-300 active:scale-95`}
              onClick={() => alert("Thank you! RSVP confirmed in our system. We look forward to seeing you at Gladius Hall!")}
            >
              <ClipboardCheck size={22} />
              <span>Confirm RSVP</span>
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className={`${lightBg} p-10 text-center border-t ${borderColor}`}>
          <p className="text-neutral-500 italic font-serif text-lg leading-relaxed">
            "Your presence is the only gift we require as we start our new life together."
          </p>
          <div className="mt-6 flex justify-center gap-6 text-neutral-400">
             <Share2 size={24} className="hover:text-neutral-600 cursor-pointer transition-colors" title="Share Invitation" />
             <Heart size={24} className={`${accentColor} fill-current cursor-pointer transition-transform hover:scale-110`} />
          </div>
        </div>
      </div>

      {/* Team Indicator Label */}
      <div className={`fixed bottom-6 right-6 z-50 px-6 py-3 rounded-full shadow-2xl border ${borderColor} bg-white/90 backdrop-blur-md text-sm font-bold tracking-widest uppercase flex items-center gap-3 ${accentColor}`}>
        <div className={`w-3 h-3 rounded-full ${bgColor} animate-pulse shadow-[0_0_8px_rgba(0,0,0,0.1)]`}></div>
        {isBrideSide ? "Team Bride Access" : "Team Groom Access"}
      </div>
    </div>
  );
};

export default WeddingContent;
