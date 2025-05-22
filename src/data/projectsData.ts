export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A modern dashboard for managing products, orders, and customers with real-time analytics.",
    image: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://example.com/project1",
    githubUrl: "https://github.com/yourusername/project1"
  },
  {
    id: 2,
    title: "Design System Library",
    description: "A comprehensive component library and design system for rapid application development.",
    image: "https://images.pexels.com/photos/4386441/pexels-photo-4386441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Storybook", "Styled Components", "Jest"],
    liveUrl: "https://example.com/project2",
    githubUrl: "https://github.com/yourusername/project2"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and progress tracking.",
    image: "https://images.pexels.com/photos/6956483/pexels-photo-6956483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    liveUrl: "https://example.com/project3",
    githubUrl: "https://github.com/yourusername/project3"
  },
  {
    id: 4,
    title: "News Aggregator",
    description: "A personalized news application that collects and categorizes articles from various sources.",
    image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://example.com/project4",
    githubUrl: "https://github.com/yourusername/project4"
  },
  {
    id: 5,
    title: "Weather Visualization",
    description: "An interactive weather application with beautiful visualizations and 7-day forecasts.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "D3.js", "OpenWeather API", "Framer Motion"],
    liveUrl: "https://example.com/project5",
    githubUrl: "https://github.com/yourusername/project5"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A minimalist portfolio showcasing creative work and projects with smooth animations.",
    image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com/project6",
    githubUrl: "https://github.com/yourusername/project6"
  }
];

export default projectsData;