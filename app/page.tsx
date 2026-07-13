'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Photo {
  id: string;
  src: string;
  titleRo: string;
  titleEn: string;
  category: string;
  location: string; 
}

// 6 poze selectate pentru simetrie perfecta (2 randuri de 3 poze sau 3 randuri de 2 poze)
const PORTFOLIO_PHOTOS: Photo[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80', titleRo: 'Portret în Lumina Caldă', titleEn: 'Golden Hour Portrait', category: 'PORTRAIT', location: 'Studio' },
  { id: '2', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', titleRo: 'Orizontul Infinit', titleEn: 'The Endless Horizon', category: 'NATURE', location: 'Coast' },
  { id: '3', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', titleRo: 'Majestatea Alpilor', titleEn: 'Deep Alps Majesty', category: 'NATURE', location: 'Dolomites' },
  { id: '4', src: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80', titleRo: 'Studiu de Caracter Urban', titleEn: 'Street Character Study', category: 'PORTRAIT', location: 'Streets' },
  { id: '5', src: 'https://images.unsplash.com/photo-1472214222541-d510753a8707?auto=format&fit=crop&w=800&q=80', titleRo: 'Liniștea din Vale', titleEn: 'Serenity in the Valley', category: 'NATURE', location: 'Highlands' },
  { id: '6', src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', titleRo: 'Vigneta de Modă Urbană', titleEn: 'Urban Fashion Vignette', category: 'PORTRAIT', location: 'Paris' },
];

export default function Home() {
  const [lang, setLang] = useState<'RO' | 'ENG'>('RO');
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = activeFilter === 'ALL' 
    ? PORTFOLIO_PHOTOS 
    : PORTFOLIO_PHOTOS.filter(p => p.category === activeFilter);

  return (
    <div style={{
      backgroundColor: '#f5f5f7', // Griul clasic deschis de la Apple
      color: '#1d1d1f', // Textul inchis mat tipic Apple
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>
      
      {/* HEADER PREMIUM STIL APPLE */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        backgroundColor: 'rgba(245, 245, 247, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #d2d2d7',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '1024px',
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* LOGO NOU MAI SERIOS */}
          <div>
            <h1 style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '1.5px', margin: 0, color: '#1d1d1f' }}>
              AXL <span style={{ color: '#86868b', fontWeight: 400 }}>VISUAL STUDIO</span>
            </h1>
          </div>

          {/* NAVIGARE + TOGGLE LIMBA */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '24px', fontSize: '12px', fontWeight: 500 }}>
            <Link href="/" style={{ color: '#1d1d1f', textDecoration: 'none', borderBottom: '1.5px solid #1d1d1f', paddingBottom: '2px' }}>
              {lang === 'RO' ? 'Portofoliu' : 'Portfolio'}
            </Link>
            <Link href="/prices" style={{ color: '#515154', textDecoration: 'none', paddingBottom: '2px' }}>
              {lang === 'RO' ? 'Servicii' : 'Services'}
            </Link>
            <Link href="/contact" style={{ color: '#515154', textDecoration: 'none', paddingBottom: '2px' }}>
              Contact
            </Link>
            
            {/* RO / ENG TOGGLE SWITCH */}
            <div style={{ display: 'flex', gap: '6px', borderLeft: '1px solid #d2d2d7', paddingLeft: '16px', fontFamily: 'monospace' }}>
              <span onClick={() => setLang('RO')} style={{ cursor: 'pointer', fontWeight: lang === 'RO' ? 700 : 400, color: lang === 'RO' ? '#0066cc' : '#86868b' }}>RO</span>
              <span style={{ color: '#d2d2d7' }}>|</span>
              <span onClick={() => setLang('ENG')} style={{ cursor: 'pointer', fontWeight: lang === 'ENG' ? 700 : 400, color: lang === 'ENG' ? '#0066cc' : '#86868b' }}>ENG</span>
            </div>
          </nav>
        </div>
      </header>

      {/* HERO HERO SECTION CURAT */}
      <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '60px 24px 30px 24px' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 700, letterSpacing: '-1px', margin: '0 0 12px 0', color: '#1d1d1f', lineHeight: '1.2' }}>
          {lang === 'RO' ? 'Munca mea. Poveștile voastre.' : 'My work. Your stories.'}
        </h2>
        <p style={{ fontSize: '17px', color: '#86868b', fontWeight: 400, margin: 0, maxWidth: '600px', marginInline: 'auto' }}>
          {lang === 'RO' ? 'Fotografie autentică de portret și eveniment. Fără cadre artificiale, doar emoție pură.' : 'Authentic portrait and event photography. No artificial setups, just pure emotion.'}
        </p>
      </section>

      {/* FILTRE */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', margin: '20px 0 40px 0' }}>
        {['ALL', 'PORTRAIT', 'NATURE'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{
              backgroundColor: activeFilter === filter ? '#1d1d1f' : '#e8e8ed',
              color: activeFilter === filter ? '#ffffff' : '#1d1d1f',
              border: 'none',
              borderRadius: '20px',
              padding: '6px 16px',
              fontSize: '12px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {filter === 'ALL' ? (lang === 'RO' ? 'Toate' : 'All') : filter === 'PORTRAIT' ? 'Portrete' : (lang === 'RO' ? 'Natură' : 'Nature')}
          </button>
        ))}
      </div>

      {/* GRID PERFECT SIMETRIC (3 COLOANE FIXE SAU REZOLUTIE DINAINTE) */}
      <section style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px 80px 24px', boxSizing: 'border-box' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s ease'
              }}
            >
              <div style={{ width: '100%', height: '320px', overflow: 'hidden', backgroundColor: '#e8e8ed' }}>
                <img
                  src={photo.src}
                  alt={lang === 'RO' ? photo.titleRo : photo.titleEn}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 600, color: '#86868b', textTransform: 'uppercase', marginBottom: '4px' }}>
                  <span>{photo.category}</span>
                  <span>{photo.location}</span>
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 600, margin: 0, color: '#1d1d1f' }}>
                  {lang === 'RO' ? photo.titleRo : photo.titleEn}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CALE RAPIDĂ DE CONTACT */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link href="/contact" style={{
            display: 'inline-block',
            backgroundColor: '#0071e3',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '12px 28px',
            borderRadius: '22px',
            fontSize: '14px',
            fontWeight: 500
          }}>
            {lang === 'RO' ? 'Discută o ședință foto' : 'Book a session now'}
          </Link>
        </div>
      </section>

      {/* Modal / Lightbox simplu */}
      {selectedPhoto && (
        <div onClick={() => setSelectedPhoto(null)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100, backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <img src={selectedPhoto.src} style={{ maxWidth: '90%', maxHeight: '80vh', borderRadius: '8px' }} alt="Popup" />
        </div>
      )}
    </div>
  );
}
