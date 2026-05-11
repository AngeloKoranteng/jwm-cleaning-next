'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav>
          <div className="logo-container">
            <a href="#about" onClick={closeMenu}>
                <Logo className="navbar-logo" />
            </a>
          </div>
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            {/* Using standard <a> because of ID scroll navigation */}
            <li><a href="#about" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>Over Ons</a></li>
            <li><a href="#services" onClick={closeMenu}>Diensten</a></li>
            <li><a href="#contact" className="btn-nav" onClick={closeMenu}>Contact</a></li>
          </ul>
          <button className={`hamburger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu} aria-label="Menu">
            <i className="fas fa-bars"></i>
          </button>
        </nav>
      </div>
    </header>
  );
}