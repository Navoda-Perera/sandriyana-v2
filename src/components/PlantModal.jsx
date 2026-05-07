// ============================================================
//  PLANT DETAIL MODAL COMPONENT
//  – Opens when user clicks a plant card
//  – Props:
//      plant   → selected plant object (null = hidden)
//      onClose → callback to clear selection
// ============================================================

import React from 'react';
import '../styles/Modal.css';

export default function PlantModal({ plant, onClose }) {
  if (!plant) return null;

  // EDIT: replace with your WhatsApp number (country code + number, no +)
  const whatsappNumber = '94XXXXXXXXX';
  const whatsappMsg    = encodeURIComponent(`Hi! I'm interested in ${plant.name}`);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        {/* Colour header */}
        <div className="modal-header" style={{ background: plant.color }}>
          <span className="modal-header-emoji">{plant.emoji}</span>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <h2 className="modal-title">{plant.name}</h2>
          <div className="modal-latin">{plant.latin}</div>

          <div className="modal-features">
            {plant.care.map((tag) => (
              <span key={tag} className="modal-pill">{tag}</span>
            ))}
          </div>

          <p>{plant.details}</p>

          <div className="modal-cta">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              💬 Order via WhatsApp
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
