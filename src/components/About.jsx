// ============================================================
//  ABOUT SECTION COMPONENT
//  – Two-column layout: visual left, text right
//  – EDIT: paragraph text, stats, badge text below
// ============================================================

import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">

        {/* ── LEFT: Visual panel ── */}
        <div className="about-visual">
          <div className="about-accent-line" />

          <div className="about-img-frame">
            <span className="frame-leaf">🌿</span>
            <div className="frame-stat">
              <strong>11+</strong>
              <span>Plant Varieties</span>
            </div>
          </div>

          
        </div>

        {/* ── RIGHT: Text ── */}
        <div className="about-text">
          

          <h2 className="section-title">
            Rooted in <em>Passion</em>,<br />Grown with Purpose
          </h2>

          <p className="section-body">
            Sandriyana Estate was founded with a singular vision: to cultivate the most
            exquisite tropical plants and purest essential oils, making nature's finest
            accessible to all. Nestled in Sri Lanka's verdant countryside, our estate
            spans acres of carefully tended botanical gardens.
          </p>

          <p className="section-body">
            Every plant in our collection is hand-selected, nurtured without harmful
            chemicals, and delivered with the care and knowledge that only true plant
            lovers can provide. Our essential oils are steam-distilled or cold-pressed
            on-site, preserving every precious drop of botanical potency.
          </p>

          {/* Stats row */}
          <div className="stat-row">
            <div className="stat"><strong>11+</strong><span>Plant Varieties</span></div>
            <div className="stat"><strong>6+</strong><span>Essential Oils</span></div>
            <div className="stat"><strong>500+</strong><span>Happy Customers</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}
