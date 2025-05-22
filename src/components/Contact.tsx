import React, { useState } from 'react';
import { Mail, Github, Twitter, TwitterIcon, Linkedin, FacebookIcon, InstagramIcon } from 'lucide-react';

interface ContactProps {
  theme: 'light' | 'dark';
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className={`py-24 px-6 lg:px-12 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Get In Touch
            </h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-8`}>
              Have a project in mind or want to chat about web development? 
              I'm always open to discussing new opportunities and ideas.
            </p>
            
            <div className="space-y-4 mb-8">
              <a 
                href="niteshpanthi798@gmail.com" 
                className={`flex items-center gap-3 transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <Mail size={20} />
                <span>niteshpanthi798@gmail.com</span>
              </a>
              <a 
                href="https://github.com/nieekha" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-3 transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <Github size={20} />
                <span>github.com/nieekha</span>
              </a>
              <a 
                href="https://x.com/nt3shh" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-3 transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <Twitter size={20} />
                <span>x.com/nt3shh</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/nitesh-panthi-6a4a57315/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-3 transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <Linkedin size={20} />
                <span>linkedin.com/nitesh panthi</span>
              </a>
              <a 
                href="https://https://www.facebook.com/electrify.nitesh/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-3 transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <FacebookIcon size={20} />
                <span>facebook.com/electrify.nitesh</span>
              </a>
              
              <a 
                href="https://www.instagram.com/finalbossnitesh/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-3 transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <InstagramIcon size={20} />
                <span>instagram.com/finalbossnitesh</span>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSubmitted ? (
                <div className={`${
                  theme === 'dark' 
                    ? 'bg-green-900/50 text-green-400' 
                    : 'bg-green-50 text-green-700'
                } p-4 rounded-lg mb-6`}>
                  Thanks for your message! I'll get back to you soon.
                </div>
              ) : null}
              
              <div>
                <label htmlFor="name" className={`block mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-colors border ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500'
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                />
              </div>
              
              <div>
                <label htmlFor="email" className={`block mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-colors border ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500'
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg transition-colors border ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500'
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 rounded-lg font-medium transition-all duration-300 ${
                  isSubmitting 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:shadow-lg'
                } ${
                  theme === 'dark'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;