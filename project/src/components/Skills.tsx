import React, { useEffect, useState, useRef } from 'react';
import { skills } from '../data/portfolio';
import { Shield, Code, Server, PenTool as Tool } from 'lucide-react';

const Skills: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cybersecurity':
        return <Shield className="w-6 h-6 text-red-400" />;
      case 'frontend':
        return <Code className="w-6 h-6 text-blue-400" />;
      case 'backend':
        return <Server className="w-6 h-6 text-green-400" />;
      case 'tools':
        return <Tool className="w-6 h-6 text-purple-400" />;
      default:
        return <Code className="w-6 h-6 text-gray-400" />;
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'cybersecurity':
        return 'Cybersecurity';
      case 'frontend':
        return 'Frontend Development';
      case 'backend':
        return 'Backend Development';
      case 'tools':
        return 'Tools & Technologies';
      default:
        return category;
    }
  };

  const categories = ['cybersecurity', 'frontend', 'backend', 'tools'];

  return (
    <section id="skills" className="py-20 bg-gray-900" ref={skillsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A comprehensive skill set spanning cybersecurity, full-stack development, and modern tools
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div key={category} className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                {getCategoryIcon(category)}
                <h3 className="text-2xl font-bold text-white">{getCategoryTitle(category)}</h3>
              </div>
              
              <div className="space-y-6">
                {getSkillsByCategory(category).map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-200">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: animated ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center bg-gradient-to-br from-red-900/20 to-red-800/20 p-6 rounded-2xl border border-red-500/20">
            <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Security First</h4>
            <p className="text-gray-300">Deep expertise in threat modeling, penetration testing, and security architecture</p>
          </div>
          
          <div className="text-center bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-6 rounded-2xl border border-blue-500/20">
            <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Full-Stack Mastery</h4>
            <p className="text-gray-300">Modern frameworks and technologies for scalable, maintainable applications</p>
          </div>
          
          <div className="text-center bg-gradient-to-br from-green-900/20 to-green-800/20 p-6 rounded-2xl border border-green-500/20">
            <Server className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">DevSecOps</h4>
            <p className="text-gray-300">Integrating security practices into CI/CD pipelines and infrastructure</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;