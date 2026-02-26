import { Briefcase, BookOpen, Award } from 'lucide-react';

export default function Experience() {
  const timeline = [
    {
      type: 'education',
      icon: BookOpen,
      title: 'B.Tech in AI & Data Science',
      org: 'Panimalar Engineering College, Chennai',
      period: '2022 - 2026',
      desc: 'Final-year student with CGPA 6.82/10, specializing in machine learning, data analytics, computer vision, and artificial intelligence applications',
      skills: ['Python', 'ML', 'Data Science', 'Deep Learning'],
    },
    {
      type: 'experience',
      icon: Briefcase,
      title: 'IoT Intern - Water Quality Management',
      org: 'Innovate Intern (AICTE Approved)',
      period: 'Jan - Apr 2024',
      desc: 'Completed 16-week hands-on internship developing Aquasense: IoT-based water quality monitoring system using Arduino and sensor integration for real-time environmental tracking',
      skills: ['Arduino', 'IoT', 'Sensors', 'System Design'],
    },
    {
      type: 'achievement',
      icon: Award,
      title: 'Student Coordinator & Community Leader',
      org: 'Panimalar Engineering College',
      period: '2023 - 2025',
      desc: 'Coordinated major academic events including PECTEAM conferences, led YRC initiatives for social impact, and served as graphic designer for campus events and awareness programs',
      skills: ['Leadership', 'Event Coordination', 'Design', 'Community Service'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-charcoal relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-5xl sm:text-6xl font-black mb-4">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <p className="text-gray-400 font-mono">My journey in tech and learning</p>
        </div>

        <div className="space-y-6">
          {timeline.map((item, idx) => {
            const Icon = item.icon;
            const isAlternate = idx % 2 === 1;

            return (
              <div
                key={idx}
                className={`grid md:grid-cols-2 gap-8 items-center animate-slideUp`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`glass-glow p-8 ${isAlternate ? 'md:order-2' : ''}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-cyber-lime/10 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-cyber-lime" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-white text-xl">{item.title}</h3>
                      <p className="text-cyber-lime font-semibold text-sm">{item.org}</p>
                      <p className="text-gray-400 font-mono text-xs mt-1">{item.period}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{item.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="tech-badge text-xs">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className={`hidden md:flex ${isAlternate ? 'md:order-1' : ''} justify-center`}>
                  <div className="w-48 h-48 glass p-6 flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-mono text-cyber-blue text-sm mb-2">&lt; {item.type.toUpperCase()} &gt;</p>
                      <Icon className="w-16 h-16 text-cyber-lime mx-auto opacity-50 mb-2" />
                      <p className="font-mono text-cyber-lime text-xs">{item.period}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
