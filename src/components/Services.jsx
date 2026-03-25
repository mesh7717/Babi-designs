import { useState } from 'react';

const categories = [
  {
    id: 'printing', icon: '🖨️', title: 'Printing Services', color: 'blue',
    services: [
      { name: 'Printing (B&W)', desc: 'Black & white printing per page.', price: 'KES 5/page' },
      { name: 'Printing (Color)', desc: 'Full color printing per page.', price: 'KES 20/page' },
      { name: 'Photocopy', desc: 'Quick photocopying for any document size.', price: 'KES 5/page' },
      { name: 'Scanning', desc: 'Digital scanning to PDF or image formats.', price: 'KES 20/page' },
      { name: 'Binding', desc: 'Professional binding for reports, theses, and booklets.', price: 'From KES 100' },
      { name: 'Lamination', desc: 'Protective lamination for cards, certificates, and papers.', price: 'From KES 50' },
    ],
  },
  {
    id: 'photo', icon: '📸', title: 'Photo & Documents', color: 'green',
    services: [
      { name: 'Passport Photos', desc: 'Studio-quality passport photos meeting all official requirements.', price: 'KES 100' },
      { name: 'E-Passports', desc: 'Assistance with e-passport applications and renewals.', price: 'KES 200' },
      { name: 'Logbook Transfer', desc: 'Vehicle logbook transfer documentation support.', price: 'KES 300' },
      { name: 'Good Conduct', desc: 'Certificate of Good Conduct application assistance.', price: 'KES 200' },
    ],
  },
  {
    id: 'design', icon: '🎨', title: 'Business & Design', color: 'purple',
    services: [
      { name: 'Business Cards', desc: 'Professional business card design and printing.', price: 'From KES 500' },
      { name: 'Posters', desc: 'Eye-catching poster design and printing for events & promotions.', price: 'From KES 300' },
      { name: 'Banners', desc: 'Large-format banners for businesses, events, and campaigns.', price: 'From KES 1,500' },
      { name: 'Logos', desc: 'Custom logo design to build your brand identity.', price: 'From KES 1,000' },
      { name: 'CV Writing', desc: 'Professional CV and resume writing to land your next job.', price: 'From KES 300' },
      { name: 'Eulogies', desc: 'Compassionate eulogy writing to honor your loved ones.', price: 'From KES 500' },
    ],
  },
  {
    id: 'online', icon: '🌐', title: 'Online Services', color: 'orange',
    services: [
      { name: 'KRA Services', desc: 'Tax returns, PIN registration, and all KRA-related services.', price: 'From KES 100' },
      { name: 'NTSA Services', desc: 'Vehicle registration, driving license, and NTSA portal support.', price: 'From KES 200' },
      { name: 'TSC Services', desc: 'Teachers Service Commission registration and applications.', price: 'From KES 200' },
      { name: 'E-Citizen Services', desc: 'Full e-citizen portal assistance for all government services.', price: 'From KES 100' },
      { name: 'KUCCPS Applications', desc: 'University and college placement application support.', price: 'KES 200' },
      { name: 'HELB/HEF Applications', desc: 'Student loan applications and Higher Education Fund support.', price: 'KES 200' },
      { name: 'KMTC Services', desc: 'Kenya Medical Training College applications and services.', price: 'KES 200' },
      { name: 'Payslips', desc: 'Payslip printing and processing for individuals and businesses.', price: 'KES 50' },
      { name: 'Gmail Account Recovery', desc: 'Recover access to your Google/Gmail account.', price: 'KES 200' },
    ],
  },
];

const colorMap = {
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   badge: 'bg-blue-500',   price: 'text-blue-600 bg-blue-50' },
  green:  { bg: 'bg-green-50',  border: 'border-green-200',  badge: 'bg-green-500',  price: 'text-green-600 bg-green-50' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', badge: 'bg-purple-500', price: 'text-purple-600 bg-purple-50' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-500', price: 'text-orange-600 bg-orange-50' },
};

export default function Services() {
  const [activeTab, setActiveTab] = useState('printing');
  const active = categories.find(c => c.id === activeTab);
  const colors = colorMap[active.color];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">Our Services</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From printing to government portals — we bring all the services you need under one roof.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map(cat => (
            <button key={cat.id} onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 border
                ${activeTab === cat.id
                  ? 'bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-200'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-orange-300 hover:text-orange-500'}`}>
              <span>{cat.icon}</span>{cat.title}
            </button>
          ))}
        </div>
        <div className={`rounded-3xl border ${colors.border} ${colors.bg} p-8`}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {active.services.map(service => (
              <div key={service.name}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-base flex-1 pr-2">{service.name}</h3>
                  <span className={`text-xs text-white px-2 py-0.5 rounded-full flex-shrink-0 ${colors.badge}`}>
                    {active.title.split(' ')[0]}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{service.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                  <span className={`text-sm font-bold px-3 py-1 rounded-full ${colors.price}`}>
                    {service.price}
                  </span>
                  <a href={`https://wa.me/254714731641?text=Hello!%20I'd%20like%20to%20request%20${encodeURIComponent(service.name)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 font-semibold text-sm">
                    Request →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}