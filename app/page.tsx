"use client";

import { useState } from "react";

interface Photo {
  id: string;
  titleEn: string;
  titleRo: string;
  categoryRo: string;
  categoryEn: string;
  location: string;
  src: string;
}

const photosData: Photo[] = [
  { id: "1", titleEn: "Turnul Bisericii", titleRo: "Turnul Bisericii", categoryRo: "Natură", categoryEn: "OUTDOOR", location: "OUTDOOR", src: "/IMG_7076.jpeg" },
  { id: "2", titleEn: "Natural Portrait", titleRo: "Portret în Natură", categoryRo: "Portrete", categoryEn: "PORTRAIT", location: "NATURĂ", src: "/portret-natura.webp" },
  { id: "3", titleEn: "Pure Landscape", titleRo: "Orizont Simplu", categoryRo: "Natură", categoryEn: "NATURE", location: "OUTDOOR", src: "/peisaj-simplu.webp" },
  { id: "4", titleEn: "Forest Waterfall", titleRo: "Cascadă în Pădure", categoryRo: "Natură", categoryEn: "NATURE", location: "NATURĂ", src: "/IMG_7078.jpeg" },
  { id: "5", titleEn: "Leaf Texture Macro", titleRo: "Textură Frunză (Macro)", categoryRo: "Natură", categoryEn: "NATURE", location: "NATURĂ", src: "/IMG_7079.jpeg" },
  { id: "6", titleEn: "Pine Needle Macro", titleRo: "Micuțul Brad (Macro)", categoryRo: "Natură", categoryEn: "NATURE", location: "OUTDOOR", src: "/IMG_7125.jpeg" },
  { id: "7", titleEn: "Golden Hour Field", titleRo: "Câmp la Golden Hour", categoryRo: "Natură", categoryEn: "NATURE", location: "URBAN", src: "/977d2346-ba8e-45f2-aca2-e5bea8a6bc63.jpeg" },
  { id: "8", titleEn: "Photo Capture", titleRo: "Fotografie Captură", categoryRo: "Portrete", categoryEn: "PORTRAIT", location: "OUTDOOR", src: "/IMG_7263.jpeg" },
  { id: "9", titleEn: "Landscape View", titleRo: "Vedere Peisaj", categoryRo: "Natură", categoryEn: "NATURE", location: "OUTDOOR", src: "/IMG_3514.jpeg" },
];

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", color: "#171717", fontFamily: "sans-serif", paddingBottom: "60px" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid #e5e5e5", backgroundColor: "#ffffff", position: "sticky", top: 0, zIndex: 40, padding: "16px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>AXL</h1>
            <p style={{ fontSize: "11px", color: "#a3a3a3", margin: 0, letterSpacing: "1px" }}>VISUAL STUDIO</p>
          </div>
          <nav style={{ display: "flex", gap: "16px", fontSize: "13px", fontWeight: "600" }}>
            <span style={{ borderBottom: "2px solid #000", paddingBottom: "2px" }}>Portofoliu</span>
            <span style={{ color: "#737373" }}>Servicii</span>
            <span style={{ color: "#737373" }}>Contact</span>
          </nav>
        </div>
      </header>

      {/* Galerie Foto cu spațiere corectă */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "24px 16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {photosData.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid #e5e5e5",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                cursor: "pointer"
              }}
            >
              <div style={{ width: "100%", maxHeight: "500px", overflow: "hidden", backgroundColor: "#eee" }}>
                <img
                  src={photo.src}
                  alt={photo.titleRo}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>

              <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "11px", fontWeight: "bold", color: "#888", marginBottom: "6px" }}>
                  <span>{photo.categoryEn}</span>
                  <span>{photo.location}</span>
                </div>
                <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "bold", color: "#111" }}>{photo.titleRo}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Fullscreen */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            backgroundColor: "rgba(0,0,0,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px"
          }}
        >
          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.titleRo}
            style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain", borderRadius: "8px" }}
          />
        </div>
      )}
    </main>
  );
}
