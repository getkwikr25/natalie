
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LOGO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    { 
      label: 'About', 
      path: '/about'
    },
    { 
      label: 'Services', 
      path: '/services',
      dropdown: [
        { label: 'Individual Therapy', path: '/services/individual' },
        { label: 'Group Therapy', path: '/services' },
        { label: 'Public Speaking', path: '/services/speaking' },
        { label: 'Past Engagements', path: '/services/engagements' }
      ]
    },
    { label: 'Events', path: '/events' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Journal', path: '/journal' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-[#4A5D4E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0">
            {LOGO}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  className="flex items-center text-[#4A5D4E] hover:text-[#D9B99B] font-medium transition-colors"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                >
                  {item.path ? <Link to={item.path}>{item.label}</Link> : item.label}
                  {item.dropdown && <i className="fa-solid fa-chevron-down ml-1 text-[10px]"></i>}
                </button>

                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg border border-[#4A5D4E]/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block px-4 py-3 text-sm text-[#4A5D4E] hover:bg-[#FDFBF7] hover:text-[#D9B99B] transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#4A5D4E] hover:text-[#D9B99B] transition-colors"
            >
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
            <Link 
              to="/contact" 
              className="bg-[#4A5D4E] text-white px-6 py-2.5 rounded-full hover:bg-[#3D4D41] transition-all shadow-md hover:shadow-lg text-sm font-semibold"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#4A5D4E]"
            >
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#4A5D4E] p-2"
            >
              {isOpen ? <i className="fa-solid fa-xmark text-xl"></i> : <i className="fa-solid fa-bars text-xl"></i>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-t border-[#4A5D4E]/10 pb-6 shadow-2xl">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="font-semibold text-[#4A5D4E] mb-2">{item.label}</div>
                {item.dropdown ? (
                  <div className="pl-4 space-y-2 border-l border-[#4A5D4E]/20">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block text-[#4A5D4E]/70 text-sm hover:text-[#D9B99B]"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={item.path || '#'}
                    className="block text-[#4A5D4E]/70 text-sm hover:text-[#D9B99B]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link 
              to="/contact" 
              className="block bg-[#4A5D4E] text-white text-center py-3 rounded-full mt-4 font-bold"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
