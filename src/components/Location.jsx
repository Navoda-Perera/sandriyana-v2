// ============================================================
//  LOCATION SECTION COMPONENT
//  – Contact info + embedded Google Map
// ============================================================

import React from 'react';
import '../styles/Location.css';

// ── CONTACT DETAILS ──────────────────────────────────────────
const CONTACT = {
  address: 'Sandriyana Estate\nHJ9R+CV, Kawudupelella\nSri Lanka',
  phone: '+94 XX XXX XXXX',
  whatsapp: '94XXXXXXXXX', // no + sign
  email: 'info@sandrianaestate.com',
  website: 'sandrianaestate.com',
  hours: 'Mon – Sat: 8:00 AM – 6:00 PM\nSunday: 9:00 AM – 3:00 PM',
};

// ── GOOGLE MAP EMBED URL ────────────────────────────────────
const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.059210753982!2d80.6421771!3d7.568524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae351004347d361%3A0xa2c74e72f5c43072!2sSandriana%20Estate!5e0!3m2!1sen!2slk!4v1778135583786!5m2!1sen!2slk';

// ────────────────────────────────────────────────────────────

const items = [
  {
    icon: '📍',
    label: 'Address',
    value: CONTACT.address,
    link: null,
  },
  {
    icon: '📞',
    label: 'Phone / WhatsApp',
    value: CONTACT.phone,
    link: `tel:${CONTACT.phone}`,
  },
  {
    icon: '✉️',
    label: 'Email',
    value: CONTACT.email,
    link: `mailto:${CONTACT.email}`,
  },
  {
    icon: '🕐',
    label: 'Opening Hours',
    value: CONTACT.hours,
    link: null,
  },
  {
    icon: '🌐',
    label: 'Website',
    value: CONTACT.website,
    link: `https://${CONTACT.website}`,
  },
];

export default function Location() {
  return (
    <section id="location" className="section-wrap location-section">

      {/* Header */}
      <div className="section-header">
        <div className="section-eyebrow">Find Us</div>

        <h2 className="section-title">
          Visit the <em>Estate</em>
        </h2>

        <p
          style={{
            color: 'var(--text-lt)',
            fontSize: '0.95rem',
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          Come experience the beauty of Sandriyana Estate in person.
          We welcome visitors by appointment.
        </p>

        <div className="divider" />
      </div>

      <div className="location-wrap">

        {/* LEFT SIDE */}
        <div className="location-info">

          {items.map(({ icon, label, value, link }) => (
            <div key={label} className="contact-item">

              <div className="contact-icon">
                {icon}
              </div>

              <div className="contact-text">

                <strong>{label}</strong>

                {link ? (
                  <a
                    href={link}
                    target={link.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    {value}
                  </a>
                ) : (
                  <span style={{ whiteSpace: 'pre-line' }}>
                    {value}
                  </span>
                )}

              </div>
            </div>
          ))}

          {/* ACTION BUTTONS */}
          <div className="location-actions">

            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              💬 WhatsApp Us
            </a>

            <a
              href="https://maps.app.goo.gl/61Q6MACwE5SVw7KQA?g_st=iw"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-dark"
            >
              📍 Open in Maps
            </a>

          </div>
        </div>

        {/* RIGHT SIDE MAP */}
        <div className="map-container">

          <iframe
            title="Sandriana Estate Location"
            src={MAP_SRC}
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>
      </div>
    </section>
  );
}