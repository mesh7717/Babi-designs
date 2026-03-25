import { useState, useEffect } from 'react';

// 1. Refined Logo Component
function LogoIcon({ scrolled }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 transition-colors duration-300 ${
      scrolled ? 'bg-orange-100' : 'bg-orange-500'
    }`}>
      {!imgError ? (
        <img
          src="images/logo.jpeg"
          alt="Babi Designs Logo"
          className="w-full h-full object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className={`font-black text-xl ${scrolled ? 'text-orange-600' : 'text-white'}`}>
          B
        </span>
      )}
    </div>
  );
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <LogoIcon scrolled={scrolled} />
            <span className={`font-bold text-xl tracking-tight transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Babi <span className="text-orange-500">Designs</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-orange-500 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}>
                {link.label}
              </a>
            ))}
            <a href="tel:+254714731641" 
               className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-2.5 px-5 rounded-full transition-all transform hover:scale-105">
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="space-y-1.5">
              <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-gray-800' : 'bg-white'}`} />
              <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-gray-800' : 'bg-white'}`} />
              <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-gray-800' : 'bg-white'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                className="text-gray-800 text-lg font-medium hover:text-orange-500"
                onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="tel:+254714731641" className="bg-orange-500 text-white text-center py-3 rounded-lg font-bold">
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}