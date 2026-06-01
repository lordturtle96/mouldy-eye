import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f0a] text-[#d1fae5] overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#4ade80]/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4ade80] to-[#a3e635] flex items-center justify-center text-black font-bold text-xl">👁️</div>
            <span className="text-2xl font-serif tracking-widest mycelium-glow">MOULDY EYE</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            <a href="#knowledge" className="hover:text-[#a3e635] transition-colors">Knowledge</a>
            <a href="#web" className="hover:text-[#a3e635] transition-colors">The Web</a>
            <a href="#remediation" className="hover:text-[#a3e635] transition-colors">Healing</a>
            <a href="#rituals" className="hover:text-[#a3e635] transition-colors">Rituals</a>
            <a href="#join" className="hover:text-[#a3e635] transition-colors">Join the Network</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center relative pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(#4ade80_0.8px,transparent_1px)] bg-[length:30px_30px] opacity-10"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-black/60 border border-[#4ade80]/30 rounded-full text-xs tracking-[3px]">
              BENEATH THE SURFACE AWAITS
            </div>
            <h1 className="text-7xl md:text-8xl font-serif leading-none tracking-tighter mycelium-glow">
              THE MOULDY<br />EYE SEES<br />ALL<br />CONNECTIONS
            </h1>
            <p className="max-w-md mx-auto text-xl text-[#a1a1aa]">Enter the living web of mycelium. Where decay births life. Where the unseen connects everything.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="#knowledge" className="px-10 py-4 bg-[#4ade80] text-black font-medium rounded-full hover:bg-[#a3e635] transition-all active:scale-95">Begin the Journey</a>
              <a href="#join" className="px-10 py-4 border border-[#4ade80] hover:bg-white/5 rounded-full transition-all">Join the Initiates</a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">↓</div>
      </section>

      {/* Knowledge Section */}
      <section id="knowledge" className="py-32 border-t border-[#4ade80]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#4ade80] text-sm tracking-widest mb-4">CHAPTER I</div>
            <h2 className="text-6xl font-serif">The Hidden Architect</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-xl leading-relaxed">Mycelium — the vast, thread-like network that forms the true body of fungi. It spans acres, digests the dead, and births the new.</p>
              <div className="bg-black/40 p-8 rounded-3xl border border-[#4ade80]/20">
                <h3 className="text-2xl mb-4">Key Truths</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex gap-4"><span className="text-[#4ade80]">🌱</span> Connects 90% of plants in symbiotic exchange</li>
                  <li className="flex gap-4"><span className="text-[#4ade80]">🌱</span> Largest organism on Earth</li>
                  <li className="flex gap-4"><span className="text-[#4ade80]">🌱</span> Nature's Internet & Alchemist</li>
                </ul>
              </div>
            </div>
            <div className="relative h-96 bg-[url('https://picsum.photos/id/1015/800/600')] bg-cover rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-sm uppercase tracking-widest">Macro view of hyphal networks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Wood Wide Web */}
      <section id="web" className="py-32 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-serif mb-6">The Wood Wide Web</h2>
          <p className="max-w-2xl mx-auto text-xl mb-16">Trees whisper through fungal bridges. Warnings. Nutrients. Memories of the forest.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map(i => (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-[#1a3c2e] p-10 rounded-3xl border border-[#4ade80]/30">
                <div className="text-6xl mb-6">🧬</div>
                <h3 className="text-2xl mb-4">Symbiotic Intelligence</h3>
                <p className="opacity-80">Mycelium as Earth's neural network. Solving problems without a brain.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="join" className="py-32 relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-serif mb-8">Become Part of the Mycelium</h2>
          <p className="text-2xl mb-12 opacity-90">The network grows stronger with every new thread. Share sightings. Create rituals. Awaken together.</p>
          <button className="px-16 py-6 text-xl bg-gradient-to-r from-[#4ade80] to-[#a3e635] text-black rounded-full font-medium hover:scale-105 transition-transform">Initiate Membership • Free</button>
          <p className="mt-8 text-sm opacity-60">Subtle entry into the living cult of interconnection</p>
        </div>
      </section>

      <footer className="border-t border-[#4ade80]/20 py-12 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Mouldy Eye • All threads connected
      </footer>
    </div>
  );
}
