import { Mail, Linkedin, Github, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const response = await fetch(
        `${supabaseUrl}/functions/v1/send-contact-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${anonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/DSKEVIN2k4', color: 'hover:text-gray-300' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kends2k4', color: 'hover:text-blue-400' },
    { icon: Mail, label: 'Email', href: 'mailto:kevinds2k4@gmail.com', color: 'hover:text-cyber-lime' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-charcoal relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(198, 255, 0, 0.08) 0%, rgba(41, 121, 255, 0.08) 100%)',
      }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-6xl sm:text-7xl font-black mb-4">
            <span className="gradient-text">Let's Chat</span>
          </h2>
          <p className="text-gray-400 font-mono text-lg">
            Interested in collaborating or have a question? Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass-glow p-8 animate-slideUp">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-cyber-lime" />
              <h3 className="font-display font-bold text-white text-xl">Get in Touch</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-mono text-cyber-lime mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-cyber-dark border border-cyber-lime/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-lime transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-cyber-lime mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-cyber-dark border border-cyber-lime/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-lime transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-cyber-lime mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 bg-cyber-dark border border-cyber-lime/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-lime transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyber-lime text-cyber-charcoal font-display font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className={`w-4 h-4 ${loading ? '' : 'group-hover:translate-x-1'} transition-transform`} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500 rounded-lg text-red-400 text-sm font-mono text-center">
                  {error}
                </div>
              )}

              {submitted && (
                <div className="p-3 bg-cyber-lime/10 border border-cyber-lime rounded-lg text-cyber-lime text-sm font-mono text-center animate-pulse">
                  Message received! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <div className="glass-glow p-8">
              <h3 className="font-display font-bold text-white mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="mailto:kevinds2k4@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-cyber-lime transition-colors group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-mono">kevinds2k4@gmail.com</span>
                </a>
                <a href="https://github.com/DSKEVIN2k4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-cyber-lime transition-colors group">
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-mono">github.com/DSKEVIN2k4</span>
                </a>
                <a href="https://www.linkedin.com/in/kends2k4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-cyber-lime transition-colors group">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-mono">linkedin.com/in/kends2k4</span>
                </a>
              </div>
            </div>

            <div className="glass-glow p-8">
              <h3 className="font-display font-bold text-white mb-4">Availability</h3>
              <div className="space-y-2 font-mono text-sm">
                <p><span className="text-cyber-lime">Status:</span> <span className="text-green-400">Available for Freelance</span></p>
                <p><span className="text-cyber-lime">Response:</span> <span className="text-gray-300">Within 24 hours</span></p>
                <p><span className="text-cyber-lime">Timezone:</span> <span className="text-gray-300">IST (UTC+5:30)</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 pt-8 border-t border-cyber-lime/20">
          {socials.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                title={social.label}
                className={`p-3 glass-glow rounded-lg text-cyber-lime ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyber-lime/30 animate-slideUp`}
                style={{ animationDelay: `${0.15 + idx * 0.05}s` }}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
