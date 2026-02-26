import { Star, Trophy, Zap } from 'lucide-react';

export default function Achievements() {
  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',
      issuer: 'Oracle Corporation',
      status: 'Certified',
      icon: Zap,
      date: 'July 2024',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      status: 'Certified',
      icon: Zap,
      date: '2025',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
      issuer: 'Oracle',
      status: 'Certified',
      icon: Zap,
      date: '2025',
    },
    {
      title: 'Oracle Data Platform 2025 Certified Foundations Associate',
      issuer: 'Oracle',
      status: 'Certified',
      icon: Zap,
      date: '2025',
    },
  ];

  const achievements = [
    {
      title: 'Paper Presentation at IConIC 2025',
      desc: 'Exchange Ease: Trust-Based Digital Barter Marketplace - International Conference',
      category: 'Research',
      icon: Trophy,
    },
    {
      title: 'Certificate of Appreciation - Leo Club District 324 L',
      desc: 'Community service and leadership recognition from Lions International',
      category: 'Service',
      icon: Star,
    },
    {
      title: 'PECTEAM 7th Conference Student Coordinator',
      desc: 'Leadership role at Emerging Current Trends in Engineering and Management',
      category: 'Leadership',
      icon: Trophy,
    },
    {
      title: 'INTELLICONZ\'24 Promotional Designer Award',
      desc: 'Recognition for visual design contributions and creative excellence',
      category: 'Design',
      icon: Star,
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark relative">
      <div className="absolute inset-0 animated-gradient" style={{
        backgroundImage: 'linear-gradient(-135deg, rgba(198, 255, 0, 0.05) 0%, rgba(41, 121, 255, 0.05) 100%)',
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-5xl sm:text-6xl font-black mb-4">
            <span className="gradient-text">Achievements & Certifications</span>
          </h2>
          <p className="text-gray-400 font-mono">Recognition and professional development</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-2">
              <Zap className="w-6 h-6 text-cyber-lime" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={idx}
                    className="glass-glow p-6 border-l-4 border-cyber-lime/50 hover:border-cyber-lime transition-all duration-300 animate-slideUp group"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-display font-bold text-white mb-1">{cert.title}</h4>
                        <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                        <div className="flex items-center gap-2">
                          <span className="inline-block px-2 py-1 bg-cyber-lime/10 border border-cyber-lime text-cyber-lime text-xs font-mono rounded">
                            {cert.status}
                          </span>
                          <span className="text-xs text-gray-500 font-mono">{cert.date}</span>
                        </div>
                      </div>
                      <Icon className="w-5 h-5 text-cyber-lime flex-shrink-0 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-cyber-lime" />
              Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, idx) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={idx}
                    className="glass-glow p-6 hover:scale-105 transition-all duration-300 animate-slideUp"
                    style={{ animationDelay: `${(certifications.length + idx) * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-cyber-lime/10 rounded-lg flex-shrink-0">
                        <Icon className="w-5 h-5 text-cyber-lime" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display font-bold text-white mb-1">{achievement.title}</h4>
                        <p className="text-sm text-gray-400 mb-2">{achievement.desc}</p>
                        <span className="inline-block text-xs font-mono text-cyber-blue bg-cyber-blue/10 px-2 py-1 rounded">
                          {achievement.category}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 glass-glow p-8 border-2 border-cyber-lime/30 text-center animate-slideUp">
          <p className="text-lg font-mono text-cyber-lime mb-2">Continuous Learning</p>
          <p className="text-gray-300">
            Always exploring new technologies, contributing to open source, and staying ahead of industry trends
          </p>
        </div>
      </div>
    </section>
  );
}
