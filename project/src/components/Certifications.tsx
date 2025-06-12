import React from 'react';
import { certifications } from '../data/portfolio';
import { Award, Calendar, Hash, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Professional certifications and recognition in cybersecurity and technology
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 p-3 rounded-lg">
                  <Award className="w-8 h-8 text-cyan-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.name}
                  </h3>
                  
                  <p className="text-gray-300 font-medium mb-4">{cert.issuer}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Earned {cert.date}</span>
                    </div>
                    
                    {cert.credentialId && (
                      <div className="flex items-center gap-2">
                        <Hash className="w-4 h-4" />
                        <span>ID: {cert.credentialId}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <CheckCircle className="w-6 h-6 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-8 rounded-2xl border border-gray-600">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Additional Achievements</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">CTF Championships</h4>
              <p className="text-gray-300 text-sm">Top 10 finish in multiple international Capture The Flag competitions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-red-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Bug Bounty Hunter</h4>
              <p className="text-gray-300 text-sm">Recognized vulnerabilities in major platforms, earning Hall of Fame mentions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Security Speaker</h4>
              <p className="text-gray-300 text-sm">Presented at cybersecurity conferences and developer meetups</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;