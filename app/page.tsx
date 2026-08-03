"use client";

import Image from "next/image";
import { useState } from "react";

// Importăm direct imaginile din public pentru a genera automat blurlhash-ul Next.js
import sunsetGolden from "../public/sunset-golden.webp";
import cathedralDetails from "../public/cathedral-details.webp";
import architecturalSymmetry from "../public/architectural-symmetry.webp";
import urbanPerspective from "../public/urban-perspective.webp";
import historicFacade from "../public/historic-facade.webp";
import shadowPlay from "../public/shadow-play.webp";
import goldenHourArch from "../public/golden-hour-arch.webp";
import streetMinimalism from "../public/street-minimalism.webp";

interface Photo {
  id: string;
  titleEn: string;
  titleRo: string;
  src: any;
}

const photos: Photo[] = [
  { id: "1", titleEn: "Golden Sunset", titleRo: "Apus Auriu", src: sunsetGolden },
  { id: "2", titleEn: "Cathedral Details", titleRo: "Detalii Catedrală", src: cathedralDetails },
  { id: "3", titleEn: "Architectural Symmetry", titleRo: "Simetrie Arhitecturală", src: architecturalSymmetry },
  { id: "4", titleEn: "Urban Perspective", titleRo: "Perspectivă Urbană", src: urbanPerspective },
  { id: "5", titleEn: "Historic Facade", titleRo: "Fațadă Istorică", src: historicFacade },
  { id: "6", titleEn: "Shadow Play", titleRo: "Joc de Umbre", src: shadowPlay },
  { id: "7", titleEn: "Golden Hour Arch", titleRo: "Arcadă la Apus", src: goldenHourArch },
  { id: "8", titleEn: "Street Minimalism", titleRo: "Minimalism Urban", src: streetMinimalism },
];

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-6 md:p-12">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-12 flex justify-between items-center border-b border-neutral-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Alexandru</h1>
          <p className="text-neutral-400 text-sm mt-1">Photography Portfolio</p>
        </div>
      </header>

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 cursor-pointer border border-neutral-800/50 hover:border-neutral-700 transition-all duration-300"
          >
            <Image
              src={photo.src}
              alt={photo.titleEn}
              fill
              placeholder="blur"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-sm font-medium text-white">{photo.titleRo}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.titleEn}
              placeholder="blur"
              className="object-contain max-h-[85vh] w-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </main>
  );
}
