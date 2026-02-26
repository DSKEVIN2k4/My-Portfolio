import { Code2, Palette, Brain } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: Brain, title: 'AI & Data Science', desc: 'Building intelligent systems with ML, NLP, and computer vision' },
    { icon: Palette, title: 'Design & Aesthetics', desc: 'Creating beautiful interfaces with modern design principles' },
    { icon: Code2, title: 'Full Stack Dev', desc: 'Crafting robust backend systems and responsive frontends' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-charcoal relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-5xl sm:text-6xl font-black mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-400 font-mono">Bridging engineering logic with creative vision</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideUp">
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-white">The Hybrid Engineer</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a final-year AI & Data Science student at <span className="text-cyber-lime font-semibold">Panimalar Engineering College</span>, graduating in 2026. My journey uniquely blends:
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-cyber-lime font-semibold">Technical Expertise:</span> Building intelligent systems using machine learning, data analytics, and full-stack development.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <span className="text-cyber-lime font-semibold">Creative Vision:</span> Designing user experiences that are not just functional, but visually stunning and intuitive.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <span className="text-cyber-lime font-semibold">Leadership:</span> Leading media initiatives and producing compelling technical content for the community.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-sm font-mono text-cyber-blue mb-3">Status:</p>
              <div className="glass-glow p-4 border-l-4 border-cyber-lime">
                <p className="font-mono text-cyber-lime font-semibold">Exploring cloud-native development and advanced AI research</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={idx}
                  className="glass-glow p-6 group hover:scale-105 transition-transform duration-300 animate-slideUp"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyber-lime/10 rounded-lg group-hover:bg-cyber-lime/20 transition-colors">
                      <Icon className="w-6 h-6 text-cyber-lime" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-bold text-white mb-2">{skill.title}</h4>
                      <p className="text-sm text-gray-400">{skill.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
