import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  { name: 'Chuks', quote: "Social Points has revolutionized how I network at crypto events. It&apos;s fun and rewarding!", avatar: '/APE.jpg' },
  { name: 'Realyt', quote: "The privacy features are top-notch!", avatar: '/READ.jpg' },
  { name: 'yaranaka', quote: "Earning ETH while socializing? Count me in! This game is addictive in the best way possible.", avatar: '/INDIA.jpg' },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          What Players Are Saying
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <p className="mb-4 italic text-white">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center">
                <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="w-12 h-12 rounded-full mr-4" />
                <span className="font-semibold text-white">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
