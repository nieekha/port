import React from 'react';
import { Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const scrollToTop = () => {
    const startPosition = window.pageYOffset;
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

      window.scrollTo(0, startPosition * (1 - easeInOutCubic(progress)));

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <footer className={`py-12 px-6 lg:px-12 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-900'
    } text-white`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <button 
              onClick={scrollToTop}
              className="text-xl font-bold tracking-tight transition-all duration-300 hover:text-blue-400"
            >
              main.<span className="text-blue-400">tsx</span>
            </button>
            <p className="mt-2 text-gray-400">
              © {new Date().getFullYear()}  Unauthorized cloning may cause bugs.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/nieekha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://x.com/nt3shh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/nitesh-panthi-6a4a57315/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <button 
              onClick={scrollToTop}
              className={`ml-2 p-2 rounded-full transition-all duration-300 transform hover:-translate-y-1 ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-gray-400 hover:text-white' 
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;