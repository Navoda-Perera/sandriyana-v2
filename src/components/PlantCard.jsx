// ─────────────────────────────────────────────────────────────
//  src/components/PlantCard.jsx
//  Individual plant product card used inside the Plants grid.
//  Clicking a card opens the PlantModal popup.
//  Animates in when it scrolls into view.
// ─────────────────────────────────────────────────────────────

import React from 'react';
import useIntersection from '../hooks/useIntersection';

export default function PlantCard({ plant, onClick }) {
  const [ref, isVisible] = useIntersection();

  return (
    <div
      ref={ref}
      className={`plant-card fade-in-up${isVisible ? ' visible' : ''}`}
      onClick={() => onClick(plant)}
    >
      {/* ── Card Image Area ── */}
      <div className="plant-card-img" style={{ background: plant.color }}>
        <span className="plant-card-emoji">{plant.emoji}</span>
        {/* Category tag (top-right) */}
        <span className="plant-card-tag">{plant.tag}</span>
        {/* Badge label (top-left) — only shows if plant has a badge */}
        {plant.badge && (
          <span className="plant-card-badge">{plant.badge}</span>
        )}
      </div>

      {/* ── Card Body ── */}
      <div className="plant-card-body">
        <div className="plant-card-name">{plant.name}</div>
        <div className="plant-card-latin">{plant.latin}</div>
        <div className="plant-card-desc">{plant.desc}</div>

        <div className="plant-card-footer">
          <span className="plant-tag">🌿 Indoor Plant</span>
          <span className="plant-price">Enquire →</span>
          {/* To show a price instead, replace the line above with:
              <span className="plant-price">LKR 2,500</span>     */}
        </div>
      </div>
    </div>
  );
}
