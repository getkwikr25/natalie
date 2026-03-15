
import React from 'react';

const Resources: React.FC = () => {
  const books = [
    { title: "My Grandmother's Hands", author: "Resmaa Menakem", desc: "Racialized trauma and the pathway to somatic healing." },
    { title: "The Body Keeps the Score", author: "Bessel van der Kolk", desc: "Brain, mind, and body in the healing of trauma." },
    { title: "Care Work: Dreaming Disability Justice", author: "Leah Lakshmi Piepzna-Samarasinha", desc: "Building community care beyond systemic barriers." }
  ];

  const videoOrigin = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <span className="uppercase tracking-[0.2em] text-[#D9B99B] font-bold text-sm mb-4 block">Knowledge Share</span>
          <h1 className="serif text-5xl md:text-6xl font-bold text-[#4A5D4E] mb-8">Resources.</h1>
          <p className="text-xl text-[#333333]/70 font-light max-w-3xl leading-relaxed">
            Curated materials for your continued growth and healing. This library is updated regularly with links, readings, and community tools.
          </p>
        </header>

        {/* Mental Health Links */}
        <section className="mb-24">
          <h2 className="serif text-3xl font-bold text-[#4A5D4E] mb-12 flex items-center gap-4">
             <i className="fa-solid fa-heart text-[#D9B99B]"></i> Mental Health Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="#" className="group p-8 bg-white border border-[#4A5D4E]/10 rounded-3xl hover:border-[#D9B99B] transition-all shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="serif text-2xl font-bold text-[#4A5D4E]">Crisis Support</h3>
                <i className="fa-solid fa-arrow-up-right-from-square text-lg text-[#4A5D4E]/20 group-hover:text-[#D9B99B]"></i>
              </div>
              <p className="text-[#333333]/70 mb-4">Immediate help lines for crisis support available 24/7 across Canada.</p>
              <span className="text-[#D9B99B] font-bold">Learn more</span>
            </a>
            <a href="#" className="group p-8 bg-white border border-[#4A5D4E]/10 rounded-3xl hover:border-[#D9B99B] transition-all shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="serif text-2xl font-bold text-[#4A5D4E]">Affordable Care</h3>
                <i className="fa-solid fa-arrow-up-right-from-square text-lg text-[#4A5D4E]/20 group-hover:text-[#D9B99B]"></i>
              </div>
              <p className="text-[#333333]/70 mb-4">A list of community-based clinics and sliding scale services in Toronto.</p>
              <span className="text-[#D9B99B] font-bold">View List</span>
            </a>
          </div>
        </section>

        {/* Featured Video Section */}
        <section className="mb-24">
          <h2 className="serif text-3xl font-bold text-[#4A5D4E] mb-12 flex items-center gap-4">
             <i className="fa-solid fa-circle-play text-[#D9B99B]"></i> Featured Video Resource
          </h2>
          <div className="bg-white p-6 md:p-10 rounded-[40px] border border-[#4A5D4E]/10 shadow-sm overflow-hidden">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl mb-8 bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube-nocookie.com/embed/nP_FMWrVgm8?start=52&origin=${videoOrigin}&enablejsapi=1`}
                  title="What is Intersectionality?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="text-center">
                <h3 className="serif text-2xl font-bold text-[#4A5D4E] mb-4">Understanding Intersectionality</h3>
                <p className="text-lg text-[#333333]/70 font-light leading-relaxed max-w-2xl mx-auto">
                  Intersectionality is a foundational concept for our practice. This video explores how various social identities—such as race, gender, and class—overlap to create unique experiences of discrimination and privilege.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Book Recommendations */}
        <section id="books" className="mb-24">
          <h2 className="serif text-3xl font-bold text-[#4A5D4E] mb-12 flex items-center gap-4">
             <i className="fa-solid fa-book-open text-[#D9B99B]"></i> Book Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {books.map(book => (
              <div key={book.title} className="flex flex-col">
                <div className="aspect-[2/3] bg-[#4A5D4E]/5 rounded-2xl mb-6 border border-[#4A5D4E]/10 flex items-center justify-center p-8 text-center italic text-[#4A5D4E]/40 font-serif">
                   Book Cover Placeholder
                </div>
                <h3 className="serif text-xl font-bold text-[#4A5D4E]">{book.title}</h3>
                <p className="text-[#D9B99B] font-bold text-sm mb-4">{book.author}</p>
                <p className="text-[#333333]/60 text-sm leading-relaxed">{book.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Anti-Oppressive Fee Structure PDF Link Section */}
        <section id="fees" className="p-12 md:p-20 bg-[#FDFBF7] border-4 border-[#4A5D4E]/5 rounded-[60px]">
           <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="serif text-4xl font-bold text-[#4A5D4E] mb-8 leading-tight">Anti-Oppressive Fee Structure</h2>
                <p className="text-lg text-[#333333]/70 mb-8 leading-relaxed">
                  We believe that financial barriers shouldn't prevent access to quality mental health care. Our fee model is based on redistribution and solidarity.
                </p>
                <button className="flex items-center gap-3 bg-[#D9B99B] text-[#4A5D4E] px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all">
                  <i className="fa-solid fa-download"></i>
                  Download Full Fee Chart (PDF)
                </button>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-[#4A5D4E]/5 rotate-2 scale-95 hover:rotate-0 transition-transform duration-500">
                   <div className="serif text-2xl font-bold text-center border-b border-[#4A5D4E]/10 pb-6 mb-6">Fee Chart Preview</div>
                   <div className="space-y-4 text-sm">
                      <div className="flex justify-between font-bold border-b border-[#4A5D4E]/5 pb-2"><span>Redistributor</span> <span>$215+</span></div>
                      <div className="flex justify-between font-bold border-b border-[#4A5D4E]/5 pb-2"><span>Sustainer</span> <span>$165</span></div>
                      <div className="flex justify-between font-bold border-b border-[#4A5D4E]/5 pb-2"><span>Solidarity</span> <span>$100-140</span></div>
                      <div className="flex justify-between font-bold"><span>Reparation</span> <span>$100-</span></div>
                   </div>
                   <div className="mt-8 pt-6 border-t border-[#4A5D4E]/10 text-xs text-center text-[#333333]/40">
                      Healing at the Intersections &copy;
                   </div>
                </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;
