
import React, { useState } from 'react';
import SpamProtection from '../components/SpamProtection';

const Events: React.FC = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState('');

  const upcomingEvents = [
    {
      id: 'workshop-1',
      title: "Self-Care & Work-Life Balance Workshop",
      date: "June 15, 2024",
      time: "6:00 PM — 8:00 PM EST",
      location: "Virtual (Zoom Link provided upon registration)",
      description: "A virtual healing circle focusing on anti-oppressive self-preservation strategies. Designed for healthcare workers, educators, and community organizers.",
      price: "Sliding Scale ($25 - $75)"
    },
    {
      id: 'group-1',
      title: "BIPOC Collective Healing Group",
      date: "September 2024",
      time: "Tuesdays, 6:30 PM — 8:00 PM",
      location: "Hybrid (In-person Toronto / Virtual)",
      description: "An 8-week structured therapeutic experience for adults navigating racial trauma and intergenerational resilience.",
      price: "Solidarity Rates Available"
    }
  ];

  const pastEvents = [
    {
      title: "Trauma-Informed Care Conference",
      org: "McMaster University",
      date: "November 2023",
      impact: "Keynote presentation on intersectional mental health frameworks."
    },
    {
      title: "Release and Restore Healing Circle",
      org: "Our Women’s Voices",
      date: "August 2023",
      impact: "Facilitated a community-led session for 40+ participants."
    },
    {
      title: "Youth Wellness Workshop Series",
      org: "Scarborough Arts",
      date: "May — June 2023",
      impact: "A 4-part series on mental wellness and creative expression."
    }
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) return;
    alert('Thank you for registering! We have received your inquiry and will be in touch with more details.');
  };

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <span className="uppercase tracking-[0.2em] text-[#D9B99B] font-bold text-sm mb-4 block">Community</span>
          <h1 className="serif text-5xl md:text-6xl font-bold text-[#4A5D4E] mb-8">Events & Groups.</h1>
          <p className="text-xl text-[#333333]/70 font-light max-w-3xl leading-relaxed">
            Healing happens in community. Join us for upcoming workshops, therapeutic groups, and public events centered on collective wellness and liberation.
          </p>
        </header>

        {/* Upcoming Events */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="serif text-3xl font-bold text-[#4A5D4E]">Upcoming Events</h2>
            <div className="h-px bg-[#4A5D4E]/10 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white p-8 md:p-10 rounded-[40px] border border-[#4A5D4E]/10 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="bg-[#A4B494]/10 text-[#4A5D4E] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">Registration Open</span>
                    <span className="text-[#D9B99B] font-bold text-sm">{event.price}</span>
                  </div>
                  <h3 className="serif text-3xl font-bold text-[#4A5D4E] mb-6 group-hover:text-[#D9B99B] transition-colors">{event.title}</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-[#333333]/70">
                      <i className="fa-solid fa-calendar-days text-xl text-[#D9B99B] w-6"></i>
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#333333]/70">
                      <i className="fa-solid fa-clock text-xl text-[#D9B99B] w-6"></i>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#333333]/70">
                      <i className="fa-solid fa-location-dot text-xl text-[#D9B99B] w-6"></i>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-[#333333]/70 leading-relaxed mb-8">
                    {event.description}
                  </p>
                </div>
                <button 
                  onClick={() => {
                    setSelectedEvent(event.title);
                    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-4 bg-transparent border-2 border-[#4A5D4E] text-[#4A5D4E] font-bold rounded-full hover:bg-[#4A5D4E] hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  Register Interest <i className="fa-solid fa-arrow-right text-sm"></i>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Registration Form */}
        <section id="register" className="mb-24 scroll-mt-24">
          <div className="bg-[#4A5D4E]/5 p-10 md:p-16 rounded-[60px] border border-[#4A5D4E]/10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="serif text-4xl font-bold text-[#4A5D4E] mb-4">Event Registration</h2>
                <p className="text-[#333333]/60 font-light">Please fill out the form below to secure your spot or express interest in our upcoming groups.</p>
              </div>
              
              <form onSubmit={handleRegister} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#4A5D4E] mb-2 uppercase tracking-widest">Full Name</label>
                    <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-[#4A5D4E]/10 focus:ring-2 focus:ring-[#D9B99B] focus:outline-none transition-all" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#4A5D4E] mb-2 uppercase tracking-widest">Email Address</label>
                    <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-white border border-[#4A5D4E]/10 focus:ring-2 focus:ring-[#D9B99B] focus:outline-none transition-all" placeholder="email@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#4A5D4E] mb-2 uppercase tracking-widest">Select Event</label>
                  <select 
                    required 
                    value={selectedEvent}
                    onChange={(e) => setSelectedEvent(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-[#4A5D4E]/10 focus:ring-2 focus:ring-[#D9B99B] focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="">Choose an upcoming event</option>
                    {upcomingEvents.map(e => <option key={e.id} value={e.title}>{e.title}</option>)}
                    <option value="General Inquiry">General Event Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#4A5D4E] mb-2 uppercase tracking-widest">Notes or Accessibility Needs</label>
                  <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-white border border-[#4A5D4E]/10 focus:ring-2 focus:ring-[#D9B99B] focus:outline-none transition-all" placeholder="Tell us more about your interests or any specific needs you have."></textarea>
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
                    Complete Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="serif text-3xl font-bold text-[#4A5D4E]">Past Impact</h2>
            <div className="h-px bg-[#4A5D4E]/10 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-[#4A5D4E]/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#D9B99B] font-bold text-xs uppercase tracking-widest mb-4">
                    <i className="fa-solid fa-circle-check"></i> {event.date}
                  </div>
                  <h3 className="serif text-xl font-bold text-[#4A5D4E] mb-2">{event.title}</h3>
                  <div className="text-xs font-bold text-[#4A5D4E]/40 mb-4 uppercase">{event.org}</div>
                  <p className="text-[#333333]/60 text-sm leading-relaxed">
                    {event.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <div className="inline-flex items-center gap-3 p-6 bg-[#A4B494]/10 rounded-full text-[#4A5D4E] font-medium">
               <i className="fa-solid fa-users text-2xl text-[#D9B99B]"></i>
               <span>Over 1,500+ lives impacted through community workshops and groups since 2020.</span>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
