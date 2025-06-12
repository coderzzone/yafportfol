import React from 'react';
import { Shield, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">Yafet Yilma</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Cybersecurity specialist and full-stack developer focused on building secure, 
              scalable applications and protecting digital assets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li>yaficofi@gmail.com</li>
              <li>+251 (969) 526-295</li>
              <li>+251 (969) 526-295</li>
              <li>Addis Abeba, ET</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-gray-400 mb-4 sm:mb-0">
            <span>© {currentYear} Yafet Yilma. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>using React & Tailwind</span>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 z-40"
          aria-label="Back to top"
        >
          <Shield className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;