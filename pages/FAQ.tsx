
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Accordion from '../components/Accordion';

const FAQ: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const generalFaqs = [
    {
      question: "What is your approach to therapy?",
      answer: "My approach is relational, trauma-informed, and anti-racist. I believe that healing is not just individual but collective. We explore how systems of power and identity (race, gender, ability, etc.) impact your mental wellness, while building practical tools for grounded living."
    },
    {
      question: "Do you offer in-person or virtual sessions?",
      answer: "I primarily offer virtual sessions for clients residing across Ontario. I also have limited availability for in-person appointments at my downtown Toronto office. Virtual therapy is conducted via a secure, HIPAA-compliant platform."
    },
    {
      question: "How long are sessions?",
      answer: "Standard psychotherapy sessions are 50 minutes. We can also discuss 75-minute sessions for intensive trauma work or consultations if needed."
    }
  ];

  const pricingFaqs = [
    {
      question: "How much does therapy cost?",
      answer: (
        <div className="space-y-4">
          <p>We use an anti-oppressive fee structure based on a sliding scale. This model acknowledges systemic economic inequality and allows us to provide accessible care while remaining sustainable.</p>
          <div className="bg-[#4A5D4E]/5 p-6 rounded-2xl border border-[#4A5D4E]/10">
            <h4 className="font-bold text-[#4A5D4E] mb-2 uppercase text-xs tracking-widest">Pricing Tiers</h4>
            <ul className="space-y-3">
              <li className="flex justify-between"><span>Redistributor Rate</span> <span className="font-bold">$215+</span></li>
              <li className="flex justify-between"><span>Sustainer Rate (Standard)</span> <span className="font-bold">$165</span></li>
              <li className="flex justify-between"><span>Solidarity Rate</span> <span className="font-bold">$100 - $140</span></li>
              <li className="flex justify-between"><span>Reparation Rate</span> <span className="font-bold">Contact Us</span></li>
            </ul>
          </div>
          <p className="mt-4">
            <Link to="/resources#fees" className="text-[#D9B99B] font-bold flex items-center gap-2 hover:underline">
              View the full Anti-Oppressive Fee Chart <i className="fa-solid fa-arrow-right text-sm"></i>
            </Link>
          </p>
        </div>
      )
    },
    {
      question: "Do you accept insurance?",
      answer: "Psychotherapy services are not covered under provincial health plans (OHIP). However, most extended health benefits (private insurance) cover services provided by Registered Psychotherapists or Social Workers. Please check with your provider to see if you are eligible for reimbursement."
    }
  ];

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <span className="uppercase tracking-[0.2em] text-[#D9B99B] font-bold text-sm mb-4 block">Information</span>
          <h1 className="serif text-5xl md:text-6xl font-bold text-[#4A5D4E] mb-8">Frequently Asked Questions.</h1>
          <p className="text-xl text-[#333333]/70 font-light leading-relaxed">
            Finding the right fit for therapy can be a journey. Here are answers to some common questions to help you get started.
          </p>
        </header>

        <section className="mb-20">
          <h2 className="serif text-3xl font-bold text-[#4A5D4E] mb-8 pb-4 border-b border-[#4A5D4E]/10">General Questions</h2>
          <div className="divide-y divide-[#4A5D4E]/10">
            {generalFaqs.map((faq, i) => (
              <Accordion key={i} title={faq.question}>
                {faq.answer}
              </Accordion>
            ))}
          </div>
        </section>

        <section id="pricing">
          <h2 className="serif text-3xl font-bold text-[#4A5D4E] mb-8 pb-4 border-b border-[#4A5D4E]/10">Pricing & Insurance</h2>
          <div className="divide-y divide-[#4A5D4E]/10">
            {pricingFaqs.map((faq, i) => (
              <Accordion key={i} title={faq.question}>
                {faq.answer}
              </Accordion>
            ))}
          </div>
        </section>

        <section className="mt-20 p-12 bg-[#D9B99B]/10 rounded-[40px] border border-[#D9B99B]/20 text-center">
          <h3 className="serif text-3xl font-bold text-[#4A5D4E] mb-6">Still have questions?</h3>
          <p className="text-lg text-[#333333]/70 mb-8">
            We are happy to chat and clear up any concerns during a free 15-minute consultation.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-[#4A5D4E] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-[#3D4D41] transition-all"
          >
            Reach Out Today
          </Link>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
