import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function Download() {
  return (
    <section id="download" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Get Started Now</h2>
        <p className="text-xl mb-12">Download the Social Points app and start your crypto-social adventure!</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            <FaApple className="text-2xl mr-2" />
            <span>App Store</span>
          </a>
          <a href="#" className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            <FaGooglePlay className="text-2xl mr-2" />
            <span>Google Play</span>
          </a>
        </div>
      </div>
    </section>
  );
}
