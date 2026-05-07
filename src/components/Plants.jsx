// ============================================================
//  PLANTS SECTION COMPONENT
//  – Renders the plant grid
//  – Each card opens a modal (passed via onSelect prop)
//  – Plant data comes from src/data/plants.js
// ============================================================

import React, { useRef, useState, useEffect } from 'react';
import PLANTS from '../data/plants';
import '../styles/Plants.css';

/* ── Intersection observer hook for scroll animation ── */
function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ── Single plant card ── */
function PlantCard({ plant, onSelect }) {
  const [ref, visible] = useFadeIn();

  return (
    <div
      ref={ref}
      className={`plant-card fade-in-up${visible ? ' visible' : ''}`}
      onClick={() => onSelect(plant)}
    >
      {/* Colour image area */}
      <div className="plant-card-img" style={{ background: plant.color }}>
        <span className="plant-card-emoji">{plant.emoji}</span>
        <span className="plant-card-tag">{plant.tag}</span>
        {plant.badge && (
          <span className="plant-card-badge">{plant.badge}</span>
        )}
      </div>

      {/* Text body */}
      <div className="plant-card-body">
        <div className="plant-card-name">{plant.name}</div>
        <div className="plant-card-latin">{plant.latin}</div>
        <div className="plant-card-desc">{plant.desc}</div>

        <div className="plant-card-footer">
          <span className="plant-tag">🌿 Indoor Plant</span>
          <span className="plant-enquire">Enquire →</span>
        </div>
      </div>
    </div>
  );
}

/* ── Section ── */
export default function Plants({ onSelectPlant }) {
  return (
    <section id="plants" className="section-wrap plants-section">

      {/* Header */}
      <div className="section-header">
        <div className="section-eyebrow">Our Collection</div>
        <h2 className="section-title">
          Premium <em>Plant Collection</em>
        </h2>
        <p style={{ color: 'var(--text-lt)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}>
          From rare Aglonima varieties to our signature Sandriyana collection,
          each plant is a living masterpiece.
        </p>
        <div className="divider" />
      </div>

      {/* Grid */}
      <div className="plants-grid">
        {PLANTS.map((plant) => (
          <PlantCard key={plant.id} plant={plant} onSelect={onSelectPlant} />
        ))}
      </div>

    </section>
  );
}
