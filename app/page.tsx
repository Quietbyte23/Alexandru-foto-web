'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Photo {
  id: string;
  src: string;
  title: string;
  category: string;
  lens: string;     
  location: string; 
  span: string; // Controlăm exact dimensiunea pe ecran
}

const PORTFOLIO_PHOTOS: Photo[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80', title: 'Cinematic Portrait / Golden Hour', category: 'PORTRAIT', lens: '85mm f/1.4 Portrait Pro', location: 'Studio Outdoor', span: 'col-2' },
  { id: '2', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', title: 'The Endless Horizon', category: 'NATURE', lens: '24mm f/2.8 Ultra-Wide', location: 'Maldives Coast', span: 'col-1' },
  { id: '3', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', title: 'Deep Alps Majesty', category: 'NATURE', lens: '70-200mm f/4.0', location: 'Dolomites, IT', span: 'col-1' },
  { id: '4', src: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80', title: 'Street Character Study', category: 'PORTRAIT', lens: '35mm f/1.4 G-Master', location: 'London Streets', span: 'col-2' },
  { id: '5', src: 'https://images.unsplash.com/photo-1472214222541-d510753a8707?auto=format&fit=crop&w=800&q=80', title: 'Serenity in the Valley', category: 'NATURE', lens: '50mm f/1.2 Art', location: 'Icelandic Highlands', span: 'col-2' },
  { id: '6', src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', title: 'Urban Fashion Vignette', category: 'PORTRAIT', lens: '85mm f/1.4', location: 'Paris, FR', span: 'col-1' },
  { id: '7', src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80', title: 'Path Through the Ancients', category: 'NATURE', lens: '24mm Tilt-Shift', location: 'Kyoto Forest, JP', span: 'col-1' },
  { id: '8', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80', title: 'High Contrast Profile', category: 'PORTRAIT', lens: '90mm Macro f/2.8', location: 'Studio Light', span: 'col-1' },
  { id: '9', src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80', title: 'Morning Fog Awakening', category: 'NATURE', lens: '24-70mm f/2.8 Pro', location: 'Transylvania, RO', span: 'col-2' },
  { id: '10', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80', title: 'The Sculpted Face', category: 'PORTRAIT', lens: '135mm f/1.8 Linear', location: 'Milano, IT', span: 'col-1' },
  { id: '11', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80', title: 'Sunbeams Through Canopy', category: 'NATURE', lens: '16-35mm f/4.0 Wide', location: 'Redwood, US', span: 'col-1' },
  { id: '12', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', title: 'Motion in Daylight', category: 'PORTRAIT', lens: '35mm f/1.4 G-Master', location: 'New York, US', span: 'col-2' },
  { id: '13', src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80', title: 'Studio Shadow Play', category: 'PORTRAIT', lens: '105mm f/2.0 DC', location: 'Studio Minimal', span: 'col-1' },
  { id: '14', src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80', title: 'Misty Woodland Path', category: 'NATURE', lens: '50mm f/1.4', location: 'Black Forest, DE', span: 'col-1' },
];

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredPhotos = activeFilter === 'ALL' 
    ? PORTFOLIO_PHOTOS 
    : PORTFOLIO_PHOTOS.filter(p => p.category === activeFilter);

  return (
    <div style={{
      backgroundColor: '#050505',
      color: '#f4f4f5',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>
      
      {/* HEADER PROFESIONAL FIXAT */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        backgroundColor: 'rgba(5, 5, 5, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #18181b',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{ fontSize: '14px', fontWeight: 600, tracking: '0.2em', letterSpacing: '2px', margin: 0, color: '#ffffff' }}>
              ALEXANDRU <span style={{ color: '#71717a', fontWeight: 300 }}>| PHOTOGRAPHY</span>
            </h1>
            <p style={{ fontSize: '9px', color: '#52525b', fontFamily: 'monospace', margin: '2px 0 0 0', letterSpacing: '1px' }}>
              PORTRAIT & LANDSCAPE ARTISTRY
            </p>
          </div>

          <nav style={{ display: 'flex', gap: '30px', fontFamily: 'monospace', fontSize: '12px', letterSpacing: '1px' }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', borderBottom: '1px solid #ffffff', paddingBottom: '4px' }}>
              PORTOFOLIU
            </Link>
            <Link href="/prices" style={{ color: '#a1a1aa', textDecoration: 'none', paddingBottom: '4px' }}>
              SERVICII & TARIFE
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '80px 24px 40px 24px' }}>
        <p style={{ fontSize: '10px', fontFamily: 'monospace', letterSpacing: '4px', color: '#a1a1aa', margin: '0 0 16px 0', textTransform: 'uppercase' }}>
          Human Expression // Natural Geometry
        </p>
        <h2 style={{ fontSize: '36px', fontWeight: 200, letterSpacing: '-0.5px', margin: '0 0 16px 0', color: '#ffffff', lineHeight: '1.3' }}>
          Oameni, natură și povești nespuse.<br />
          <span style={{ fontFamily: 'Georgia, serif', WarmGray: '#a1a1aa', fontStyle: 'italic', color: '#a1a1aa' }}>Surprinderea emoției în starea ei pură.</span>
        </h2>
      </section>

      {/* FILTRE PREMIUM */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', margin: '0 0 60px 0', padding: '0 24px' }}>
        {['ALL', 'PORTRAIT', 'NATURE'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{
              backgroundColor: activeFilter === filter ? '#ffffff' : 'transparent',
              color: activeFilter === filter ? '#000000' : '#a1a1aa',
              border: activeFilter === filter ? '1px solid #ffffff' : '1px solid #27272a',
              padding: '8px 20px',
              fontFamily: 'monospace',
              fontSize: '10px',
              letterSpacing: '2px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              transition: 'all 0.3s'
            }}
          >
            {filter === 'ALL' ? 'TOATE CADRELE' : filter === 'PORTRAIT' ? 'PORTRETE' : 'NATURĂ'}
          </button>
        ))}
      </div>

      {/* PORTOFOLIU GRID ASIMETRIC PREMIUM STABIL */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 120px 24px', boxSizing: 'border-box' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '40px',
        }}>
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#09090b',
                border: '1px solid #18181b',
                cursor: 'pointer',
                overflow: 'hidden',
              }}
            >
              {/* Caseta Foto fixa, proporții perfecte */}
              <div style={{ width: '100%', height: '420px', overflow: 'hidden', position: 'relative', backgroundColor: '#18181b' }}>
                <img
                  src={photo.src}
                  alt={photo.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>
              
              {/* Informații sub Poză */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '4px', background: '#09090b' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontFamily: 'monospace', color: '#71717a', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  <span>{photo.category}</span>
                  <span>{photo.location}</span>
                </div>
                <h3 style={{ fontSize: '14px', fontWeight: 400, margin: '4px 0 2px 0', color: '#f4f4f5', letterSpacing: '-0.2px' }}>
                  {photo.title}
                </h3>
                <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#52525b', fontStyle: 'italic' }}>
                  {photo.lens}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Buton Contact Formular */}
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <Link href="/contact" style={{
            display: 'inline-block',
            fontFamily: 'monospace',
            fontSize: '11px',
            letterSpacing: '2px',
            border: '1px solid #27272a',
            color: '#a1a1aa',
            textDecoration: 'none',
            padding: '16px 32px',
            textTransform: 'uppercase',
            transition: 'all 0.3s'
          }}>
            DISCUTĂ O SESIUNE FOTO / REZERVĂRI FORMULAR →
          </Link>
        </div>
      </section>

      {/* LIGHTBOX MODAL FULLSCREEN */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            backgroundColor: 'rgba(2, 2, 2, 0.98)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px'
          }}
        >
          <div style={{ position: 'absolute', top: '24px', left: '24px', right: '24px', display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: '10px', color: '#71717a' }}>
            <span>{selectedPhoto.location.toUpperCase()} // OPTICS: {selectedPhoto.lens.toUpperCase()}</span>
            <button style={{ background: 'none', border: 'none', color: '#f4f4f5', cursor: 'pointer', fontFamily: 'monospace', fontSize: '10px', letterSpacing: '1px' }}>
              [ ÎNCHIDE ]
            </button>
          </div>

          <div style={{ maxWidth: '90vw', maxHeight: '70vh' }} onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedPhoto.src} 
              alt={selectedPhoto.title} 
              style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }} 
            />
          </div>

          <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: '12px', color: '#a1a1aa', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <span style={{ color: '#ffffff', fontWeight: 300 }}>{selectedPhoto.title}</span>
            <span style={{ color: '#52525b', fontSize: '10px' }}>FINE ART COLLECTION // © 2026</span>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 24px',
        borderTop: '1px solid #18181b',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '10px',
        fontFamily: 'monospace',
        color: '#52525b'
      }}>
        <div>&copy; 2026 ALEXANDRU PHOTOGRAPHY. ALL RIGHTS RESERVED.</div>
        <div>HIGH RESOLUTION PORTFOLIO</div>
      </footer>

    </div>
  );
}
