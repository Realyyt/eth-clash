import { motion } from 'framer-motion';
import { FaMobileAlt, FaEthereum, FaUserSecret, FaTrophy } from 'react-icons/fa';

const features = [
  { icon: FaMobileAlt, title: 'NFC Interactions', description: 'Scan other players in the real world' },
  { icon: FaEthereum, title: 'ETH Rewards', description: 'Win cryptocurrency prizes' },
  { icon: FaUserSecret, title: 'Privacy First', description: 'Stay anonymous with zero-knowledge proofs' },
  { icon: FaTrophy, title: 'Daily Challenges', description: 'Earn bonus points every day' },
];

export default function KeyFeatures() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="dark:bg-gray-900 dark:bg-opacity-50 p-6 rounded-lg text-center transform hover:scale-105 transition-all duration-300"
            >
              <feature.icon className="text-6xl mb-4 mx-auto text-blue-500" />
              <h3 className="text-2xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
