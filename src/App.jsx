// ============================================================
//  APP.JSX — ROOT COMPONENT
//
//  This file ONLY assembles sections in order.
//  To edit content → go to the matching component file.
//  To edit colours / spacing → go to the matching CSS file.
//  To edit data (plants, oils etc.) → go to src/data/
//
//  Page order (top → bottom):
//    Navbar → Hero → About → Plants → Oils → WhyUs
//    → Testimonials → Location → Footer
//    + PlantModal (overlay, shown on plant card click)
// ============================================================

import React, { useState } from 'react';

// Global styles (CSS variables, resets, shared utilities)
import './styles/global.css';

// Section components
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import About         from './components/About';
import Plants        from './components/Plants';
import PlantModal    from './components/PlantModal';
import CutFoliage from './components/CutFoliage';
import Oils          from './components/Oils';
import WhyUs         from './components/WhyUs';
import Testimonials  from './components/Testimonials';
import Location      from './components/Location';
import Footer        from './components/Footer';

export default function App() {
  // selectedPlant: null = modal closed, object = modal open
  const [selectedPlant, setSelectedPlant] = useState(null);

  return (
    <>
      {/* Fixed navigation bar */}
      <Navbar />

      {/* Page sections — scroll order */}
      <Hero />
      <About />
      <Plants onSelectPlant={setSelectedPlant} />
      <CutFoliage />  
      <Oils />
      <WhyUs />
      <Testimonials />
      <Location />
      <Footer />

      {/* Plant detail modal (renders only when a plant is selected) */}
      <PlantModal
        plant={selectedPlant}
        onClose={() => setSelectedPlant(null)}
      />
    </>
  );
}
