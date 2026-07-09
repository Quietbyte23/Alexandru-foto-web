export default function Home() {
  // Folosim o imagine direct de pe internet pentru test ca să fii sigur că merge instant!
  const srcPoza = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"; 

  return (
    <main style={{
      backgroundColor: "black",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      
      {/* Containerul imaginii */}
      <div style={{
        flex: 1,
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <img 
          src={srcPoza} 
          alt="Urban Fashion Vignette" 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
      </div>

      {/* Bara de jos premium */}
      <div style={{
        backgroundColor: "black",
        padding: "30px 40px",
        borderTop: "1px solid #121212",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: "20px"
      }}>
        <div>
          <span style={{
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "#555",
            fontWeight: 600,
            display: "block",
            marginBottom: "4px"
          }}>
            Portrait
          </span>
          <h1 style={{
            fontSize: "28px",
            margin: 0,
            fontWeight: "700",
            letterSpacing: "-0.5px"
          }}>
            Urban Fashion Vignette
          </h1>
        </div>
        
        <div style={{
          fontSize: "14px",
          color: "#888",
          fontFamily: "monospace",
          textAlign: "right",
          lineHeight: "1.5"
        }}>
          <div style={{ color: "#aaa", fontWeight: "bold" }}>85mm f/1.4</div>
          <div style={{ fontSize: "11px", color: "#555", textTransform: "uppercase", letterSpacing: "1px" }}>
            NATURE Kyoto Forest, JP
          </div>
        </div>
      </div>

    </main>
  );
}
