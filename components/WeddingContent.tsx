
import React from 'react';
import Countdown from './Countdown';
import { MapPin, Stethoscope, Calendar, Heart, Share2, ClipboardCheck, Sparkles } from 'lucide-react';

const WeddingContent: React.FC = () => {
  const accentColor = 'text-indigo-900';
  const goldColor = 'text-amber-600';
  const bgColor = 'bg-indigo-900';
  const lightBg = 'bg-indigo-50/50';
  const borderColor = 'border-indigo-100';

  const weddingDate = '2026-02-01T18:00:00';
  const locationUrl = 'https://www.google.com/maps?q=30.0799451,31.3998186&z=17&hl=en';

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16 relative">
      {/* Background Decorations */}
      <div className={`fixed top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-5 pointer-events-none text-indigo-900`}>
        <Stethoscope size={600} strokeWidth={0.5} />
      </div>
      <div className={`fixed bottom-0 left-0 translate-y-1/4 -translate-x-1/4 opacity-5 pointer-events-none text-amber-600`}>
        <Heart size={600} strokeWidth={0.5} />
      </div>

      {/* Main Invitation Card */}
      <div className="relative z-10 bg-white/90 backdrop-blur-2xl rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] overflow-hidden border border-white">
        
        {/* Cinematic Header Image */}
        <div className="h-72 md:h-[500px] relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1600" 
            alt="Wedding Venue Decor" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
          
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/95 shadow-xl border border-indigo-50 text-xs font-bold uppercase tracking-[0.2em] ${accentColor}`}>
              <Sparkles size={16} className={goldColor} />
              A Celebration of Love & Healing
              <Sparkles size={16} className={goldColor} />
            </div>
          </div>
        </div>

        {/* Invitation Text Section */}
        <div className="px-6 py-12 md:px-20 md:py-20 text-center">
          <h2 className="font-cursive text-5xl md:text-7xl text-neutral-800 mb-8">
            The Wedding of
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 mb-10">
            <div className="flex flex-col items-center">
              <span className={`text-xs font-bold uppercase tracking-[0.3em] mb-2 ${goldColor}`}>The Bride</span>
              <h1 className="font-serif text-5xl md:text-8xl font-black text-neutral-900 leading-none">
                Dr. Aya
              </h1>
            </div>
            <div className="relative flex items-center justify-center">
              <div className={`text-5xl md:text-7xl font-serif italic ${goldColor} animate-pulse px-4`}>&</div>
              <Stethoscope className="absolute -top-8 opacity-10 text-indigo-900" size={40} />
            </div>
            <div className="flex flex-col items-center">
              <span className={`text-xs font-bold uppercase tracking-[0.3em] mb-2 ${goldColor}`}>The Groom</span>
              <h1 className="font-serif text-5xl md:text-8xl font-black text-neutral-900 leading-none">
                Dr. Khalid
              </h1>
            </div>
          </div>

          <p className="text-neutral-500 max-w-xl mx-auto mb-16 font-sans leading-relaxed text-lg md:text-xl italic">
            "We have spent our careers healing hearts, and now we invite you to witness the day our own two hearts become one."
          </p>

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-16">
            <div className={`p-10 rounded-[2.5rem] ${lightBg} border ${borderColor} transition-all hover:shadow-2xl hover:-translate-y-2 duration-500 group relative overflow-hidden`}>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Calendar size={80} />
              </div>
              <Calendar className={`${accentColor} mx-auto mb-6`} size={44} />
              <h3 className="font-serif text-2xl font-bold mb-3 text-neutral-900">The Date</h3>
              <p className="text-indigo-900 font-black text-xl mb-1">Sunday, Feb 1st, 2026</p>
              <p className="text-neutral-500 font-sans tracking-widest text-sm uppercase">Ceremony at 6:00 PM</p>
            </div>

            <div className={`p-10 rounded-[2.5rem] ${lightBg} border ${borderColor} transition-all hover:shadow-2xl hover:-translate-y-2 duration-500 group relative overflow-hidden`}>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <MapPin size={80} />
              </div>
              <MapPin className={`${goldColor} mx-auto mb-6`} size={44} />
              <h3 className="font-serif text-2xl font-bold mb-3 text-neutral-900">The Venue</h3>
              <p className="text-indigo-900 font-black text-2xl mb-1 font-serif">قاعة جلاديوس</p>
              <p className="text-neutral-700 font-bold">Gladius Hall</p>
              <p className="text-neutral-500 text-sm mt-1 uppercase tracking-widest">New Cairo, Egypt</p>
            </div>
          </div>

          {/* Countdown Display */}
          <div className="mb-16 bg-neutral-50/80 p-10 rounded-[3rem] border border-neutral-100 shadow-inner">
            <p className="text-neutral-400 font-sans uppercase tracking-[0.4em] text-xs mb-6 font-bold">Counting down the seconds</p>
            <Countdown targetDate={weddingDate} accentColor={accentColor} />
          </div>

          {/* Unified Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-6 ${bgColor} text-white rounded-full font-black shadow-[0_20px_40px_-10px_rgba(49,46,129,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(49,46,129,0.4)] hover:-translate-y-1 transition-all duration-300 active:scale-95 text-lg`}
            >
              <MapPin size={24} />
              <span>Location on Maps</span>
            </a>
            <button 
              className={`w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-6 bg-white border-2 ${borderColor} ${accentColor} rounded-full font-black hover:bg-neutral-50 shadow-lg transition-all duration-300 active:scale-95 text-lg`}
              onClick={() => alert("RSVP Confirmed! We look forward to celebrating with you.")}
            >
              <ClipboardCheck size={24} />
              <span>Confirm Attendance</span>
            </button>
          </div>
        </div>

        {/* Elegant Footer */}
        <div className="bg-neutral-900 p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="h-full w-full border-[20px] border-amber-600 m-4 rounded-[2rem]"></div>
          </div>
          <p className="text-amber-100 italic font-serif text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-8">
            "Your presence is our greatest honor as we begin this new chapter together."
          </p>
          <div className="flex justify-center items-center gap-8 text-amber-500">
             <Share2 size={24} className="hover:text-white cursor-pointer transition-colors" />
             <div className="h-px w-12 bg-amber-500/30"></div>
             <Heart size={32} className="fill-current animate-pulse" />
             <div className="h-px w-12 bg-amber-500/30"></div>
             <Stethoscope size={24} className="hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      <p className="text-center mt-12 text-neutral-400 font-sans uppercase tracking-[0.3em] text-[10px]">
        Designed with love for Dr. Aya & Dr. Khalid
      </p>
    </div>
  );
};

export default WeddingContent;
