import { useState, useEffect } from 'react';
//import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = ['/hero-bg-1.jpg', '/hero-bg-2.jpg', '/hero-bg-3.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="z-10 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Social Points
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl md:text-3xl mb-8 text-gray-300"
        >
          The Real-World Crypto-Social Game
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link href="/comingsoon" className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-block">
            Start Playing Now
          </Link>
        </motion.div>
      </div>
      {backgrounds.map((bg, index) => (
        <motion.div 
          key={bg}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentBg === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          {/*<Image
            src={bg}
            alt={`Social Points gameplay ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />*/}
        </motion.div>
      ))}
    </section>
  );
}
