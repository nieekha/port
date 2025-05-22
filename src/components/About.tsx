import React from 'react';
import { Code, Palette, Zap, Monitor, Download } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  theme: 'light' | 'dark';
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, theme }) => (
  <div className={`${
    theme === 'dark' 
      ? 'bg-gray-800 hover:shadow-gray-700/50' 
      : 'bg-gray-50 hover:shadow-md'
  } p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1`}>
    <div className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} mb-4`}>
      {icon}
    </div>
    <h3 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-lg font-semibold mb-2`}>{title}</h3>
    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{description}</p>
  </div>
);

interface AboutProps {
  theme: 'light' | 'dark';
}

const About: React.FC<AboutProps> = ({ theme }) => {
  const skills = [
    {
      icon: <Code size={32} />,
      title: 'UI Engineering',
      description: 'Building complex interfaces with clean, maintainable code and component-based architecture.'
    },
    {
      icon: <Palette size={32} />,
      title: 'Design Systems',
      description: 'Creating scalable design systems that ensure consistency across digital products.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency to deliver exceptional user experiences.'
    },
    {
      icon: <Monitor size={32} />,
      title: 'Accessibility',
      description: 'Ensuring interfaces are usable by everyone, regardless of ability or context.'
    }
  ];

  return (
    <section id="about" className={`py-24 px-6 lg:px-12 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              About Me
            </h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-6`}>
              I'm a creative frontend developer with a passion for building beautiful, functional web experiences. With a keen eye for design and a love for clean code, I bridge the gap between visual aesthetics and technical implementation.
            </p>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-6`}>
              My approach combines thoughtful user experience design with modern development practices, resulting in interfaces that are both delightful to use and maintainable over time.
            </p>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-8`}>
              When I'm not coding, you'll find me exploring design trends, contributing to open source, or sketching new interface ideas.
            </p>
            <a
              href="/niteshcv2024.pdf"
              download="Nitesh_Panthi_CV.pdf"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                theme === 'dark'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <SkillCard 
                  key={index}
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                  theme={theme}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;