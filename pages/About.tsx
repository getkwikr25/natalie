
import React from 'react';
import { MONSTERA_HERO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="uppercase tracking-[0.2em] text-[#D9B99B] font-bold text-sm mb-4 block">The Practice</span>
            <h1 className="serif text-5xl md:text-6xl font-bold text-[#4A5D4E] mb-8 leading-tight">
              Healing happens at the intersections.
            </h1>
            <p className="text-xl text-[#333333]/80 leading-relaxed mb-6 font-light">
              Healing at the Intersections was born out of a need for therapy that doesn't just treat symptoms, but addresses the whole person within their unique social and cultural context.
            </p>
            <p className="text-lg text-[#333333]/70 leading-relaxed font-light">
              As a licensed therapist and trained facilitator, I bring my expertise and intersectional lens to help eradicate systemic harm and reimagine spaces for a more inclusive and liberating future.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" 
                 alt="Portrait placeholder" 
                 className="w-full h-full object-cover"
               />
             </div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 border-8 border-[#D9B99B] rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      <section className="bg-[#4A5D4E] py-24 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="serif text-4xl md:text-5xl font-bold mb-12 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="serif text-2xl font-bold text-[#D9B99B]">Culturally Affirming</h3>
              <p className="text-white/80 leading-relaxed">
                We provide compassionate, trauma-informed mental health services that empower Black and BIPOC individuals, couples, and families to live lives rooted in wellness.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="serif text-2xl font-bold text-[#D9B99B]">Safe Spaces</h3>
              <p className="text-white/80 leading-relaxed">
                We strive to co-create a safe, inclusive space where you can explore your unique challenges with skilled therapists who truly understand your experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section id="team" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="serif text-4xl md:text-5xl font-bold text-[#4A5D4E] mb-16 text-center">Our Therapists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Founder */}
          <div className="text-center group">
            <div className="aspect-square rounded-[40px] overflow-hidden mb-6 shadow-md group-hover:shadow-xl transition-shadow relative">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="Founder" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#4A5D4E]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="serif text-2xl font-bold text-[#4A5D4E]">Founder Name, MSW RSW</h3>
            <p className="text-[#D9B99B] font-bold uppercase tracking-widest text-xs mt-2">Clinical Director</p>
          </div>

          {/* Hiring card */}
          <div className="flex flex-col items-center justify-center p-12 border-4 border-dashed border-[#4A5D4E]/10 rounded-[40px] text-center bg-[#FDFBF7]">
            <div className="w-20 h-20 rounded-full bg-[#4A5D4E]/5 flex items-center justify-center mb-6">
              <span className="text-4xl text-[#4A5D4E]/20 font-bold">+</span>
            </div>
            <h3 className="serif text-2xl font-bold text-[#4A5D4E] mb-4">Join Our Team</h3>
            <p className="text-[#333333]/60 mb-6">We are currently looking for clinicians who share our passion for liberation-centered care.</p>
            <a href="mailto:info@healingattheintersections.com" className="text-[#D9B99B] font-bold hover:underline">View Opportunities</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
