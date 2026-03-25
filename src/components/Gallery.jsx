const galleryItems = [
  {
    type: 'Business Cards',
    emoji: '💼',
    bg: 'from-blue-500 to-blue-700',
    desc: 'Professional cards for every occasion',
    image: '/images/gallery/business-cards.jpg',
  },
  {
    type: 'Posters',
    emoji: '📋',
    bg: 'from-purple-500 to-purple-700',
    desc: 'Vibrant posters for events and promotions',
    image: '/images/gallery/posters.jpg',
  },
  {
    type: 'Banners',
    emoji: '🎌',
    bg: 'from-red-500 to-red-700',
    desc: 'Large-format banners that stand out',
    image: '/images/gallery/banners.jpg',
  },
  {
    type: 'Logos & Branding',
    emoji: '✨',
    bg: 'from-orange-500 to-orange-700',
    desc: 'Creative logos that define your brand',
    image: '/images/gallery/logos.jpg',
  },
  { type: 'Certificates', 
    emoji: '🏆', 
     bg: 'from-yellow-500 to-yellow-700', 
    desc: 'Professionally printed certificates',
    image: '/images/gallery/certificates.jpg',
  },
  { type: 'Brochures', 
    emoji: '📄', 
    bg: 'from-green-500 to-green-700', 
    desc: 'Informative brochures for your business',
    image: '/images/gallery/brochures.jpg',
  },
  
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">Portfolio & Gallery</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A glimpse of the quality work we produce for our clients every day.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {galleryItems.map(item => (
            <div key={item.type}
              className={`relative rounded-2xl overflow-hidden ${item.image ? '' : `bg-gradient-to-br ${item.bg}`} aspect-[4/3] flex flex-col text-white`}>
              {item.image && (
                <img src={item.image} alt={item.type} className="absolute inset-0 w-full h-full object-cover" />
              )}
              <div className="absolute inset-0 bg-black/40" />
              {!item.image && (
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
              )}
              <div className="relative z-10 flex flex-col justify-between h-full p-4">
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  {!item.image && <div className="text-5xl mb-2">{item.emoji}</div>}
                  <h3 className="font-bold text-lg mb-1 drop-shadow">{item.type}</h3>
                  <p className="text-white/80 text-xs">{item.desc}</p>
                </div>
                <a href={`https://wa.me/254714731641?text=Hello!%20I'd%20like%20to%20order%20${encodeURIComponent(item.type)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-3 w-full bg-white/20 hover:bg-white hover:text-gray-900 backdrop-blur-sm border border-white/40 text-white font-bold py-2 rounded-xl text-sm text-center transition-all duration-200">
                  Order Now →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Want to see more? Contact us directly for samples and pricing.</p>
          <a href="#contact" className="btn-primary inline-block">Get a Quote</a>
        </div>
      </div>
    </section>
  );
}