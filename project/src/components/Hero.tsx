import React from 'react';
import { ArrowRight, Download, Shield, Code, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-20 h-20 border border-cyan-400 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-16 h-16 border border-blue-500 rotate-12 animate-pulse delay-100"></div>
        <div className="absolute bottom-40 left-40 w-12 h-12 border border-cyan-300 rotate-45 animate-pulse delay-200"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-400 rotate-12 animate-pulse delay-300"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Shield className="absolute top-1/4 left-1/4 w-8 h-8 text-cyan-400/20 animate-float" />
        <Code className="absolute top-1/3 right-1/4 w-6 h-6 text-blue-400/20 animate-float delay-1000" />
        <Lock className="absolute bottom-1/3 left-1/3 w-7 h-7 text-cyan-300/20 animate-float delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Yafet Yilma</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Cybersecurity & Full-Stack Developer
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building secure systems with elegant code. Protecting digital assets while crafting exceptional user experiences.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">3+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">10+</div>
              <div className="text-gray-400 text-sm">Security Audits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">50+</div>
              <div className="text-gray-400 text-sm">Vulnerabilities Found</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1"
            >
              Hire Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <a
              href="/cv-yafet-yilma.pdf"
              download
              className="group bg-transparent text-cyan-400 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;