'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ParticleEffect from '@/components/ParticleEffect';

export default function Coming() {
  const [countdown, setCountdown] = useState({ days: 10, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState('');

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For this example, we'll just log to the console
    console.log(`Notification request for ${email} sent to emmaisaac032@gmail.com`);
    // Reset the email input after submission
    setEmail('');
  };

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
        <motion.form 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col md:flex-row justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 mb-2 md:mb-0 md:mr-2 w-full md:w-auto rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Notify Me
          </button>
        </motion.form>
      </div>
    </div>
  );
}
