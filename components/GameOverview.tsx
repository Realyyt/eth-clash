import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GameOverview() {
  return (
    <section id="game-overview" className="py-20 relative overflow-hidden ">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Blend Real-World Interactions with Crypto Rewards
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-center max-w-3xl mx-auto mb-12 text-grey-300"
        >
          Social Points is an innovative blockchain-based game that combines real-world social interactions with cryptocurrency rewards. 
          Use NFC-enabled devices to interact anonymously, compete for points, and win ETH prizes while maintaining privacy through zero-knowledge proofs.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mx-auto max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/about.jpg"
            alt="Social Points Game Preview"
            layout="fill"
            objectFit="cover"
          />
          {/* Glassmorphic dark background for the video */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-full p-4 hover:bg-opacity-30 transition-all duration-300">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4l12 6-12 6z" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
