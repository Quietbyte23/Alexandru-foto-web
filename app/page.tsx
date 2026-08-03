"use client";

import Image from "next/image";
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
  { id: "1", titleEn: "Natural Portrait", titleRo: "Portret în Natură", categoryRo: "Portrete", categoryEn: "PORTRAIT", location: "NATURĂ", src: "/portret-natura.webp" },
  { id: "2", titleEn: "Pure Landscape", titleRo: "Orizont Simplu", categoryRo: "Natură", categoryEn: "NATURE", location: "OUTDOOR", src: "/peisaj-simplu.webp" },
  { id: "3", titleEn: "Urban Cadre", titleRo: "Cadru Urban", categoryRo: "Portrete", categoryEn: "PORTRAIT", location: "NATURE", src: "/cadru-urban.webp" },
  { id: "4", titleEn: "Forest Waterfall", titleRo: "Cascadă în Pădure", categoryRo: "Natură", categoryEn: "NATURE", location: "NATURĂ", src: "/cascada-padure.webp" },
  { id: "5", titleEn: "Leaf Texture Macro", titleRo: "Textură Frunză (Macro)", categoryRo: "Natură", categoryEn: "NATURE", location: "NATURĂ", src: "/frunza-macro.webp" },
  { id: "6", titleEn: "Pine Needle Macro", titleRo: "Micuțul Brad (Macro)", categoryRo: "Natură", categoryEn: "NATURE", location: "OUTDOOR", src: "/brad-macro.webp" },
  { id: "7", titleEn: "Golden Hour Field", titleRo: "Câmp la Golden Hour", categoryRo: "Natură", categoryEn: "NATURE", location: "URBAN", src: "/camp-golden-hour.webp" },
  { id: "8", titleEn: "Church Tower", titleRo: "Turnul Bisericii", categoryRo: "Natură", categoryEn: "NATURE", location: "OUTDOOR", src: "/turn-biserica.webp" },
  { id: "9", titleEn: "Golden Sunset", titleRo: "Apus Auriu", categoryRo: "Natură", categoryEn: "NATURE", location: "OUTDOOR", src: "/sunset-golden.webp" },
];

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#171717", fontFamily: "sans-serif" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid #e5e5e5", backgroundColor: "#ffffff", position: "sticky", top: 0, zIndex: 40, padding: "20px 24px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: 0, letterSpacing: "-0.5px" }}>
            AXL <span style={{ color: "#a3a3a3", fontWeight: "300" }}>VISUAL STUDIO</span>
          </h1>
          <nav style={{ display: "flex", gap: "24px", fontSize: "14px", fontWeight: "500", alignItems: "center" }}>
            <span style={{ color: "#171717", cursor: "pointer" }}>Portofoliu</span>
            <span style={{ color: "#737373", cursor: "pointer" }}>Servicii</span>
            <span style={{ color: "#737373", cursor: "pointer" }}>Contact</span>
            <div style={{ paddingLeft: "16px", borderLeft: "1px solid #e5e5e5", display: "flex", gap: "6px" }}>
              <span style={{ fontWeight: "bold" }}>RO</span>
              <span style={{ color: "#d4d4d4" }}>|</span>
              <span style={{ color: "#737373" }}>ENG</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Categorii */}
      <section style={{ backgroundColor: "#f5f5f5", borderBottom: "1px solid #e5e5e5", padding: "16px 24px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", justifyContent: "center", gap: "8px" }}>
          <button style={{ backgroundColor: "#ffffff", border: "1px solid #d4d4d4", borderRadius: "9999px", padding: "8px 20px", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>Toate</button>
          <button style={{ backgroundColor: "transparent", border: "none", borderRadius: "9999px", padding: "8px 20px", color: "#737373", fontSize: "14px", cursor: "pointer" }}>Portrete</button>
          <button style={{ backgroundColor: "transparent", border: "none", borderRadius: "9999px", padding: "8px 20px", color: "#737373", fontSize: "14px", cursor: "pointer" }}>Natură</button>
        </div>
      </section>

      {/* Galerie Foto */}
      <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "32px" }}>
          {photosData.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid #f5f5f5",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", backgroundColor: "#e5e5e5" }}>
                <Image
                  src={photo.src}
                  alt={photo.titleEn}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>

              <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px", flexGrow: 1, justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "600", color: "#0a0a0a" }}>{photo.titleRo}</h3>
                  <p style={{ margin: "4px 0 0 0", fontSize: "14px", color: "#737373" }}>{photo.titleEn}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #f5f5f5", paddingTop: "16px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <span style={{ fontSize: "11px", fontWeight: "bold", color: "#a3a3a3", textTransform: "uppercase" }}>{photo.categoryEn}</span>
                    <span style={{ fontSize: "13px", color: "#404040", fontWeight: "500" }}>{photo.categoryRo}</span>
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: "500", color: "#a3a3a3", textTransform: "uppercase" }}>{photo.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal / Lightbox */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            cursor: "pointer"
          }}
        >
          <div style={{ position: "relative", maxWidth: "1000px", maxHeight: "80vh", width: "100%", height: "100%", display: "flex", flexDirection: "column", itemsCenter: "center" }}>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.titleEn}
                fill
                style={{ objectFit: "contain" }}
                unoptimized
              />
            </div>
            <div style={{ textAlign: "center", marginTop: "16px", color: "#ffffff" }}>
              <h2 style={{ margin: 0, fontSize: "20px" }}>{selectedPhoto.titleRo}</h2>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
