// ============================================================
//  HERO SECTION COMPONENT
//  – Full-screen landing panel
//  – Edit the text content directly below (eyebrow, title, etc.)
// ============================================================

import React from 'react';
import '../styles/Hero.css';

export default function Hero() {

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero">

      {/* Ambient glow circles (CSS ::before / ::after) */}
      <div className="hero-bg-circles" />

      {/* Decorative leaf art */}
      <span className="leaf-art tl">🌿</span>
      <span className="leaf-art br">🌿</span>
      <span className="leaf-art tr">🌺</span>

      {/* ── Main content ── */}
      <div className="hero-content">

        

        {/* Main title — EDIT: brand name */}
        <h1 className="hero-title">
          <em>Sandriyana</em><br />Estate
        </h1>

        {/* Tagline — EDIT: tagline text */}
        <div className="hero-subtitle">Where Nature Meets Luxury</div>

        {/* Short description — EDIT: description paragraph */}
        <p className="hero-desc">
          Premium tropical plants &amp; pure essential oils, cultivated with care
          in the lush heartlands of Sri Lanka. Bringing nature's finest into your home.
        </p>

        {/* CTA buttons */}
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo('plants')}>
            Explore Plants
          </button>
          <button className="btn-outline" onClick={() => scrollTo('oils')}>
            Essential Oils
          </button>
        </div>
      </div>

      {/* Scroll hint arrow */}
      <div className="scroll-hint">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 4v12M4 10l6 6 6-6"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Scroll
      </div>
    </section>
  );
}
