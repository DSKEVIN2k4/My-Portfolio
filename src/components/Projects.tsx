import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Song Suggesting AI with Face Recognition',
      category: 'AI/ML',
      description: 'Emotion-based music recommendation system using facial recognition to detect real-time emotions and suggest fitting soundtracks - First project at PECTEAM 2023',
      tags: ['Python', 'OpenCV', 'TensorFlow', 'Neural Networks'],
      color: 'from-cyber-lime to-cyber-blue',
      featured: true,
    },
    {
      id: 2,
      title: 'Exchange Ease: Digital Barter Marketplace',
      category: 'Web Development',
      description: 'Trust-based digital barter platform for book exchange with NLP-powered recommendations, user profiling, and intelligent matching algorithms for sustainable resource sharing',
      tags: ['NLP', 'Web Development', 'Data Science', 'Python'],
      color: 'from-cyber-blue to-cyber-lime',
      featured: true,
    },
    {
      id: 3,
      title: 'Customer Lifetime Value (CLV) Prediction',
      category: 'Data Science',
      description: 'E-commerce predictive analytics using BG/NBD and Gamma-Gamma models to forecast customer value, segment users, and optimize retention strategies',
      tags: ['Machine Learning', 'Data Analysis', 'BG/NBD', 'Tableau'],
      color: 'from-cyber-lime via-cyber-blue to-cyber-lime',
      featured: false,
    },
    {
      id: 4,
      title: 'Aquasense: IoT Water Quality System',
      category: 'IoT/Embedded',
      description: 'Arduino-based IoT system for real-time water quality monitoring with automated detection and efficient resource management',
      tags: ['Arduino', 'IoT', 'Sensors', 'Real-time Monitoring'],
      color: 'from-cyber-blue to-cyan-500',
      featured: false,
    },
    {
      id: 6,
      title: 'Community Service Initiatives',
      category: 'Social Impact',
      description: 'Led multiple awareness campaigns including cyber bullying prevention with Tamil Nadu Police and anti-drug awareness marathon',
      tags: ['Leadership', 'Community Engagement', 'Social Impact', 'YRC'],
      color: 'from-cyber-lime to-green-400',
      featured: false,
    },
  ];

  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark relative">
      <div className="absolute inset-0 animated-gradient" style={{
        backgroundImage: 'linear-gradient(45deg, rgba(41, 121, 255, 0.05) 0%, rgba(198, 255, 0, 0.05) 100%)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-5xl sm:text-6xl font-black mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 font-mono">Showcasing technical expertise and creative vision</p>
        </div>

        <div className="space-y-6 mb-12">
          {featured.map((project, idx) => (
            <div
              key={project.id}
              className="glass-glow overflow-hidden hover:scale-102 transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className={`bg-gradient-to-br ${project.color} p-8 flex items-center justify-center min-h-64 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1), transparent 50%)',
                  }} />
                  <div className="relative z-10 text-center">
                    <p className="text-white/80 font-mono mb-2">{project.category}</p>
                    <h3 className="text-3xl font-black text-white">{project.title}</h3>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tech-badge text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-cyber-lime hover:text-white transition-colors font-semibold"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-cyber-blue hover:text-cyber-lime transition-colors font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((project, idx) => (
            <div
              key={project.id}
              className="glass-glow p-6 group hover:border-cyber-lime/60 transition-all duration-300 animate-slideUp h-full flex flex-col"
              style={{ animationDelay: `${(featured.length + idx) * 0.1}s` }}
            >
              <div className={`h-32 bg-gradient-to-br ${project.color} rounded-lg mb-4 opacity-80 group-hover:opacity-100 transition-opacity`} />

              <h3 className="font-display font-black text-white mb-2 text-lg">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="tech-badge text-xs">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <a href="#" className="text-cyber-lime text-sm hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-cyber-blue text-sm hover:text-cyber-lime transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
