
import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4A5D4E] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="brightness-0 invert mb-6 scale-90 origin-left">
              {LOGO}
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              A trauma-informed, anti-oppressive practice dedicated to healing at the intersections of identity, community, and wellness.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D9B99B] transition-colors">
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
              <a href="mailto:info@healingattheintersections.com" className="hover:text-[#D9B99B] transition-colors">
                <i className="fa-solid fa-envelope text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="serif text-xl font-bold mb-6">Practice</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services/individual" className="hover:text-white transition-colors">Individual Therapy</Link></li>
              <li><Link to="/services/engagements" className="hover:text-white transition-colors">Past Engagements</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="serif text-xl font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/resources" className="hover:text-white transition-colors">Mental Health Resources</Link></li>
              <li><Link to="/resources#books" className="hover:text-white transition-colors">Book Recommendations</Link></li>
              <li><Link to="/faq#pricing" className="hover:text-white transition-colors">Fee Structure</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Client Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="serif text-xl font-bold mb-6">Connect</h4>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 flex-shrink-0 text-[#D9B99B]"></i>
                <span>Available Online (Ontario-wide)<br />In-person by appointment (Toronto)</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope flex-shrink-0 text-[#D9B99B]"></i>
                <a href="mailto:info@healingattheintersections.com" className="hover:text-white">info@healingattheintersections.com</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} Healing at the Intersections. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
