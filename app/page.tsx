export default function Home() {
  const srcPoza = "/numele_pozei_tale.jpg"; 

  return (
    <main style={{
      backgroundColor: "black",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      fontFamily: "sans-serif"
    }}>
      
      <div style={{
        flex: 1,
        position: "relative",
        width: "100%",
        height: "calc(100vh - 140px)",
        overflow: "hidden"
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

      <div style={{
        backgroundColor: "black",
        padding: "20px 30px",
        borderTop: "1px solid #1f1f1f",
        display: "flex",
        flexDirection: "column",
        gap: "5px"
      }}>
        <span style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: "#666"
        }}>
          Portrait
        </span>
        
        <h1 style={{
          fontSize: "24px",
          margin: "0 0 5px 0",
          fontWeight: "bold",
          letterSpacing: "-0.5px"
        }}>
          Urban Fashion Vignette
        </h1>
        
        <div style={{
          fontSize: "14px",
          color: "#aaa",
          fontFamily: "monospace"
        }}>
          <div style={{ marginBottom: "2px" }}>85mm f/1.4</div>
          <div style={{ fontSize: "11px", color: "#666", textTransform: "uppercase" }}>
            NATURE Kyoto Forest, JP
          </div>
        </div>
      </div>

    </main>
  );
}
