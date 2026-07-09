'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Photo {
  id: string;
  src: string;
  title: string;
  category: string;
}

// Aici sunt pozele demo premium de pe Unsplash (se încarcă singure prin net)
const PHOTOS: Photo[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5', title: 'Neon Horizon', category: 'Cyber' },
  { id: '2', src: 'https://images.unsplash.com/photo-1516339901601-2e1d62dc0c45', title: 'Deep Cosmos', category: 'Space' },
  { id: '3', src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa', title: 'Digital Stream', category: 'Tech' },
  { id: '4', src: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809', title: 'Abstract Light', category: 'Minimal' },
  { id: '5', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475', title: 'Circuit Core', category: 'Tech' },
];

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-sky-400 selection:text-black p-4">
      {/* Header Premium / Minimalist */}
      <header className="max-w-7xl mx-auto px-6 py-12 flex justify-between items-center border-b border-zinc-800/50">
        <div>
          <h1 className="text-xl font-semibold tracking-wider uppercase">
            ALX <span className="text-zinc-500">/ VISUALS</span>
          </h1>
          <p className="text-xs text-zinc-500 mt-1 font-mono">portfolio.v2.0.26</p>
        </div>
        
        <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-full text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-zinc-400">ONLINE ARCHIVE</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-3xl mx-auto text-center py-16 px-4">
        <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-3">
          Capturing light through an engineering lens.
        </p>
        <h2 className="text-2xl md:text-3xl font-extralight tracking-tight text-zinc-200 leading-relaxed">
          O colecție digitală curatată pentru minți curioase.
        </h2>
      </section>

      {/* Grid-ul de imagini */}
      <section className="pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
          {PHOTOS.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg bg-zinc-900 cursor-pointer aspect-[3/4] transition-all duration-500 hover:scale-[1.02]"
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale contrast-125 hover:grayscale-0 hover:contrast-100"
                unoptimized // Dezactivăm temporar optimizarea strictă locală ca să accepte orice link extern rapid
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-widest text-sky-400 mb-1">{photo.category}</span>
                <h3 className="text-lg font-medium text-white tracking-wide">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox / Vizualizare Full Screen */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <button className="absolute top-6 right-6 text-zinc-400 hover:text-white text-sm tracking-widest uppercase">
            [ închide ]
          </button>
          <div className="relative w-[90vw] h-[80vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={selectedPhoto.src} alt={selectedPhoto.title} fill className="object-contain" unoptimized />
            <div className="absolute bottom-[-40px] left-0 right-0 text-center">
              <h2 className="text-xl font-light tracking-widest text-white">{selectedPhoto.title}</h2>
              <p className="text-xs text-zinc-500 uppercase mt-1">{selectedPhoto.category}</p>
            </div>
          </div>
        </div>
      )}

      <footer className="text-center py-8 border-t border-zinc-900 text-xs text-zinc-600 font-mono">
        &copy; 2026 ALX. Built for speed.
      </footer>
    </main>
  );
}
