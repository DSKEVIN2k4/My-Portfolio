import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-cyber-charcoal">
      <div className="absolute inset-0 animated-gradient" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(198, 255, 0, 0.1) 0%, rgba(41, 121, 255, 0.1) 50%, rgba(198, 255, 0, 0.05) 100%)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-between">
        <div className="space-y-8 max-w-2xl animate-slideUp">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="tech-badge">Available for Freelance</span>
              <Zap className="w-5 h-5 text-cyber-lime animate-pulse" />
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl leading-tight font-black">
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }} className="inline-block px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyber-lime to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">
                Kevin DS
              </span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 font-mono leading-relaxed max-w-xl">
            UI/UX Designer | Creating beautiful digital experiences with exceptional design
          </p>

          <div className="flex gap-4 flex-wrap pt-6">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-cyber-lime text-cyber-charcoal font-display font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:gap-3"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 glass-glow font-display font-bold text-cyber-lime"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="w-80 h-80 glass-glow p-8 animate-float">
            <div className="space-y-4 font-mono text-sm">
              <div className="text-cyber-lime">{'>'} init portfolio</div>
              <div className="text-gray-400">Loading expertise...</div>
              <div className="space-y-2 py-4">
                <div className="text-cyber-blue">AI/ML Systems</div>
                <div className="text-cyber-blue">UI/UX Design</div>
                <div className="text-cyber-blue">Data Science</div>
                <div className="text-cyber-blue">Full Stack Dev</div>
              </div>
              <div className="text-cyber-lime animate-pulse">{'>'} Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
