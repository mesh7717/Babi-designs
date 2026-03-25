import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello! I'm ${form.name}. I'd like to inquire about: ${form.service}.\n\n${form.message}\n\nMy contact: ${form.phone}`;
    window.open(`https://wa.me/254714731641?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Reach Us</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">Get In Touch</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Have a question or want to place an order? Reach out — we respond fast!</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            {[
              { icon: '📍', label: 'Our Location', value: 'Sinai View Point Plaza', sub: '1st Floor, Room 1' },
              { icon: '📞', label: 'Call Us', value: '0769 150 684', sub: '0789 234 086', href: 'tel:+254714731641' },
              { icon: '✉️', label: 'Email', value: 'babidesigns22@gmail.com', href: 'mailto:babidesigns22@gmail.com' },
              { icon: '💬', label: 'WhatsApp', value: 'Chat with us on WhatsApp', href: 'https://wa.me/254714731641' },
            ].map(item => (
              <a key={item.label} href={item.href || '#'} target={item.href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-200 block">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</div>
                  <div className="text-gray-900 font-semibold mt-0.5">{item.value}</div>
                  {item.sub && <div className="text-gray-500 text-sm">{item.sub}</div>}
                </div>
              </a>
            ))}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-52">
              <iframe title="Babi Designs Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.23780671041!2d36.8208!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMzEuNiJTIDM2wrA0OScxNC44IkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" />
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-500">We'll get back to you via WhatsApp shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 btn-primary">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Your Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Meshack Korir" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="0700 000 000" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Service Required *</label>
                  <select name="service" value={form.service} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition bg-white">
                    <option value="">Select a service...</option>
                    <optgroup label="Printing Services">
                      <option>Printing</option><option>Photocopy</option><option>Scanning</option><option>Binding</option><option>Lamination</option>
                    </optgroup>
                    <optgroup label="Photo & Documents">
                      <option>Passport Photos</option><option>E-Passports</option><option>Logbook Transfer</option><option>Good Conduct</option>
                    </optgroup>
                    <optgroup label="Business & Design">
                      <option>Business Cards</option><option>Posters</option><option>Banners</option><option>Logos</option><option>CV Writing</option><option>Eulogies</option>
                    </optgroup>
                    <optgroup label="Online Services">
                      <option>KRA Services</option><option>NTSA Services</option><option>TSC Services</option><option>E-Citizen Services</option>
                      <option>KUCCPS Applications</option><option>HELB/HEF Applications</option><option>KMTC Services</option><option>Payslips</option><option>Gmail Account Recovery</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us more about your needs..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full text-center py-3.5 text-base">💬 Send via WhatsApp</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}