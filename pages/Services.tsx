
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SpamProtection from '../components/SpamProtection';

const Services: React.FC = () => {
  const { type } = useParams();
  const [isVerified, setIsVerified] = useState(false);
  const [formData, setFormData] = useState({
    topics: [] as string[]
  });

  const toggleTopic = (topic: string) => {
    setFormData(prev => ({
      ...prev,
      topics: prev.topics.includes(topic) 
        ? prev.topics.filter(t => t !== topic) 
        : [...prev.topics, topic]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) return;
    alert('Thank you for your inquiry! We will be in touch soon.');
  };

  if (type === 'speaking') {
    return (
      <div className="pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-20">
            <span className="uppercase tracking-[0.2em] text-[#D9B99B] font-bold text-sm mb-4 block">Voice for Change</span>
            <h1 className="serif text-5xl md:text-6xl font-bold text-[#4A5D4E] mb-8">Public Speaking.</h1>
            <p className="text-xl text-[#333333]/70 font-light max-w-3xl leading-relaxed">
              Public speaking engagements are offered to professional conferences, meetings, or events looking for keynote speakers and panelists who can bridge the gap between mental wellness and systemic social justice.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <section>
                <h2 className="serif text-3xl font-bold text-[#4A5D4E] mb-6">Engagement Expertise</h2>
                <p className="text-lg text-[#333333]/70 leading-relaxed mb-8">
                  Natalie's speaking roles focus on holding complexity with grace, offering nuanced perspectives on trauma, identity, and collective healing.
                </p>
                <div className="space-y-6">
                  {[
                    "Anti-racist and anti-oppressive approaches to healthcare",
                    "Trauma-informed care and organizational wellness",
                    "Mental health and wellness through an intersectional lens",
                    "Self-care and work-life balance for professionals"
                  ].map((topic, i) => (
                    <div key={i} className="flex gap-4 items-start p-6 bg-white border border-[#4A5D4E]/10 rounded-3xl shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-[#D9B99B]/10 flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-microphone text-[#D9B99B]"></i>
                      </div>
                      <span className="text-lg text-[#4A5D4E] leading-snug">{topic}</span>
                    </div>
                  ))}
                </div>
              </section>

              <div className="p-10 bg-[#4A5D4E] text-white rounded-[40px] shadow-2xl">
                <h3 className="serif text-2xl font-bold mb-4">Past Speaking Topics</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6 italic">
                  "I strive to co-create a space where we can explore unique challenges with skilled insight that truly understands our collective experiences."
                </p>
                <div className="h-px bg-white/20 w-full mb-6"></div>
                <p className="text-sm font-light leading-relaxed">
                  Engagements range from intimate panel discussions to keynote sessions for thousands.
                </p>
              </div>
            </div>

            {/* Speaking Request Form */}
            <div className="bg-white p-10 md:p-12 rounded-[50px] shadow-2xl border border-[#4A5D4E]/5">
              <h2 className="serif text-3xl font-bold text-[#4A5D4E] mb-2 text-center">Inquiry Form</h2>
              <p className="text-center text-[#333333]/50 mb-10 text-sm">Please send Natalie an email or fill out the form if you are seeking a speaker for your event!</p>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#4A5D4E]/70 mb-2">Full Name</label>
                    <input required type="text" className="w-full px-5 py-4 rounded-2xl bg-[#F4F5F7] border-transparent focus:bg-white focus:border-[#4A5D4E]/20 focus:ring-0 transition-all text-[#4A5D4E]" placeholder="Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#4A5D4E]/70 mb-2">Email</label>
                    <input required type="email" className="w-full px-5 py-4 rounded-2xl bg-[#F4F5F7] border-transparent focus:bg-white focus:border-[#4A5D4E]/20 focus:ring-0 transition-all text-[#4A5D4E]" placeholder="Email" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#4A5D4E]/70 mb-2">Title/Role</label>
                    <input type="text" className="w-full px-5 py-4 rounded-2xl bg-[#F4F5F7] border-transparent focus:bg-white focus:border-[#4A5D4E]/20 focus:ring-0 transition-all text-[#4A5D4E]" placeholder="Role" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#4A5D4E]/70 mb-2">Organization/Company Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-2xl bg-[#F4F5F7] border-transparent focus:bg-white focus:border-[#4A5D4E]/20 focus:ring-0 transition-all text-[#4A5D4E]" placeholder="Organization" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#4A5D4E]/70 mb-2">The Organization is predominately?</label>
                  <select required className="w-full px-5 py-4 rounded-2xl bg-[#F4F5F7] border-transparent focus:bg-white focus:border-[#4A5D4E]/20 focus:ring-0 transition-all text-[#4A5D4E] appearance-none cursor-pointer">
                    <option value="">Select an option</option>
                    <option value="black-indigenous">Black or Indigenous owned</option>
                    <option value="white-owned">white-owned</option>
                    <option value="poc-owned">POC Owned</option>
                  </select>
                  <p className="mt-2 text-[10px] text-red-400 font-medium">* This question is required</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#4A5D4E]/70 mb-2">Available Budget</label>
                    <select className="w-full px-5 py-4 rounded-2xl bg-[#F4F5F7] border-transparent focus:bg-white focus:border-[#4A5D4E]/20 focus:ring-0 transition-all text-[#4A5D4E] appearance-none cursor-pointer">
                      <option value="">What is your budget?</option>
                      <option value="1000-2500">$1,000-$2,500</option>
                      <option value="2500-5000">$2,500- $5,000</option>
                      <option value="5000-7500">$5,000-$7,500</option>
                      <option value="7500-10000">$7,500-$10,000</option>
                      <option value="10000-15000">$10,000-$15,000</option>
                      <option value="15000+">$15,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#4A5D4E]/70 mb-2">Audience Size</label>
                    <input type="text" className="w-full px-5 py-4 rounded-2xl bg-[#F4F5F7] border-transparent focus:bg-white focus:border-[#4A5D4E]/20 focus:ring-0 transition-all text-[#4A5D4E]" placeholder="Est. Audience" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#4A5D4E]/70 mb-2">Event Date</label>
                    <div className="relative">
                      <input type="date" className="w-full px-5 py-4 rounded-2xl bg-[#F4F5F7] border-transparent focus:bg-white focus:border-[#4A5D4E]/20 focus:ring-0 transition-all text-[#4A5D4E] pr-12" />
                      <i className="fa-solid fa-calendar-days absolute right-4 top-1/2 -translate-y-1/2 text-[#4A5D4E]/30 pointer-events-none"></i>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#4A5D4E]/70 mb-2">In Person or Virtual Engagement</label>
                    <select className="w-full px-5 py-4 rounded-2xl bg-[#F4F5F7] border-transparent focus:bg-white focus:border-[#4A5D4E]/20 focus:ring-0 transition-all text-[#4A5D4E] appearance-none cursor-pointer">
                      <option value="virtual">Virtual</option>
                      <option value="in-person">In-Person</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#4A5D4E]/70 mb-4">What topics would you like me to speak about?</label>
                  <p className="text-xs text-[#4A5D4E]/50 mb-4">Choose one or more of the options</p>
                  <div className="space-y-4">
                    {[
                      "Anti-Racism",
                      "Healing Racial Trauma",
                      "Mental Health",
                      "Relationships/Non-Monogamy",
                      "Other"
                    ].map(topic => (
                      <div 
                        key={topic} 
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={() => toggleTopic(topic)}
                      >
                        <div className="w-6 h-6 flex items-center justify-center border-2 border-[#4A5D4E]/20 rounded-md group-hover:border-[#4A5D4E]/40 transition-colors">
                          {formData.topics.includes(topic) && <div className="w-3 h-3 bg-[#4A5D4E] rounded-sm"></div>}
                        </div>
                        <span className="text-[#4A5D4E] text-sm md:text-base">{topic}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-[10px] text-red-400 font-medium">* This question is required</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#4A5D4E]/70 mb-2">How did you hear about my work?</label>
                  <select className="w-full px-5 py-4 rounded-2xl bg-[#FDFBF7] border-[#4A5D4E]/10 focus:ring-2 focus:ring-[#D9B99B] focus:outline-none appearance-none cursor-pointer">
                    <option value="">Select an answer</option>
                    <option value="client">Client Referral</option>
                    <option value="industry">Industry Referral</option>
                    <option value="website">Personal Website</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="google">Google</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#4A5D4E]/70 mb-2">Additional Comments</label>
                  <textarea rows={4} className="w-full px-5 py-4 rounded-2xl bg-[#F4F5F7] border-transparent focus:bg-white focus:border-[#4A5D4E]/20 focus:ring-0 transition-all text-[#4A5D4E]" placeholder="Share more details about your event..."></textarea>
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
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'engagements') {
    const engagements = [
      {
        org: "Canada Broadcasting Company (CBC)",
        role: "Panelist for 'Pandemic and Beyond: Mental Health Matters', Guest Speaker on 'Black and Vulnerable' Web Series",
        year: "2021-2022"
      },
      {
        org: "McMaster University",
        role: "Speaker at the Annual Trauma-Informed Care Conference",
        year: "2020"
      },
      {
        org: "Brain Injury Canada",
        role: "Speaker at the Annual Brain Injury Canada Conference",
        year: "2021"
      },
      {
        org: "Neurological Health Charities Canada",
        role: "Workshop Facilitation for Staff",
        year: "2021"
      },
      {
        org: "Wilfrid Laurier University",
        role: "Workshop Facilitation for Students",
        year: "2022"
      },
      {
        org: "Our Women’s Voices",
        role: "Panelist for 'Release and Restore' Healing Circle",
        year: "2022"
      },
      {
        org: "Scarborough Arts",
        role: "Youth Workshop Facilitation",
        year: "2022"
      }
    ];

    return (
      <div className="pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-20">
            <span className="uppercase tracking-[0.2em] text-[#D9B99B] font-bold text-sm mb-4 block">Community & Corporate</span>
            <h1 className="serif text-5xl md:text-6xl font-bold text-[#4A5D4E] mb-8">Past Engagements.</h1>
            <p className="text-xl text-[#333333]/70 font-light max-w-3xl leading-relaxed">
              Transforming systems through tailored workshops, speaking engagements, and organizational consultation. We help communities create truly inclusive and healing spaces.
            </p>
          </header>

          <section className="mb-24">
            <h2 className="serif text-3xl font-bold text-[#4A5D4E] mb-12">Partnerships & Speaking Roles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engagements.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[30px] border border-[#4A5D4E]/10 flex flex-col justify-between hover:shadow-xl transition-all group">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="serif text-2xl font-bold text-[#4A5D4E] group-hover:text-[#D9B99B] transition-colors">{item.org}</h3>
                      <span className="text-xs font-bold text-[#D9B99B] bg-[#D9B99B]/10 px-3 py-1 rounded-full">{item.year}</span>
                    </div>
                    <p className="text-[#333333]/70 font-light leading-relaxed mb-4">{item.role}</p>
                  </div>
                  <div className="w-10 h-1 bg-[#D9B99B]/30 rounded-full"></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-24">
            <h2 className="serif text-3xl font-bold text-[#4A5D4E] mb-12">Kind Words</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-[#D9B99B]/5 p-10 rounded-[40px] relative">
                <i className="fa-solid fa-star absolute top-8 right-8 text-5xl text-[#D9B99B]/20"></i>
                <p className="text-xl italic text-[#4A5D4E] mb-8 leading-relaxed">
                  "The workshop provided an incredibly thoughtful and nuanced lens on trauma that our team had been missing. It was transformative for our organizational culture."
                </p>
                <div className="font-bold text-[#4A5D4E]">— Workshop Attendee, HR Lead</div>
              </div>
              <div className="bg-[#4A5D4E]/5 p-10 rounded-[40px] relative">
                <i className="fa-solid fa-star absolute top-8 right-8 text-5xl text-[#4A5D4E]/20"></i>
                <p className="text-xl italic text-[#4A5D4E] mb-8 leading-relaxed">
                  "One of the few facilitators who can hold complexity with such grace. I left feeling challenged and inspired to do better for my community."
                </p>
                <div className="font-bold text-[#4A5D4E]">— Community Partner</div>
              </div>
            </div>
          </section>

          <div className="bg-[#4A5D4E] text-white p-16 rounded-[60px] text-center">
            <h2 className="serif text-4xl font-bold mb-8">Work with us.</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
              Interested in booking a workshop or consultation for your team? Let's discuss how we can support your organizational growth.
            </p>
            <a href="mailto:info@healingattheintersections.com" className="bg-[#D9B99B] text-[#4A5D4E] px-12 py-5 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl inline-block">
              Inquire About Engagements
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Individual Therapy */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-32">
           <div className="lg:w-1/2 lg:sticky lg:top-28">
              <span className="uppercase tracking-[0.2em] text-[#D9B99B] font-bold text-sm mb-4 block">Therapy (18+)</span>
              <h1 className="serif text-5xl md:text-6xl font-bold text-[#4A5D4E] mb-8">Individual Support.</h1>
              <p className="text-xl text-[#333333]/70 font-light mb-8 leading-relaxed">
                Appointments are offered virtually, by phone, or in-person. My approach is person-centred, placing your specific needs and lived experiences at the heart of our work.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-6 bg-white border border-[#4A5D4E]/10 rounded-3xl text-center">
                  <i className="fa-solid fa-phone text-2xl text-[#D9B99B] mb-2"></i>
                  <span className="text-sm font-bold text-[#4A5D4E] block">Virtual & Phone</span>
                </div>
                <div className="p-6 bg-white border border-[#4A5D4E]/10 rounded-3xl text-center">
                  <i className="fa-solid fa-users text-2xl text-[#D9B99B] mb-2"></i>
                  <span className="text-sm font-bold text-[#4A5D4E] block">In-Person</span>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1522071823991-b9671f903f7a?q=80&w=2070&auto=format&fit=crop" 
                alt="Safe therapeutic space" 
                className="rounded-[40px] shadow-2xl w-full h-[350px] object-cover"
              />
           </div>
           
           <div className="lg:w-1/2 space-y-20">
              <section>
                <h2 className="serif text-3xl font-bold text-[#4A5D4E] mb-8">Therapeutic Modalities</h2>
                <p className="text-[#333333]/70 mb-6 leading-relaxed">We utilize a blend of evidence-based interventions tailored to your unique context:</p>
                <div className="space-y-4">
                  {[
                    "Cognitive Behavioral Therapy (CBT)", 
                    "Acceptance and Commitment Therapy (ACT)", 
                    "Narrative Therapy", 
                    "Mindfulness Based Therapies"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-4 p-4 bg-[#FDFBF7] rounded-2xl border border-[#4A5D4E]/5">
                      <div className="w-2 h-2 rounded-full bg-[#D9B99B]"></div>
                      <span className="text-lg font-medium text-[#4A5D4E]">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="serif text-3xl font-bold text-[#4A5D4E] mb-8">Areas of Support</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Anxiety, Depression, Bipolar Disorder",
                    "Stress Management & Burnout",
                    "Life Transitions & Personal Growth",
                    "Racism & Racial Identity",
                    "Gender Identity & Sexuality",
                    "Intergenerational & Lifespan Trauma",
                    "Grief & Loss",
                    "Relationship with Self and Others"
                  ].map(item => (
                    <div key={item} className="text-[#333333]/80 py-2 border-b border-[#4A5D4E]/10 text-lg">
                      {item}
                    </div>
                  ))}
                </div>
              </section>
           </div>
        </div>

        {/* Group Therapy & Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {/* Group Therapy */}
          <div className="p-12 bg-white rounded-[50px] border border-[#4A5D4E]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-[#A4B494]/10 rounded-2xl flex items-center justify-center mb-8">
                <i className="fa-solid fa-comment text-3xl text-[#4A5D4E]"></i>
              </div>
              <h2 className="serif text-3xl font-bold text-[#4A5D4E] mb-6">Group Therapy</h2>
              <p className="text-lg text-[#333333]/70 mb-8 leading-relaxed">
                Connect with others who share lived experiences. Group therapy (typically 6-12 people) is a collective healing space that is often more cost-effective.
              </p>
              <ul className="space-y-4 mb-10 text-[#4A5D4E]/80">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#D9B99B] rounded-full"></span> Shared lived experiences</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#D9B99B] rounded-full"></span> Healing as a collective</li>
              </ul>
            </div>
            <Link to="/contact?service=group" className="text-[#D9B99B] font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Inquire about Group Therapy <i className="fa-solid fa-arrow-right text-sm"></i>
            </Link>
          </div>

          {/* Workshops */}
          <div className="p-12 bg-[#FDFBF7] rounded-[50px] border border-[#4A5D4E]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-[#D9B99B]/10 rounded-2xl flex items-center justify-center mb-8">
                <i className="fa-solid fa-book-open text-3xl text-[#D9B99B]"></i>
              </div>
              <h2 className="serif text-3xl font-bold text-[#4A5D4E] mb-6">Workshops</h2>
              <p className="text-lg text-[#333333]/70 mb-8 leading-relaxed">
                Specialized sessions for academic institutions, community spaces, and professional organizations.
              </p>
              <div className="space-y-2 mb-10 text-[#333333]/80">
                <div className="font-bold text-sm uppercase tracking-widest text-[#D9B99B] mb-2">Past Topics</div>
                <p>Youth & Adult Mental Health • Trauma-Informed Care • Self-Care & Wellness • Grief & Loss</p>
              </div>
            </div>
            <Link to="/contact?service=workshop" className="text-[#4A5D4E] font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Host a Workshop Series <i className="fa-solid fa-arrow-right text-sm"></i>
            </Link>
          </div>
        </div>

        {/* Public Speaking Teaser */}
        <section className="bg-[#4A5D4E] text-white p-16 rounded-[60px] flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
             <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-8">
                <i className="fa-solid fa-microphone text-4xl text-[#D9B99B]"></i>
             </div>
             <h2 className="serif text-4xl font-bold mb-4">Public Speaking</h2>
             <p className="text-white/70 font-light leading-relaxed">
               Expert keynote speaking and panelist roles for professional conferences and community events.
             </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="font-bold text-[#D9B99B] mb-4">Core Expertise</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li>• Anti-racist approaches to healthcare</li>
                <li>• Trauma-informed organizational care</li>
                <li>• Work-life balance for clinicians</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg italic mb-6">"Bridging the gap between mental wellness and systemic social justice."</p>
              <Link to="/services/speaking" className="bg-[#D9B99B] text-[#4A5D4E] px-8 py-4 rounded-full font-bold text-center hover:bg-white transition-all">
                Inquire for your next event
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
