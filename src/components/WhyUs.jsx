// ============================================================
//  WHY CHOOSE US SECTION COMPONENT
//  – Feature icons grid
//  – Feature data comes from src/data/features.js
// ============================================================

import React from 'react';
import FEATURES from '../data/features';
import '../styles/WhyUs.css';

export default function WhyUs() {
  return (
    <section id="why" className="section-wrap whyus-section">

      {/* Header */}
      <div className="section-header">
        <div className="section-eyebrow">Why Choose Us</div>
        <h2 className="section-title">
          The Sandriyana <em>Difference</em>
        </h2>
        <div className="divider" />
      </div>

      {/* Grid */}
      <div className="features-grid">
        {FEATURES.map((f) => (
          <div key={f.id} className="feature">
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-title">{f.title}</div>
            <div className="feature-desc">{f.desc}</div>
          </div>
        ))}
      </div>

    </section>
  );
}
