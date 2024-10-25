import { FaUserPlus, FaMobileAlt,  FaTrophy } from 'react-icons/fa';

import { motion } from 'framer-motion';

const steps = [
  { icon: FaUserPlus, title: 'Register', description: 'Create an account and link your ENS name' },
  { icon: FaMobileAlt, title: 'Interact', description: 'Scan other players using NFC at real-world events' },
  { icon: FaTrophy, title: 'Earn Points', description: 'Gain points and climb the leaderboard' },
];

export default function HowToPlay() {
  return (
    <section id="how-to-play" className="py-20 ">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          How to Play
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="dark:bg-gray-900 dark:bg-opacity-50 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <step.icon className="text-5xl mb-4 mx-auto text-blue-500" />
              <h3 className="text-2xl font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
