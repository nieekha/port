import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onThemeToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        const easeInOutCubic = (t: number) => {
          return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        window.scrollTo(0, startPosition + (distance * easeInOutCubic(progress)));

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const ThemeToggle = () => (
    <div className="flex items-center gap-2">
      <Sun 
        size={16} 
        className={`transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === 'dark' ? 'text-gray-400 scale-90 opacity-50' : 'text-yellow-500 scale-100 opacity-100'
        }`}
      />
      <button
        onClick={onThemeToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          theme === 'dark' ? 'bg-blue-600' : 'bg-gray-200'
        }`}
        role="switch"
        aria-checked={theme === 'dark'}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-md ${
            theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
        <span className="sr-only">Toggle theme</span>
      </button>
      <Moon 
        size={16} 
        className={`transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === 'dark' ? 'text-blue-400 scale-100 opacity-100' : 'text-gray-400 scale-90 opacity-50'
        }`}
      />
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === 'dark'
            ? 'bg-gray-900 shadow-lg py-4'
            : 'bg-white shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a 
          href="#home"
          onClick={(e) => handleSmoothScroll(e, 'home')}
          className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
            theme === 'dark' ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'
          }`}
        >
          main.<span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>tsx</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
                  className={`${
                    theme === 'dark' ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                  } transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            className={`${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            } focus:outline-none`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full shadow-md transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        }`}>
          <ul className="py-4">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
                  className={`block py-3 px-6 transition-all duration-300 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;