export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-950 to-gray-900" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(249,115,22,0.6) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-orange-600 rounded-full opacity-10 blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          <span className="text-orange-300 text-sm font-medium">Sinai View Point Plaza, 1st Floor Room 1</span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          Babi Designs
          <span className="block text-orange-400">&amp; Cyber</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">All Printing &amp; Online Services in One Place</p>
        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-base">From passport photos to KRA services, business cards to e-citizen — we've got everything you need, fast and affordable.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+254714731641" className="btn-primary text-base py-3.5 px-8">📞 Call: 0714 731 641</a>
          <a href="#services" className="btn-outline text-base py-3.5 px-8 border-white/30 text-white hover:bg-white/10 hover:text-white">View Our Services</a>
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { number: '20+', label: 'Services Offered' },
            { number: 'Fast', label: 'Turnaround Time' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: 'Affordable', label: 'Pricing' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-orange-400">{stat.number}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <span className="text-gray-500 text-xs">Scroll down</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}