// ============================================================
//  ESSENTIAL OILS SECTION COMPONENT
//  – Dark background grid of oil cards
//  – Oil data comes from src/data/oils.js
// ============================================================

import React from 'react';
import OILS from '../data/oils';
import '../styles/Oils.css';

export default function Oils() {
  return (
    <section id="oils" className="section-wrap oils-section">

      {/* Header */}
      <div className="section-header">
        <div className="section-eyebrow">Pure Botanicals</div>
        <h2 className="section-title">
          Essential <em>Oils</em>
        </h2>
        <p className="oils-intro">
          Distilled from the finest botanicals, our essential oils carry the soul
          of nature — pure, potent, and transformative.
        </p>
        <div className="divider" />
      </div>

      {/* Grid */}
      <div className="oils-grid">
        {OILS.map((oil) => (
          <div key={oil.id} className="oil-card">
            <div className="oil-icon">{oil.icon}</div>
            <div className="oil-name">{oil.name}</div>
            <div className="oil-subtitle">{oil.subtitle}</div>
            <p className="oil-desc">{oil.desc}</p>
            <div className="oil-benefits">
              {oil.benefits.map((b) => (
                <span key={b} className="oil-pill">{b}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
