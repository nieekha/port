import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  theme: 'light' | 'dark';
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initial animation
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title && subtitle && cta) {
      title.style.opacity = '0';
      subtitle.style.opacity = '0';
      cta.style.opacity = '0';
      
      title.style.transform = 'translateY(20px)';
      subtitle.style.transform = 'translateY(20px)';
      cta.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
        
        setTimeout(() => {
          subtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          subtitle.style.opacity = '1';
          subtitle.style.transform = 'translateY(0)';
          
          setTimeout(() => {
            cta.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            cta.style.opacity = '1';
            cta.style.transform = 'translateY(0)';
          }, 200);
        }, 200);
      }, 100);
    }

    // Parallax scroll effect
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.3;
        
        if (title) {
          title.style.transform = `translateY(${rate}px)`;
        }
        if (subtitle) {
          subtitle.style.transform = `translateY(${rate * 0.8}px)`;
        }
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
        
        // Easing function
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
  };

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className={`min-h-screen flex items-center justify-center pt-20 px-6 lg:px-12 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          ref={titleRef}
          className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transform will-change-transform ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
         Hi, I'm Nitesh.
        </h1>
        <p 
          ref={subtitleRef}
          className={`text-xl md:text-2xl mb-10 max-w-l mx-auto leading-relaxed transform will-change-transform ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          I architect scalable, performant web interfaces using modern frameworks, component-driven design, and a UX-first approach.
        </p>
        <div 
          ref={ctaRef} 
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a 
            href="#projects" 
            onClick={(e) => handleSmoothScroll(e, 'projects')}
            className={`px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
              theme === 'dark'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            View My Work
            <ArrowRight size={20} />
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 ${
              theme === 'dark'
                ? 'border border-gray-700 hover:border-blue-400 hover:text-blue-400'
                : 'border border-gray-300 hover:border-blue-600 hover:text-blue-600'
            }`}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;