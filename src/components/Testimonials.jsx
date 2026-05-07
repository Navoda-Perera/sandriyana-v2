// ============================================================
//  TESTIMONIALS SECTION COMPONENT
//  – Customer review cards
//  – Data comes from src/data/testimonials.js
// ============================================================

import React from 'react';
import TESTIMONIALS from '../data/testimonials';
import '../styles/Testimonials.css';

export default function Testimonials() {
  return (
    <section className="section-wrap testimonials-section">

      {/* Header */}
      <div className="section-header">
        <div className="section-eyebrow">What Customers Say</div>
        <h2 className="section-title">
          Loved by <em>Plant Enthusiasts</em>
        </h2>
        <div className="divider" />
      </div>

      {/* Grid */}
      <div className="testimonials-grid">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="testimonial">
            <div className="stars">{'★'.repeat(t.stars)}</div>
            <div className="testimonial-text">{t.text}</div>
            <div className="testimonial-author">
              <div className="author-avatar">{t.avatar}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-loc">{t.loc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
