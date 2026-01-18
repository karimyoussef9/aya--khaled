
import React, { useState, useEffect } from 'react';
import { CountdownTime } from '../types';

interface CountdownProps {
  targetDate: string;
  accentColor: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, accentColor }) => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft: CountdownTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimerBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center p-3 md:p-6 bg-white rounded-2xl shadow-sm border border-neutral-100 w-20 md:w-32">
      <span className={`text-2xl md:text-4xl font-bold font-serif ${accentColor}`}>{value.toString().padStart(2, '0')}</span>
      <span className="text-[10px] md:text-xs font-sans uppercase tracking-widest text-neutral-400 mt-1">{label}</span>
    </div>
  );

  return (
    <div className="flex gap-2 md:gap-6 justify-center my-10 animate-fade-in">
      <TimerBox value={timeLeft.days} label="Days" />
      <TimerBox value={timeLeft.hours} label="Hours" />
      <TimerBox value={timeLeft.minutes} label="Mins" />
      <TimerBox value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

export default Countdown;
