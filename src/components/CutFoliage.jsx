// ============================================================
//  CUT FOLIAGE PLANTS SECTION COMPONENT
// ============================================================

import React, { useState } from 'react';
import CUT_FOLIAGE from '../data/cutfoliage';
import '../styles/CutFoliage.css';
import '../styles/Modal.css';

/* ── Detail Modal ── */
function CutFoliageModal({ plant, onClose }) {
  if (!plant) return null;

  const whatsappNumber = '94XXXXXXXXX';
  const msg = encodeURIComponent(`Hi! I'm interested in ${plant.name} (Cut Foliage)`);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <div className="modal-header" style={{ background: plant.color }}>
          <span className="modal-header-emoji">{plant.emoji}</span>
          <button className="modal-close" onClick={onClose}>&#x2715;</button>
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{plant.name}</h2>
          <div className="modal-latin">{plant.latin}</div>

          <div className="modal-features">
            {plant.uses.map((u) => (
              <span key={u} className="cf-modal-pill">{u}</span>
            ))}
          </div>

          <p>{plant.details}</p>

          <div className="modal-cta">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${msg}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Order via WhatsApp
            </a>
            <a
              href="#location"
              className="modal-btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                setTimeout(() =>
                  document.getElementById('location')
                    ?.scrollIntoView({ behavior: 'smooth' })
                , 100);
              }}
            >
              Contact Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ── Main Section ── */
export default function CutFoliage() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="cutfoliage" className="section-wrap cutfoliage-section">

        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">Fresh Cut</div>
          <h2 className="section-title">
            Cut Foliage <em>Plants</em>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.8 }}>
            Premium quality cut foliage, harvested fresh from our estate
            for florists, event planners, and home decorators.
          </p>
          <div className="divider" />
        </div>

        {/* Info banner */}
        <div className="cf-intro-banner">
          <div className="cf-intro-icon">&#x2702;&#xFE0F;</div>
          <div className="cf-intro-text">
            <h3>Fresh &middot; Bulk &middot; Wholesale Available</h3>
            <p>
              All cut foliage is harvested to order and dispatched same day.
              Bulk and wholesale orders welcome for florists and event companies.
              Contact us for pricing and availability.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="cutfoliage-grid">
          {CUT_FOLIAGE.map((plant) => (
            <div
              key={plant.id}
              className="cf-card"
              onClick={() => setSelected(plant)}
            >
              <div className="cf-card-img" style={{ background: plant.color }}>
                <span className="cf-card-emoji">{plant.emoji}</span>
                {plant.badge && (
                  <span className="cf-card-badge">{plant.badge}</span>
                )}
              </div>

              <div className="cf-card-body">
                <div className="cf-card-name">{plant.name}</div>
                <div className="cf-card-latin">{plant.latin}</div>
                <div className="cf-card-desc">{plant.desc}</div>
                <div className="cf-uses">
                  {plant.uses.map((u) => (
                    <span key={u} className="cf-use-pill">{u}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Detail popup */}
      <CutFoliageModal
        plant={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
