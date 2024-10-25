'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ParticleEffect from '@/components/ParticleEffect';

export default function Coming() {
  const [countdown, setCountdown] = useState({ days: 13, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 13);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <ParticleEffect />
      <div className="z-10 text-center p-8 bg-gray-900 bg-opacity-70 rounded-lg">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Coming Soon
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, textShadow: ['0 0 5px #ff0000', '0 0 15px #ff0000', '0 0 5px #ff0000'] }}
          transition={{ 
            delay: 0.5, 
            duration: 0.8,
            textShadow: {
              repeat: Infinity,
              duration: 1,
              ease: "linear"
            }
          }}
          className="text-2xl md:text-3xl mb-8 text-red-500 font-bold uppercase"
        >
          A clash of Ethereum
        </motion.p>
        <div className="flex justify-center space-x-4 mb-8">
          {Object.entries(countdown).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="text-4xl font-bold text-white">{value}</div>
              <div className="text-sm text-gray-400">{unit.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
