export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a href="https://wa.me/254714731641?text=Hello%20Babi%20Designs!%20I'd%20like%20to%20enquire%20about%20your%20services."
        target="_blank" rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center text-2xl transition-all duration-200 hover:scale-110 group relative">
        💬
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Chat on WhatsApp</span>
      </a>
      <a href="tel:+254714731641"
        className="w-14 h-14 bg-orange-500 hover:bg-orange-600 rounded-full shadow-2xl shadow-orange-500/40 flex items-center justify-center text-2xl transition-all duration-200 hover:scale-110 group relative">
        📞
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Call: 0714 731 641</span>
      </a>
    </div>
  );
}