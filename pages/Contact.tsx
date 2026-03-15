
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SpamProtection from '../components/SpamProtection';

const Contact: React.FC = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [selectedService, setSelectedService] = useState('Individual Psychotherapy');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    if (service === 'group') {
      setSelectedService('Group Therapy');
    } else if (service === 'workshop') {
      setSelectedService('Workshop / Speaking Inquiry');
    } else if (service === 'supervision') {
      setSelectedService('Clinical Supervision');
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) return;
    alert('Thank you for reaching out! We will get back to you within 48 business hours.');
  };

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 max-w-3xl">
          <span className="uppercase tracking-[0.2em] text-[#D9B99B] font-bold text-sm mb-4 block">Connect</span>
          <h1 className="serif text-5xl md:text-6xl font-bold text-[#4A5D4E] mb-8">Start your healing journey.</h1>
          <p className="text-xl text-[#333333]/70 font-light leading-relaxed">
            I offer a free 15-minute consultation to ensure we're a good fit. Please fill out the form below, and I'll get back to you within 48 business hours.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 md:p-12 rounded-[40px] shadow-xl border border-[#4A5D4E]/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-[#4A5D4E] mb-3 uppercase tracking-wider">Full Name</label>
                  <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-[#FDFBF7] border border-[#4A5D4E]/10 focus:ring-2 focus:ring-[#D9B99B] focus:outline-none transition-all" placeholder="Jordan Smith" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#4A5D4E] mb-3 uppercase tracking-wider">Email Address</label>
                  <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-[#FDFBF7] border border-[#4A5D4E]/10 focus:ring-2 focus:ring-[#D9B99B] focus:outline-none transition-all" placeholder="jordan@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#4A5D4E] mb-3 uppercase tracking-wider">Service of Interest</label>
                <div className="relative">
                  <select 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-[#FDFBF7] border border-[#4A5D4E]/10 focus:ring-2 focus:ring-[#D9B99B] focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="Individual Psychotherapy">Individual Psychotherapy</option>
                    <option value="Group Therapy">Group Therapy</option>
                    <option value="Workshop / Speaking Inquiry">Workshop / Speaking Inquiry</option>
                    <option value="Clinical Supervision">Clinical Supervision</option>
                    <option value="Other / General Inquiry">Other / General Inquiry</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                    <i className="fa-solid fa-chevron-down text-[#4A5D4E]/40"></i>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#4A5D4E] mb-3 uppercase tracking-wider">How can I help?</label>
                <textarea required rows={6} className="w-full px-6 py-4 rounded-2xl bg-[#FDFBF7] border border-[#4A5D4E]/10 focus:ring-2 focus:ring-[#D9B99B] focus:outline-none transition-all" placeholder="Briefly describe what brings you to therapy..."></textarea>
              </div>

              <div className="space-y-6">
                <SpamProtection onVerify={setIsVerified} />
                <button 
                  type="submit"
                  disabled={!isVerified}
                  className={`w-full py-5 rounded-full font-bold text-lg transition-all ${
                    isVerified 
                      ? 'bg-[#4A5D4E] text-white hover:shadow-2xl hover:bg-[#3D4D41]' 
                      : 'bg-[#4A5D4E]/20 text-white/50 cursor-not-allowed'
                  }`}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="lg:w-2/5 space-y-12">
            <div>
              <h3 className="serif text-3xl font-bold text-[#4A5D4E] mb-8">Details</h3>
              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-[#D9B99B]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-envelope text-2xl text-[#D9B99B]"></i>
                  </div>
                  <div>
                    <div className="font-bold text-[#4A5D4E]">Email</div>
                    <a href="mailto:info@healingattheintersections.com" className="text-[#333333]/70 hover:text-[#D9B99B] transition-colors">info@healingattheintersections.com</a>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-[#D9B99B]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-location-dot text-2xl text-[#D9B99B]"></i>
                  </div>
                  <div>
                    <div className="font-bold text-[#4A5D4E]">Location</div>
                    <p className="text-[#333333]/70">Ontario-wide (Virtual)<br />Toronto, ON (In-person)</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-[#D9B99B]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-calendar-days text-2xl text-[#D9B99B]"></i>
                  </div>
                  <div>
                    <div className="font-bold text-[#4A5D4E]">Availability</div>
                    <p className="text-[#333333]/70">Tuesday — Friday<br />10:00 AM — 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#4A5D4E]/5 rounded-[40px] border border-[#4A5D4E]/10">
               <h4 className="serif text-2xl font-bold text-[#4A5D4E] mb-4">Emergency Support</h4>
               <p className="text-[#333333]/60 text-sm leading-relaxed mb-6">
                 We are not a crisis service. If you are experiencing an emergency, please call 911 or go to your nearest emergency department.
               </p>
               <Link to="/resources" className="text-[#D9B99B] font-bold text-sm hover:underline">View Crisis Resources</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
