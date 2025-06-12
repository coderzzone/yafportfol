import React from 'react';
import { Shield, Code, Server, Database, Globe, Terminal, Lock, Zap } from 'lucide-react';

const About: React.FC = () => {
  const techStack = [
    { name: 'Python', icon: <Code className="w-6 h-6" />, color: 'text-yellow-400' },
    { name: 'JavaScript', icon: <Globe className="w-6 h-6" />, color: 'text-yellow-300' },
    { name: 'React', icon: <Code className="w-6 h-6" />, color: 'text-blue-400' },
    { name: 'Node.js', icon: <Server className="w-6 h-6" />, color: 'text-green-400' },
    { name: 'MongoDB', icon: <Database className="w-6 h-6" />, color: 'text-green-500' },
    { name: 'PostgreSQL', icon: <Database className="w-6 h-6" />, color: 'text-blue-500' },
    { name: 'Linux', icon: <Terminal className="w-6 h-6" />, color: 'text-gray-300' },
    { name: 'Docker', icon: <Server className="w-6 h-6" />, color: 'text-blue-400' },
    { name: 'AWS', icon: <Globe className="w-6 h-6" />, color: 'text-orange-400' },
    { name: 'Kali Linux', icon: <Shield className="w-6 h-6" />, color: 'text-purple-400' },
    { name: 'Burp Suite', icon: <Lock className="w-6 h-6" />, color: 'text-red-400' },
    { name: 'Metasploit', icon: <Zap className="w-6 h-6" />, color: 'text-red-500' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity & Development Expert</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  With over 3+ years of experience in cybersecurity and full-stack development, I specialize in 
                  building secure, scalable applications while identifying and mitigating security vulnerabilities. 
                  My unique combination of offensive security skills and development expertise allows me to create 
                  robust systems from the ground up.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  I've conducted security assessments for Fortune 500 companies, developed custom security tools, 
                  and implemented DevSecOps practices across various organizations. My passion lies in bridging 
                  the gap between security and development teams to create secure-by-design applications.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                    <Shield className="w-8 h-8 text-cyan-400 mb-2" />
                    <h4 className="text-white font-semibold mb-1">Security Expert</h4>
                    <p className="text-gray-400 text-sm">Penetration testing, vulnerability assessment, and incident response</p>
                  </div>
                  <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                    <Code className="w-8 h-8 text-blue-400 mb-2" />
                    <h4 className="text-white font-semibold mb-1">Full-Stack Developer</h4>
                    <p className="text-gray-400 text-sm">Modern web applications with focus on security and performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Tech Stack & Tools</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group bg-gray-700/50 p-4 rounded-lg border border-gray-600 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`${tech.color} mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {tech.icon}
                  </div>
                  <p className="text-gray-300 text-sm font-medium">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;