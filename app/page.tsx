import Image from "next/image";

export default function Home() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
      title: "Urban Fashion Vignette",
      specs: "85mm f/1.4",
      location: "Kyoto Forest, JP",
    },
    {
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
      title: "Street Style Portrait",
      specs: "50mm f/1.8",
      location: "New York, USA",
    },
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop",
      title: "Editorial Edge",
      specs: "35mm f/2.8",
      location: "London, UK",
    },
    {
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
      title: "Bold & Abstract",
      specs: "24mm f/4.0",
      location: "Paris, FR",
    },
    {
      src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1000&auto=format&fit=crop",
      title: "Classic Monochrome",
      specs: "105mm f/2.0",
      location: "Milan, IT",
    },
    {
      src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1000&auto=format&fit=crop",
      title: "Serene Simplicity",
      specs: "135mm f/1.8",
      location: "Tokyo, JP",
    },
  ];

  return (
    <main style={{
      backgroundColor: "black",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      margin: 0,
      padding: "40px", // Am adăugat padding general pentru pagină
      boxSizing: "border-box",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>

      {/* Titlu Pagină */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{
          fontSize: "48px",
          fontWeight: "800",
          letterSpacing: "-1px",
          margin: 0
        }}>
          Prețuri
        </h1>
        <p style={{ color: "#888", fontSize: "18px", marginTop: "10px" }}>
          Selectează pachetul care ți se potrivește
        </p>
      </div>

      {/* Grid Imagini - Mai mic, max-width 350px per card */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", // Mai mic aici!
        gap: "40px",
        maxWidth: "1400px",
        margin: "0 auto",
        width: "100%",
        padding: "0 20px"
      }}>
        {photos.map((photo, index) => (
          <div key={index} style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #1a1a1a",
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: "#080808",
            maxWidth: "350px", // Limitează lățimea maximă!
            margin: "0 auto", // Centrează cardul
          }}>
            
            {/* Container imagine fix - Mai mic înălțime */}
            <div style={{
              width: "100%",
              height: "400px", // Am redus și înălțimea!
              position: "relative",
              overflow: "hidden"
            }}>
              <img 
                src={photo.src} 
                alt={photo.title} 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center"
                }}
              />
            </div>

            {/* Zona detalii */}
            <div style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              borderTop: "1px solid #1a1a1a"
            }}>
              <span style={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#666",
                fontWeight: 600
              }}>
                Portrait
              </span>
              <h2 style={{
                fontSize: "20px",
                margin: "0 0 10px 0",
                fontWeight: "700",
                letterSpacing: "-0.5px"
              }}>
                {photo.title}
              </h2>
              
              <div style={{
                fontSize: "13px",
                color: "#aaa",
                fontFamily: "monospace",
                display: "flex",
                flexDirection: "column",
                gap: "2px"
              }}>
                <div>{photo.specs}</div>
                <div style={{ fontSize: "11px", color: "#666", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {photo.location}
                </div>
              </div>

              {/* Buton - Mai compact */}
              <button style={{
                backgroundColor: "white",
                color: "black",
                border: "none",
                borderRadius: "6px",
                padding: "10px 16px",
                fontWeight: "bold",
                fontSize: "14px",
                cursor: "pointer",
                marginTop: "15px",
                alignSelf: "start"
              }}>
                Alege Pachet
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
