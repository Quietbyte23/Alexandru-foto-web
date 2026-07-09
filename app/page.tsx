'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Photo {
  id: string;
  src: string;
  title: string;
  category: string;
  size: string; 
  lens: string;     
  location: string; 
}

// Colecția premium: Portrete umane expresive și natură grandioasă
const PORTFOLIO_PHOTOS: Photo[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb', title: 'Cinematic Portrait / Golden Hour', category: 'PORTRAIT', size: 'md:col-span-2', lens: '85mm f/1.4 Portrait Pro', location: 'Studio Outdoor' },
  { id: '2', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', title: 'The Endless Horizon', category: 'NATURE', size: 'md:col-span-1', lens: '24mm f/2.8 Ultra-Wide', location: 'Maldives Coast' },
  { id: '3', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b', title: 'Deep Alps Majesty', category: 'NATURE', size: 'md:col-span-1', lens: '70-200mm f/4.0', location: 'Dolomites, IT' },
  { id: '4', src: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea', title: 'Street Character Study', category: 'PORTRAIT', size: 'md:col-span-2', lens: '35mm f/1.4 G-Master', location: 'London Streets' },
  { id: '5', src: 'https://images.unsplash.com/photo-1472214222541-d510753a8707', title: 'Serenity in the Valley', category: 'NATURE', size: 'md:col-span-3', lens: '50mm f/1.2 Art', location: 'Icelandic Highlands' },
  { id: '6', src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9', title: 'Urban Fashion Vignette', category: 'PORTRAIT', size: 'md:col-span-1', lens: '85mm f/1.4', location: 'Paris, FR' },
  { id: '7', src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d', title: 'Path Through the Ancients', category: 'NATURE', size: 'md:col-span-1', lens: '24mm Tilt-Shift', location: 'Kyoto Forest, JP' },
  { id: '8', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04', title: 'High Contrast Profile', category: 'PORTRAIT', size: 'md:col-span-1', lens: '90mm Macro f/2.8', location: 'Studio Light' },
  { id: '9', src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05', title: 'Morning Fog Awakening', category: 'NATURE', size: 'md:col-span-2', lens: '24-70mm f/2.8 Pro', location: 'Transylvania, RO' },
  { id: '10', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d', title: 'The Sculpted Face', category: 'PORTRAIT', size: 'md:col-span-1', lens: '135mm f/1.8 Linear', location: 'Milano, IT' },
  { id: '11', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e', title: 'Sunbeams Through Canopy', category: 'NATURE', size: 'md:col-span-1', lens: '16-35mm f/4.0 Wide', location: 'Redwood, US' },
  { id: '12', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1', title: 'Motion in Daylight', category: 'PORTRAIT', size: 'md:col-span-2', lens: '35mm f/1.4 G-Master', location: 'New York, US' },
];

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredPhotos = activeFilter === 'ALL' 
    ? PORTFOLIO_PHOTOS 
    : PORTFOLIO_PHOTOS.filter(p => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#030303] text-zinc-100 selection:bg-zinc-400 selection:text-black">
      
      {/* Header Elegant de Studio Foto */}
      <header className="sticky top-0 z-40 w-full bg-[#030303]/70 backdrop-blur-md border-b border-zinc-900/40">
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

      {/* Hero Profesional */}
      <section className="max-w-4xl mx-auto text-center pt-28 pb-16 px-4">
        <p className="text-[10px] font-mono tracking-[0.4em] text-zinc-500 uppercase mb-4">
          HUMAN EXPRESSION // NATURAL GEOMETRY
        </p>
        <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-white mb-6 leading-snug">
          Oameni, natură și povești nespuse. <br/>
          <span className="font-serif italic text-zinc-400 font-normal">Surprinderea emoției în starea ei cea mai pură.</span>
        </h2>
        <p className="text-xs text-zinc-400 max-w-lg mx-auto font-light leading-relaxed">
          De la portrete de modă și expresii umane profunde, până la peisaje naturale uluitoare lăsate să respire în cadre largi. Calitate premium dedicată exclusiv revistelor și expozițiilor.
        </p>
      </section>

      {/* Filtre Categorii Curate */}
      <div className="flex justify-center flex-wrap gap-2 md:gap-3 font-mono text-[10px] mb-16 px-4 tracking-widest uppercase">
        {['ALL', 'PORTRAIT', 'NATURE'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded transition-all duration-300 ${
              activeFilter === filter 
                ? 'bg-zinc-100 text-black font-semibold' 
                : 'bg-zinc-900/40 border border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700'
            }`}
          >
            {filter === 'ALL' ? 'TOATE CADRELE' : filter === 'PORTRAIT' ? 'PORTRETE / OAMENI' : 'NATURĂ / PEISAJE'}
          </button>
        ))}
      </div>

      {/* Portofoliu Grid Masiv - 12 Imagini Asimetrice */}
      <section className="max-w-7xl mx-auto px-4 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className={`group relative overflow-hidden rounded-lg bg-zinc-950 border border-zinc-900/40 cursor-pointer h-[440px] transition-all duration-700 hover:border-zinc-600 ${photo.size}`}
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-102 grayscale group-hover:grayscale-0 contrast-[1.05]"
                unoptimized
              />
              
              {/* Overlay de Control (Apare la hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">{photo.category}</span>
                  <span className="text-[10px] font-mono text-zinc-400">{photo.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-light text-white tracking-wide">{photo.title}</h3>
                  <span className="text-[9px] font-mono text-zinc-500 italic">{photo.lens}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buton care trimite direct la pagina de contact funcțională */}
        <div className="text-center mt-24">
          <Link href="/contact" className="inline-block font-mono text-xs tracking-widest border border-zinc-800 hover:border-white px-8 py-4 rounded-none uppercase text-zinc-400 hover:text-white transition-all duration-300">
            DISCUTĂ O SESIUNE FOTO / REZERVĂRI FORMULAR →
          </Link>
        </div>
      </section>

      {/* Lightbox Minimalist - Mod Full Screen de Galerie */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/98" 
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Top Bar Lightbox */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center font-mono text-[10px] text-zinc-500">
            <span>{selectedPhoto.location.toUpperCase()} // OPTICS: {selectedPhoto.lens.toUpperCase()}</span>
            <button className="text-zinc-400 hover:text-white tracking-widest uppercase">
              [ ÎNCHIDE ]
            </button>
          </div>

          {/* Zona Imagine */}
          <div className="relative w-[92vw] h-[78vh] max-w-6xl mt-6" onClick={(e) => e.stopPropagation()}>
            <Image src={selectedPhoto.src} alt={selectedPhoto.title} fill className="object-contain" unoptimized />
          </div>

          {/* Bottom Bar Lightbox */}
          <div className="absolute bottom-0 left-0 right-0 p-6 font-mono text-xs text-center flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto w-full text-zinc-400 gap-2">
            <span className="text-white font-light tracking-wide">{selectedPhoto.title}</span>
            <span className="text-zinc-500 text-[10px]">FINE ART COLLECTION // © 2026</span>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-500 font-mono tracking-wider">
        <div>&copy; 2026 ALEXANDRU PHOTOGRAPHY. ALL RIGHTS RESERVED.</div>
        <div>HIGH RESOLUTION PORTFOLIO BUFFER</div>
      </footer>
    </main>
  );
}
