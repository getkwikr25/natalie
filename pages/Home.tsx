
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MONSTERA_HERO } from '../constants';
import SpamProtection from '../components/SpamProtection';

const Home: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const videoOrigin = typeof window !== 'undefined' ? window.location.origin : '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) return;
    alert('Thank you for subscribing!');
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={MONSTERA_HERO}
            alt="Monstera Leaves" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-[#4A5D4E] leading-[1.1] mb-6">
              Holistic Healing <br />
              <span className="italic font-normal">at the Intersections.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#333333]/80 mb-10 leading-relaxed font-light">
              Transforming systems holistically through healing, coaching, and consultation. A space designed with your growth and collective liberation in mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-[#4A5D4E] text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all text-center"
              >
                Schedule a Consult
              </Link>
              <Link 
                to="/services" 
                className="bg-white/80 backdrop-blur-sm border border-[#4A5D4E]/20 text-[#4A5D4E] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#FDFBF7] transition-all text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Video Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="uppercase tracking-[0.2em] text-[#D9B99B] font-bold text-sm mb-4 block">Meet Natalie</span>
              <h2 className="serif text-4xl md:text-5xl font-bold text-[#4A5D4E] mb-8 leading-tight">
                A personal introduction to our practice.
              </h2>
              <p className="text-lg text-[#333333]/70 mb-8 leading-relaxed font-light">
                Healing is a deeply personal journey. In this video, I share my philosophy, the modalities I use, and what you can expect when we work together. My goal is to help you feel grounded and safe before we even meet.
              </p>
              <div className="flex items-center gap-4 text-[#4A5D4E]">
                <div className="w-12 h-12 rounded-full bg-[#A4B494]/10 flex items-center justify-center">
                  <i className="fa-solid fa-heart text-xl"></i>
                </div>
                <span className="font-medium italic">Rooted in liberation and collective care.</span>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl bg-black border-8 border-white group">
                {!showVideo ? (
                  <div 
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1516307362420-9da1153a6372?q=80&w=2070&auto=format&fit=crop" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                      alt="Intro Video Thumbnail"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                    <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-all group-hover:scale-110">
                      <i className="fa-solid fa-play text-2xl text-[#4A5D4E] ml-1"></i>
                    </div>
                  </div>
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&origin=${videoOrigin}&enablejsapi=1`}
                    title="Introduction Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Support Section */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-[#D9B99B] font-bold text-sm mb-4 block">Specializations</span>
            <h2 className="serif text-4xl md:text-5xl font-bold text-[#4A5D4E]">Areas of Support</h2>
            <p className="mt-4 text-[#333333]/60 max-w-2xl mx-auto text-lg font-light">
              We provide specialized, trauma-informed care for individuals navigating complex life experiences, 
              rooted in an understanding of systemic and personal intersections.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Anxiety & Depression",
              "Racial Identity & Trauma",
              "Intergenerational Trauma",
              "Life Transitions",
              "Grief & Loss",
              "Gender & Sexuality",
              "Burnout & Stress",
              "Relationships"
            ].map((title, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-[#4A5D4E]/5 flex flex-col items-center justify-center text-center min-h-[100px]">
                <h3 className="serif text-lg font-bold text-[#4A5D4E] leading-snug">{title}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/services" className="bg-[#4A5D4E] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-3">
              Learn more about our services <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter/Contact Mini Section */}
      <section className="py-24 bg-[#4A5D4E] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 50 Q 25 40 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="0.1" />
           </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="serif text-4xl font-bold mb-6">Stay Connected.</h2>
          <p className="text-xl text-white/80 mb-12 font-light">
            Receive updates on upcoming groups, new workshops, and resources for collective healing.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                required
                placeholder="Your email address"
                className="flex-grow px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#D9B99B] transition-all"
              />
              <button 
                type="submit"
                disabled={!isVerified}
                className={`px-10 py-4 rounded-full font-bold transition-all ${
                  isVerified 
                    ? 'bg-[#D9B99B] text-[#4A5D4E] hover:bg-white' 
                    : 'bg-white/20 text-white/50 cursor-not-allowed'
                }`}
              >
                Subscribe
              </button>
            </div>
            <SpamProtection 
              onVerify={setIsVerified} 
              theme="dark" 
              className="mx-auto" 
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
