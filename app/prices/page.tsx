'use client';

import Link from 'next/link';

export default function Prices() {
  return (
    <div style={{
      backgroundColor: '#050505',
      color: '#f4f4f5',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>
      
      {/* HEADER FIXAT */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        backgroundColor: 'rgba(5, 5, 5, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #18181b',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '2px', margin: 0, color: '#ffffff' }}>
              ALEXANDRU <span style={{ color: '#71717a', fontWeight: 300 }}>| PHOTOGRAPHY</span>
            </h1>
          </div>

          <nav style={{ display: 'flex', gap: '30px', fontFamily: 'monospace', fontSize: '12px', letterSpacing: '1px' }}>
            <Link href="/" style={{ color: '#a1a1aa', textDecoration: 'none', paddingBottom: '4px' }}>
              PORTOFOLIU
            </Link>
            <Link href="/prices" style={{ color: '#ffffff', textDecoration: 'none', borderBottom: '1px solid #ffffff', paddingBottom: '4px' }}>
              SERVICII & TARIFE
            </Link>
          </nav>
        </div>
      </header>

      {/* TITLU */}
      <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '80px 24px 40px 24px' }}>
        <p style={{ fontSize: '10px', fontFamily: 'monospace', letterSpacing: '4px', color: '#a1a1aa', margin: '0 0 16px 0', textTransform: 'uppercase' }}>
          TRANSPARENȚĂ // LISTĂ SERVICII 2026
        </p>
        <h2 style={{ fontSize: '36px', fontWeight: 200, letterSpacing: '-0.5px', margin: '0 0 16px 0', color: '#ffffff' }}>
          Servicii & Tarife
        </h2>
      </section>

      {/* GRID TARIFE */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 60px 24px', boxSizing: 'border-box' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          
          {/* SEDINTE FOTO */}
          <div style={{ padding: '30px', backgroundColor: '#09090b', border: '1px solid #18181b' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 400, margin: '0 0 20px 0', color: '#ffffff', letterSpacing: '1px' }}>📸 PORTRETE / ȘEDINȚE FOTO</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #18181b', paddingBottom: '8px' }}>
                <div><span style={{ color: '#ffffff' }}>Mini</span> <span style={{ color: '#71717a', fontSize: '12px' }}>(30 min, 15-20 foto)</span></div>
                <span style={{ fontWeight: 600 }}>150 LEI</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #18181b', paddingBottom: '8px' }}>
                <div><span style={{ color: '#ffffff' }}>Standard</span> <span style={{ color: '#71717a', fontSize: '12px' }}>(1 oră, 40-50 foto)</span></div>
                <span style={{ fontWeight: 600 }}>300 LEI</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px' }}>
                <div><span style={{ color: '#ffffff' }}>Premium</span> <span style={{ color: '#71717a', fontSize: '12px' }}>(2 ore, 80-100 foto)</span></div>
                <span style={{ fontWeight: 600, color: '#a1a1aa' }}>500 LEI</span>
              </div>
            </div>
          </div>

          {/* MAJORATE */}
          <div style={{ padding: '30px', backgroundColor: '#09090b', border: '1px solid #18181b' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 400, margin: '0 0 20px 0', color: '#ffffff', letterSpacing: '1px' }}>🎂 MAJORATE</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #18181b', paddingBottom: '8px' }}>
                <span style={{ color: '#ffffff' }}>Durată: 2 ore</span>
                <span style={{ fontWeight: 600 }}>450 LEI</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #18181b', paddingBottom: '8px' }}>
                <span style={{ color: '#ffffff' }}>Durată: 4 ore</span>
                <span style={{ fontWeight: 600 }}>800 LEI</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px' }}>
                <span style={{ color: '#ffffff' }}>Eveniment complet</span>
                <span style={{ fontWeight: 600 }}>1.200 - 1.500 LEI</span>
              </div>
            </div>
          </div>

          {/* NUNTI */}
          <div style={{ padding: '30px', backgroundColor: '#09090b', border: '1px solid #18181b' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 400, margin: '0 0 20px 0', color: '#ffffff', letterSpacing: '1px' }}>💍 NUNȚI</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #18181b', paddingBottom: '8px' }}>
                <span style={{ color: '#ffffff' }}>Cununie civilă</span>
                <span style={{ fontWeight: 600 }}>500 - 700 LEI</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #18181b', paddingBottom: '8px' }}>
                <span style={{ color: '#ffffff' }}>Nuntă (8-10 ore)</span>
                <span style={{ fontWeight: 600 }}>2.000 - 3.500 LEI</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px' }}>
                <span style={{ color: '#ffffff' }}>Pachet complet</span>
                <span style={{ fontWeight: 600 }}>3.500 - 5.000 LEI</span>
              </div>
            </div>
          </div>

          {/* BOTEZ */}
          <div style={{ padding: '30px', backgroundColor: '#09090b', border: '1px solid #18181b' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 400, margin: '0 0 20px 0', color: '#ffffff', letterSpacing: '1px' }}>👶 BOTEZ</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #18181b', paddingBottom: '8px' }}>
                <span style={{ color: '#ffffff' }}>Durată: 2-3 ore</span>
                <span style={{ fontWeight: 600 }}>600 - 900 LEI</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px' }}>
                <span style={{ color: '#ffffff' }}>Eveniment complet</span>
                <span style={{ fontWeight: 600 }}>1.200 - 1.800 LEI</span>
              </div>
            </div>
          </div>

          {/* ABSOLVIRE */}
          <div style={{ padding: '30px', backgroundColor: '#09090b', border: '1px solid #18181b' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 400, margin: '0 0 20px 0', color: '#ffffff', letterSpacing: '1px' }}>🎓 ABSOLVIRE / BANCHET</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #18181b', paddingBottom: '8px' }}>
                <span style={{ color: '#ffffff' }}>Ședință individuală</span>
                <span style={{ fontWeight: 600 }}>200 LEI</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px' }}>
                <span style={{ color: '#ffffff' }}>Grupuri</span>
                <span style={{ fontWeight: 600 }}>de la 150 LEI / pers.</span>
              </div>
            </div>
          </div>

          {/* CUPLURI SI ANIMALE */}
          <div style={{ padding: '30px', backgroundColor: '#09090b', border: '1px solid #18181b' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 400, margin: '0 0 20px 0', color: '#ffffff', letterSpacing: '1px' }}>❤️ CUPLURI & 🐶 ANIMALE</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #18181b', paddingBottom: '8px' }}>
                <span style={{ color: '#ffffff' }}>Cupluri (1 oră)</span>
                <span style={{ fontWeight: 600 }}>300 LEI</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #18181b', paddingBottom: '8px' }}>
                <span style={{ color: '#ffffff' }}>Cupluri (2 ore)</span>
                <span style={{ fontWeight: 600 }}>500 LEI</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px' }}>
                <span style={{ color: '#ffffff' }}>Animale de companie (30-45 min)</span>
                <span style={{ fontWeight: 600 }}>200 LEI</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* SECTIUNEA CE ESTE INCLUS */}
      <section style={{ maxWidth: '800px', margin: '40px auto 120px auto', padding: '40px 24px', borderTop: '1px solid #18181b' }}>
        <h3 style={{ fontSize: '14px', fontFamily: 'monospace', letterSpacing: '2px', color: '#ffffff', textTransform: 'uppercase', marginBottom: '24px', textAlign: 'center' }}>
          // CE ESTE INCLUS ÎN FIECARE PACHET
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', fontSize: '13px', color: '#a1a1aa' }}>
          <div>✅ Fotografii editate profesional fin</div>
          <div>✅ Livrare digitală securizată (Google Drive / WeTransfer)</div>
          <div>✅ Toate cadrele predate sunt fără filigran</div>
          <div>✅ Livrare rapidă în 3-7 zile lucrătoare</div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#ffffff', color: '#000000', fontFamily: 'monospace', fontSize: '11px', letterSpacing: '2px', padding: '16px 32px', textDecoration: 'none', fontWeight: 600 }}>
            REZERVĂ O ȘEDINȚĂ FOTO →
          </Link>
        </div>
      </section>

    </div>
  );
}
