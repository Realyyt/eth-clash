import { useState } from 'react';

const faqs = [
  {
    question: "What is Social Points?",
    answer: "Social Points is a blockchain-based game that combines real-world social interactions with cryptocurrency rewards. Players use NFC-enabled devices to interact anonymously and compete for points and ETH prizes."
  },
  {
    question: "How do I start playing?",
    answer: "To start playing, download the Social Points app, register with your ENS name, and start interacting with other players at crypto events or supported locations."
  },
  {
    question: "Is my privacy protected?",
    answer: "Yes, Social Points uses zero-knowledge proofs to ensure your interactions remain anonymous while still verifying your participation in the game."
  },
  {
    question: "How can I win ETH?",
    answer: "The player with the highest score at the end of each 30-day game round wins the pooled ETH from player registrations."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 rounded-lg focus:outline-none bg-transparent text-gray-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 rounded-b-lg mt-1 bg-transparent text-gray-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
