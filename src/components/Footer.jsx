const serviceLinks = [
  'Printing', 'Photocopy', 'Passport Photos', 'Business Cards',
  'KRA Services', 'NTSA Services', 'CV Writing', 'Logos',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center overflow-hidden">
                <img src="/images/logo.jpeg" alt="Logo" className="w-full h-full object-cover"
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                <span className="text-white font-black text-lg hidden">B</span>
              </div>
              <span className="font-bold text-lg">Babi Designs</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              All Printing & Online Services in One Place. Your trusted local business partner in Sinai.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/254714731641" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-green-600 hover:bg-green-500 rounded-lg flex items-center justify-center text-sm transition-colors">💬</a>
              <a href="mailto:babidesigns22@gmail.com"
                className="w-9 h-9 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center text-sm transition-colors">✉️</a>
              <a href="tel:+254714731641"
                className="w-9 h-9 bg-orange-600 hover:bg-orange-500 rounded-lg flex items-center justify-center text-sm transition-colors">📞</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Popular Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map(s => (
                <li key={s}>
                  <a href="#services" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <span className="mt-0.5">📍</span>
                <span>Sinai View Point Plaza, 1st Floor Room 1</span>
              </li>
              <li>
                <a href="tel:+254714731641" className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors">
                  <span>📞</span> 0714 731 641
                </a>
              </li>
              <li>
                <a href="tel:+254789234086" className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors">
                  <span>📞</span> 0789 234 086
                </a>
              </li>
              <li>
                <a href="mailto:babidesigns22@gmail.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors break-all">
                  <span>✉️</span> babidesigns22@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Babi Designs & Cyber – Sinai. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Fast · Affordable · Reliable</p>
        </div>
      </div>
    </footer>
  );
}