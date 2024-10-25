'use client'

import { useEffect, useState } from 'react';
import { smoothScroll } from '@/utils/smoothScroll';
import Link from 'next/link';
import Hero from '@/components/Hero';
import GameOverview from '@/components/GameOverview'
import KeyFeatures from '@/components/KeyFeatures';
import HowToPlay from '@/components/HowToPlay';
import Leaderboard from '@/components/Leaderboard';
import Testimonials from '@/components/Testimonials';
import UpcomingEvents from '@/components/UpcomingEvents';
import FAQ from '@/components/FAQ';
//import Download from '@/components/Download';
import AnimatedSection from '@/components/AnimatedSection';
//import DarkModeToggle from '@/components/DarkModeToggle';
import ParticleEffect from '@/components/ParticleEffect';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    smoothScroll();
    // Check user's preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setIsDarkMode(false);
    }
  }, []);

  {/*const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };*/}

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <ParticleEffect />
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4">
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="sr-only">lyt</span>
            <svg className="floating-logo logo1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180.58 65.54" width="45" height="16.385">
              {/* SVG content remains unchanged */}
            </svg>
          {/*<span className="text-xl md:text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Social Points</span>*/}
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#game-overview" className="text-white hover:text-blue-400 transition-colors text-lg">About</a>
            <a href="#how-to-play" className="text-white hover:text-blue-400 transition-colors text-lg">How to Play</a>
            <a href="#leaderboard" className="text-white hover:text-blue-400 transition-colors text-lg">Leaderboard</a>
            <Link href="/comingsoon" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors text-lg font-semibold shadow-lg hover:shadow-xl text-center" onClick={toggleMenu}>
              Play Now
            </Link>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-95 py-4">
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              <a href="#game-overview" className="text-white hover:text-blue-400 transition-colors text-lg" onClick={toggleMenu}>About</a>
              <a href="#how-to-play" className="text-white hover:text-blue-400 transition-colors text-lg" onClick={toggleMenu}>How to Play</a>
              <a href="#leaderboard" className="text-white hover:text-blue-400 transition-colors text-lg" onClick={toggleMenu}>Leaderboard</a>
              <Link href="/comingsoon" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors text-lg font-semibold shadow-lg hover:shadow-xl text-center" onClick={toggleMenu}>
                Play Now
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="dark:bg-gray-900 dark:text-white">
        <Hero />
        <GameOverview />
        <KeyFeatures />
        <AnimatedSection>
          <HowToPlay />
        </AnimatedSection>
        <AnimatedSection>
          <Leaderboard />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <UpcomingEvents />
        </AnimatedSection>
        <AnimatedSection>
          <FAQ />
        </AnimatedSection>
      </main>

      <footer className="bg-opacity-50 bg-gray-800 text-white py-8 dark:bg-gray-900 dark:bg-opacity-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left">&copy; 2023 Social Points. All rights reserved.</p>
            <div className="space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
