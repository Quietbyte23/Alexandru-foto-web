'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Photo {
  id: string;
  src: string;
  titleRo: string;
  titleEn: string;
  category: 'PORTRAIT' | 'NATURE';
  location: string;
}

const PORTFOLIO_PHOTOS: Photo[] = [
  // Poze existente
  { 
    id: '1', 
    src: '/portret-natura.webp', 
    titleRo: 'Portret în Natură', 
    titleEn: 'Natural Portrait', 
    category: 'PORTRAIT', 
    location: 'Natură' 
  },
  { 
    id: '2', 
    src: '/peisaj-simplu.webp', 
    titleRo: 'Orizont Simplu', 
    titleEn: 'Pure Landscape', 
    category: 'NATURE', 
    location: 'Outdoor' 
  },

  // Pozele noi adăugate 📸
  { 
    id: 'peisaj-munte', 
    src: '/peisaj-munte.webp', 
    titleRo: 'Peisaj Montan', 
    titleEn: 'Mountain Landscape', 
    category: 'NATURE', 
    location: 'Munți' 
  },
  { 
    id: 'flori-detaliu', 
    src: '/flori-detaliu.webp', 
    titleRo: 'Flori în Detaliu', 
    titleEn: 'Floral Detail', 
    category: 'NATURE', 
    location: 'Natură' 
  },
  { 
    id: 'cascada-padure', 
    src: '/cascada-padure.webp', 
    titleRo: 'Cascadă în Pădure', 
    titleEn: 'Forest Waterfall', 
    category: 'NATURE', 
    location: 'Pădure' 
  },
  { 
    id: 'frunza-macro', 
    src: '/frunza-macro.webp', 
    titleRo: 'Textură Frunză (Macro)', 
    titleEn: 'Leaf Texture Macro', 
    category: 'NATURE', 
    location: 'Natură' 
  },
  { 
    id: 'brad-macro', 
    src: '/brad-macro.webp', 
    titleRo: 'Micuțul Brad (Macro)', 
    titleEn: 'Pine Needle Macro', 
    category: 'NATURE', 
    location: 'Natură' 
  },
  { 
    id: 'camp-golden-hour', 
    src: '/camp-golden-hour.webp', 
    titleRo: 'Câmp la Golden Hour', 
    titleEn: 'Golden Hour Field', 
    category: 'NATURE', 
    location: 'Outdoor' 
  },
  { 
    id: 'turn-biserica', 
    src: '/turn-biserica.webp', 
    titleRo: 'Turnul Bisericii', 
    titleEn: 'Church Tower', 
    category: 'PORTRAIT', 
    location: 'Urban' 
  },
  { 
    id: 'sunset-golden', 
    src: '/sunset-golden.webp', 
    titleRo: 'Apus Auriu', 
    titleEn: 'Golden Sunset', 
    category: 'NATURE', 
    location: 'Outdoor' 
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'PORTRAIT' | 'NATURE'>('ALL');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = selectedCategory === 'ALL' 
    ? PORTFOLIO_PHOTOS 
    : PORTFOLIO_PHOTOS.filter(photo => photo.category === selectedCategory);

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-zinc-800 pb-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">ALEXANDRU</h1>
          <p className="text-zinc-400 text-sm mt-1">Photography Portfolio</p>
        </div>

        {/* Filtre */}
        <div className="flex gap-3">
          {(['ALL', 'PORTRAIT', 'NATURE'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-black'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Galerie */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative aspect-[4/5] bg-zinc-900 rounded-lg overflow-hidden cursor-pointer border border-zinc-800/50 hover:border-zinc-700 transition-all"
          >
            <Image
              src={photo.src}
              alt={photo.titleEn}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
              <span className="text-xs text-zinc-400 uppercase tracking-widest">{photo.location}</span>
              <h3 className="text-lg font-bold text-white mt-1">{photo.titleRo}</h3>
              <p className="text-xs text-zinc-400 italic">{photo.titleEn}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Modal Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-full max-h-[80vh]">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.titleEn}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">{selectedPhoto.titleRo}</h2>
              <p className="text-sm text-zinc-400">{selectedPhoto.titleEn} — {selectedPhoto.location}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
