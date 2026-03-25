const highlights = [
  { icon: '⚡', title: 'Fast Service', desc: 'We value your time. Most services are completed quickly so you can move on with your day.' },
  { icon: '💰', title: 'Affordable Prices', desc: 'Quality services at prices that are fair and accessible to everyone in our community.' },
  { icon: '🤝', title: 'Reliable & Trusted', desc: 'Built on trust and consistency — our clients keep coming back because we deliver on our promises.' },
  { icon: '🖨️', title: 'All-in-One Stop', desc: 'Printing, cyber, government services, design — no need to go anywhere else.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-6 leading-tight">
              Your Trusted Local<br />
              <span className="text-orange-500">Business Partner</span>
            </h2>
            <p className="text-gray-600 text-lg mb-5 leading-relaxed">Babi Designs &amp; Cyber is your one-stop shop for all printing, design, and online government services. Based at Sinai View Point Plaza, we've been serving our community with dedication and professionalism.</p>
            <p className="text-gray-600 mb-8 leading-relaxed">Our mission is simple: help every client access digital and printing services easily, affordably, and without the stress. Whether you need a passport photo, a business card designed, or help with KRA returns — we handle it all.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-primary text-center">Explore Services</a>
              <a href="#contact" className="btn-outline text-center">Get in Touch</a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map(h => (
              <div key={h.title} className="bg-gray-50 rounded-2xl p-6 hover:bg-orange-50 transition-colors duration-200 border border-gray-100 hover:border-orange-200">
                <div className="text-3xl mb-3">{h.icon}</div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{h.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}