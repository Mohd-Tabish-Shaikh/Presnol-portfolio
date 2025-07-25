
import React, { useEffect, useState } from 'react';
import hamburger from '../../assets/hamburger.svg';
import close from '../../assets/close.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when the menu is open
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when the menu is closed
    }
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }
    setIsOpen(false); // Close the menu after scrolling
  };

  return (
    <>
      <nav className="fixed  pr-10 z-50 top-5 right-[-10px] sm:top-4 sm:right-5">
        <button onClick={toggle}>
          {isOpen ? (
            <div className="h-14 w-14 p-3 bg-[rgb(158,157,150)] rounded-full">
              <img src={close} alt="" className="h-[100%] w-[100%]" />
            </div>
          ) : (
            <div className="h-14 w-14 p-3 bg-[rgb(158,157,150)] rounded-full">
              <img src={hamburger} alt="" className="h-[100%] w-[100%]" />
            </div>
          )}
        </button>
      </nav>

      {/* Menu */}
      <div
        className={`fixed inset-0 dancing-script z-20 flex flex-col justify-center items-center bg-black text-white text-6xl transition-all duration-300 ${
          isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
        style={{ transition: 'transform 0.8s ease-in-out' }}
      >
        <ul className="flex flex-col gap-7">
          <li>
            <button onClick={() => scrollToSection('/')}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('project')}>Project</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
