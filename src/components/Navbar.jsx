// ============================================================
//  NAVBAR COMPONENT
//  – Fixed top bar, transparent → solid on scroll
//  – Desktop links + hamburger mobile menu
// ============================================================

import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const NAV_ITEMS = [
  { label: 'About',         id: 'about'       },
  { label: 'Plants',        id: 'plants'      },
  { label: 'Cut Foliage',   id: 'cutfoliage'  },
  { label: 'Essential Oils',id: 'oils'        },
  { label: 'Why Us',        id: 'why'         },
  { label: 'Location',      id: 'location'    },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  // Detect scroll to switch navbar style
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Smooth-scroll helper
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Main bar ── */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>

        {/* Logo */}
        <div className="nav-logo" onClick={() => scrollTo('hero')}>
          <span className="logo-main">Sandriyana</span>
          <span className="logo-sub">Estate · Botanical Collection</span>
        </div>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger (mobile) */}
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── Mobile dropdown ── */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => { e.preventDefault(); scrollTo(id); }}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
