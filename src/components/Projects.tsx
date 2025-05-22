import React, { useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { ProjectData } from '../data/projectsData';
import projectsData from '../data/projectsData';

interface ProjectCardProps {
  project: ProjectData;
  theme: 'light' | 'dark';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, theme }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${
          theme === 'dark' ? 'to-gray-900/80' : 'to-gray-900/70'
        } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>{project.title}</h3>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className={`px-3 py-1 text-sm rounded-full ${
              theme === 'dark' 
                ? 'bg-gray-700 text-gray-300' 
                : 'bg-gray-100 text-gray-700'
            }`}>
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-1 transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'text-blue-400 hover:text-blue-300' 
                  : 'text-blue-600 hover:text-blue-800'
              }`}
            >
              <span>Live Demo</span>
              <ArrowUpRight size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-1 transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <span>GitHub</span>
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

interface ProjectsProps {
  theme: 'light' | 'dark';
}

const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  return (
    <section id="projects" className={`py-24 px-6 lg:px-12 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          My Projects
        </h2>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-12 max-w-2xl`}>
          A selection of my recent work across web applications, design systems, and interactive experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;