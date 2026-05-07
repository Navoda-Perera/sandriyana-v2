// ============================================================
//  FOOTER COMPONENT
//  – 4-column grid: brand, collection, navigation, contact
//  – EDIT: social links, contact details below
// ============================================================

import React from 'react';
import '../styles/Footer.css';

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

// EDIT: social media links
const SOCIAL = [
  { label: 'f',  title: 'Facebook',  href: '#' },
  { label: 'ig', title: 'Instagram', href: '#' },
  { label: 'wa', title: 'WhatsApp',  href: 'https://wa.me/94XXXXXXXXX' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Brand */}
        <div className="footer-brand">
          <div style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.7rem', color: 'var(--gold-lt)', marginBottom: '0.3rem' }}>
            Sandriyana
          </div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.55rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '4px', textTransform: 'uppercase' }}>
            Estate · Botanical Collection
          </div>
          <p className="footer-desc">
            Cultivating nature's finest plants and essential oils in the heart of
            Sri Lanka. Quality, purity, and passion in every leaf and drop.
          </p>
        </div>

        {/* Collection links */}
        <div className="footer-col">
          <h4>Collection</h4>
          <ul>
            {['Aglonima Series','Sandriyana Series','Money Plant Gold','Thaliyodi','Essential Oils'].map((name) => (
              <li key={name}>
                <a href="#plants" onClick={(e) => { e.preventDefault(); scrollTo(name === 'Essential Oils' ? 'oils' : 'plants'); }}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation links */}
        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            {[['About Us','about'],['Our Plants','plants'],['Essential Oils','oils'],['Why Choose Us','why'],['Location','location']].map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact details — EDIT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@sandrianaestate.com">info@sandrianaestate.com</a></li>
            <li><a href="tel:+94XXXXXXXXX">+94 XX XXX XXXX</a></li>
            <li><a href="https://wa.me/94XXXXXXXXX" target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li><a href="https://sandrianaestate.com" target="_blank" rel="noreferrer">sandrianaestate.com</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-copy">
          © {new Date().getFullYear()} Sandriyana Estate. All rights reserved.
          · Crafted with 🌿 in Sri Lanka
        </div>
        <div className="footer-social">
          {SOCIAL.map(({ label, title, href }) => (
            <a key={title} href={href} className="social-btn" title={title} target="_blank" rel="noreferrer">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
