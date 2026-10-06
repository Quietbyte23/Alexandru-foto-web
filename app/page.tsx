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
  { id: "1", titleEn: "Church Tower", titleRo: "Turnul Bisericii", categoryRo: "Arhitectură", categoryEn: "ARCHITECTURE", location: "URBAN", src: "/portret-natura.webp" },
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
  const [activeTab, setActiveTab] = useState<"portofoliu" | "servicii" | "contact">("portofoliu");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", color: "#171717", fontFamily: "sans-serif" }}>
      {/* Header cu Meniu Functional */}
      <header style={{ borderBottom: "1px solid #e5e5e5", backgroundColor: "#ffffff", position: "sticky", top: 0, zIndex: 40, padding: "16px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontSize: "20px", fontWeight: "bold", margin: 0, letterSpacing: "-0.5px" }}>AXL</h1>
            <p style={{ fontSize: "10px", color: "#a3a3a3", margin: 0, letterSpacing: "1px" }}>VISUAL STUDIO</p>
          </div>

          <nav style={{ display: "flex", gap: "20px", fontSize: "14px", fontWeight: "600" }}>
            <button
              onClick={() => setActiveTab("portofoliu")}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === "portofoliu" ? "2px solid #000" : "2px solid transparent",
                paddingBottom: "4px",
                color: activeTab === "portofoliu" ? "#000" : "#737373",
                cursor: "pointer",
                fontWeight: "600"
              }}
            >
              Portofoliu
            </button>
            <button
              onClick={() => setActiveTab("servicii")}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === "servicii" ? "2px solid #000" : "2px solid transparent",
                paddingBottom: "4px",
                color: activeTab === "servicii" ? "#000" : "#737373",
                cursor: "pointer",
                fontWeight: "600"
              }}
            >
              Servicii
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === "contact" ? "2px solid #000" : "2px solid transparent",
                paddingBottom: "4px",
                color: activeTab === "contact" ? "#000" : "#737373",
                cursor: "pointer",
                fontWeight: "600"
              }}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* CONTINUT PORTOFOLIU (GRID ELEGANT 3 COLOANE) */}
      {activeTab === "portofoliu" && (
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {photosData.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid #e5e5e5",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                  cursor: "pointer",
                  transition: "transform 0.2s ease"
                }}
              >
                <div style={{ width: "100%", height: "240px", backgroundColor: "#eee", overflow: "hidden" }}>
                  <img
                    src={photo.src}
                    alt={photo.titleRo}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>

                <div style={{ padding: "16px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: "bold", color: "#888", marginBottom: "6px" }}>
                    <span>{photo.categoryEn}</span>
                    <span>{photo.location}</span>
                  </div>
                  <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "bold", color: "#111" }}>{photo.titleRo}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTINUT SERVICII */}
      {activeTab === "servicii" && (
        <section style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 20px", textAlign: "center" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "16px" }}>Servicii Foto Profesionale 📸</h2>
          <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.6" }}>
            Ofer servicii complete de fotografie outdoor, portrete, peisaje și fotografie comercială.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "40px", textAlign: "left" }}>
            <div style={{ padding: "24px", backgroundColor: "#fff", borderRadius: "16px", border: "1px solid #e5e5e5" }}>
              <h3 style={{ margin: "0 0 8px 0" }}>Ședințe Foto Portret</h3>
              <p style={{ color: "#777", fontSize: "14px", margin: 0 }}>Sesiuni foto individuale sau de cuplu în locații outdoor speciale.</p>
            </div>
            <div style={{ padding: "24px", backgroundColor: "#fff", borderRadius: "16px", border: "1px solid #e5e5e5" }}>
              <h3 style={{ margin: "0 0 8px 0" }}>Fotografie de Peisaj</h3>
              <p style={{ color: "#777", fontSize: "14px", margin: 0 }}>Printuri de înaltă rezoluție pentru decor interior și proiecte de brand.</p>
            </div>
          </div>
        </section>
      )}

      {/* CONTINUT CONTACT */}
      {activeTab === "contact" && (
        <section style={{ maxWidth: "600px", margin: "0 auto", padding: "60px 20px", textAlign: "center" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "16px" }}>Hai să colaborăm! ✉️</h2>
          <p style={{ color: "#666", fontSize: "16px", marginBottom: "32px" }}>
            Ai un proiect în minte sau vrei o ședință foto? Trimite-mi un mesaj!
          </p>
          <div style={{ backgroundColor: "#fff", padding: "32px", borderRadius: "20px", border: "1px solid #e5e5e5", textAlign: "left" }}>
            <p style={{ margin: "0 0 12px 0", fontWeight: "600" }}>Email: <span style={{ fontWeight: "normal", color: "#555" }}>alex@visualstudio.ro</span></p>
            <p style={{ margin: "0 0 12px 0", fontWeight: "600" }}>Instagram: <span style={{ fontWeight: "normal", color: "#555" }}>@alex.visuals</span></p>
            <p style={{ margin: 0, fontWeight: "600" }}>Locație: <span style={{ fontWeight: "normal", color: "#555" }}>România</span></p>
          </div>
        </section>
      )}

      {/* Lightbox Fullscreen */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            backgroundColor: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
        >
          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.titleRo}
            style={{ maxWidth: "90%", maxHeight: "85vh", objectFit: "contain", borderRadius: "12px" }}
          />
        </div>
      )}
    </main>
  );
}
