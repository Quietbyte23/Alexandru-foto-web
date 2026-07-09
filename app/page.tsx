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
}

const PORTFOLIO_PHOTOS: Photo[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80', title: 'Cinematic Portrait / Golden Hour', category: 'PORTRAIT', lens: '85mm f/1.4 Portrait Pro', location: 'Studio Outdoor' },
  { id: '2', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', title: 'The Endless Horizon', category: 'NATURE', lens: '24mm f/2.8 Ultra-Wide', location: 'Maldives Coast' },
  { id: '3', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80', title: 'Deep Alps Majesty', category: 'NATURE', lens: '70-200mm f/4.0', location: 'Dolomites, IT' },
  { id: '4', src: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80', title: 'Street Character Study', category: 'PORTRAIT', lens: '35mm f/1.4 G-Master', location: 'London Streets' },
  { id: '5', src: 'https://images.unsplash.com/photo-1472214222541-d510753a8707?auto=format&fit=crop&w=600&q=80', title: 'Serenity in the Valley', category: 'NATURE', lens: '50mm f/1.2 Art', location: 'Icelandic Highlands' },
  { id: '6', src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80', title: 'Urban Fashion Vignette', category: 'PORTRAIT', lens: '85mm f/1.4', location: 'Paris, FR' },
  { id: '7', src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80', title: 'Path Through the Ancients', category: 'NATURE', lens: '24mm Tilt-Shift', location: 'Kyoto Forest, JP' },
  { id: '8', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80', title: 'High Contrast Profile', category: 'PORTRAIT', lens: '90mm Macro f/2.8', location: 'Studio Light' },
  { id: '9', src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80', title: 'Morning Fog Awakening', category: 'NATURE', lens: '24-70mm f/2.8 Pro', location: 'Transylvania, RO' },
  { id: '10', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80', title: 'The Sculpted Face', category: 'PORTRAIT', lens: '135mm f/1.8 Linear', location: 'Milano, IT' },
  { id: '11', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80', title: 'Sunbeams Through Canopy', category: 'NATURE', lens: '16-35mm f/4.0 Wide', location: 'Redwood, US' },
  { id: '12', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80', title: 'Motion in Daylight', category: 'PORTRAIT', lens: '35mm f/1.4 G-Master', location: 'New York, US' },
];

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredPhotos = activeFilter === 'ALL' 
    ? PORTFOLIO_PHOTOS 
    : PORTFOLIO_PHOTOS.filter(p => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#030303] text-zinc-100 selection:bg-zinc-400 selection:text-black">
      
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-[#030303]/80 backdrop-blur-md border-b border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-md font-medium tracking-[0.2em] uppercase text-white">
              ALEXANDRU <span className="text-zinc-500 font-light">| PHOTOGRAPHY</span>
            </h1>
            <p className="text-[10px] text-zinc-500 font-mono mt-0.5 tracking-wider">PORTRAIT & LANDSCAPE ARTISTRY</p>
          </div>

          <nav className="flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
            <Link href="/" className="text-white border-b border-white pb-1 font-medium">Portofoliu</Link>
            <Link href="/prices" className="text-zinc-500 hover:text-zinc-200 transition-colors pb-1">Servicii & Tarife</Link>
          </nav>
          
          <div className="hidden md:flex items-center gap-2 text-[10px] text-zinc-400 font-mono tracking-wider">
            <span>BOOKINGS OPEN FOR 2026 // WORLDWIDE</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center pt-20 pb-12 px-4">
        <p className="text-[10px] font-mono tracking-[0.4em] text-zinc-500 uppercase mb-3">
          HUMAN EXPRESSION // NATURAL GEOMETRY
        </p>
        <h2 className="text-2xl md:text-4xl font-extralight tracking-tight text-white mb-4 leading-snug">
          Oameni, natură și povești nespuse. <br/>
          <span className="font-serif italic text-zinc-400 font-normal">Surprinderea emoției în starea ei cea mai pură.</span>
        </h2>
      </section>

      {/* Filtre */}
      <div className="flex justify-center flex-wrap gap-2 font-mono text-[10px] mb-12 px-4 tracking-widest uppercase">
        {['ALL', 'PORTRAIT', 'NATURE'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 border transition-all duration-300 ${
              activeFilter === filter 
                ? 'bg-zinc-100 text-black border-white font-semibold' 
                : 'bg-zinc-900/20 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700'
            }`}
          >
            {filter === 'ALL' ? 'TOATE CADRELE' : filter === 'PORTRAIT' ? 'PORTRETE' : 'NATURĂ'}
          </button>
        ))}
      </div>

      {/* Grid Complet Curat și Stabilizat */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-md bg-zinc-950 border border-zinc-900/60 cursor-pointer w-full max-w-[260px] h-[340px] flex flex-col justify-between"
              onClick={() => setSelectedPhoto(photo)}
            >
              {/* Box Imagine Fixat */}
              <div className="relative w-full h-[260px] overflow-hidden bg-zinc-900">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              
              {/* Textul de dedesubt (în afara imaginii ca să nu se mai suprapună nimic aiurea) */}
              <div className="p-3 bg-[#080808] h-[80px] flex flex-col justify-between border-t border-zinc-900">
                <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500">
                  <span className="uppercase tracking-wider text-zinc-400">{photo.category}</span>
                  <span>{photo.location}</span>
                </div>
                <h3 className="text-[11px] font-medium text-zinc-200 truncate pr-2">{photo.title}</h3>
                <span className="text-[8px] font-mono text-zinc-600 truncate">{photo.lens}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link href="/contact" className="inline-block font-mono text-xs tracking-widest border border-zinc-800 hover:border-white px-8 py-4 text-zinc-400 hover:text-white transition-all duration-300">
            DISCUTĂ O SESIUNE FOTO →
          </Link>
        </div>
      </section>

      {/* Lightbox Mod Full Screen */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md" 
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center font-mono text-[10px] text-zinc-400">
            <span>{selectedPhoto.location.toUpperCase()} // {selectedPhoto.lens.toUpperCase()}</span>
            <button className="text-zinc-200 hover:text-white">[ ÎNCHIDE ]</button>
          </div>

          <div className="w-[85vw] h-[65vh] max-w-4xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedPhoto.src} 
              alt={selectedPhoto.title} 
              className="max-w-full max-h-full object-contain rounded"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 font-mono text-xs text-center flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto w-full text-zinc-400">
            <span className="text-white font-light">{selectedPhoto.title}</span>
            <span className="text-zinc-600 text-[10px]">&copy; 2026 ALEXANDRU</span>
          </div>
        </div>
      )}

      <footer className="max-w-7xl mx-auto px-6 py-8 border-t border-zinc-900 text-center text-[10px] text-zinc-600 font-mono">
        &copy; 2026 ALEXANDRU PHOTOGRAPHY. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}
