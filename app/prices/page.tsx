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

      {/* TITLU PAGINĂ */}
      <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '80px 24px 40px 24px' }}>
        <p style={{ fontSize: '10px', fontFamily: 'monospace', letterSpacing: '4px', color: '#a1a1aa', margin: '0 0 16px 0', textTransform: 'uppercase' }}>
          INVESTIȚIE // COOPERARE ARTISTICĂ
        </p>
        <h2 style={{ fontSize: '36px', fontWeight: 200, letterSpacing: '-0.5px', margin: '0 0 16px 0', color: '#ffffff' }}>
          Servicii & Tarife <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#a1a1aa' }}>2026</span>
        </h2>
      </section>

      {/* CARDS PACHETE */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 120px 24px', boxSizing: 'border-box' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          
          {/* PACHET 1 */}
          <div style={{ padding: '40px 30px', backgroundColor: '#09090b', border: '1px solid #18181b', display: 'flex', flexDirection: 'column', justifyItems: 'space-between' }}>
            <div>
              <p style={{ fontFamily: 'monospace', fontSize: '10px', color: '#71717a', margin: '0 0 10px 0' }}>01 // ESSENTIAL</p>
              <h3 style={{ fontSize: '20px', fontWeight: 400, margin: '0 0 20px 0', color: '#ffffff' }}>Portret Editorial</h3>
              <p style={{ fontSize: '24px', fontWeight: 300, color: '#f4f4f5', margin: '0 0 30px 0' }}>250 €</p>
              <ul style={{ paddingLeft: '0', listStyle: 'none', fontSize: '13px', color: '#a1a1aa', lineHeight: '2.2', margin: '0 0 40px 0' }}>
                <li>• 1.5 ore sesiune foto (Studio / Outdoor)</li>
                <li>• 15 fotografii editate profesional fin</li>
                <li>• Consultanță stilistică și moodboard</li>
                <li>• Livrare privată în galerie digitală (14 zile)</li>
              </ul>
            </div>
            <Link href="/contact" style={{ display: 'block', textAlign: 'center', backgroundColor: 'transparent', border: '1px solid #27272a', padding: '12px 0', fontSize: '11px', fontFamily: 'monospace', color: '#ffffff', textDecoration: 'none', letterSpacing: '1px' }}>
              REZERVĂ ACUM
            </Link>
          </div>

          {/* PACHET 2 */}
          <div style={{ padding: '40px 30px', backgroundColor: '#0c0c0e', border: '1px solid #f4f4f5', display: 'flex', flexDirection: 'column', justifyItems: 'space-between', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '15px', right: '20px', fontFamily: 'monospace', fontSize: '8px', color: '#ffffff', border: '1px solid #ffffff', padding: '2px 6px' }}>RECOMMENDED</span>
            <div>
              <p style={{ fontFamily: 'monospace', fontSize: '10px', color: '#a1a1aa', margin: '0 0 10px 0' }}>02 // PREMIUM</p>
              <h3 style={{ fontSize: '20px', fontWeight: 400, margin: '0 0 20px 0', color: '#ffffff' }}>Fashion & Lookbook</h3>
              <p style={{ fontSize: '24px', fontWeight: 300, color: '#f4f4f5', margin: '0 0 30px 0' }}>450 €</p>
              <ul style={{ paddingLeft: '0', listStyle: 'none', fontSize: '13px', color: '#a1a1aa', lineHeight: '2.2', margin: '0 0 40px 0' }}>
                <li>• 3 ore sesiune foto (Locații multiple)</li>
                <li>• 35 fotografii procesate high-end retail</li>
                <li>• Schimbări nelimitate de ținute</li>
                <li>• Drepturi comerciale de utilizare incluse</li>
              </ul>
            </div>
            <Link href="/contact" style={{ display: 'block', textAlign: 'center', backgroundColor: '#ffffff', border: '1px solid #ffffff', padding: '12px 0', fontSize: '11px', fontFamily: 'monospace', color: '#000000', textDecoration: 'none', fontWeight: 600, letterSpacing: '1px' }}>
              REZERVĂ ACUM
            </Link>
          </div>

          {/* PACHET 3 */}
          <div style={{ padding: '40px 30px', backgroundColor: '#09090b', border: '1px solid #18181b', display: 'flex', flexDirection: 'column', justifyItems: 'space-between' }}>
            <div>
              <p style={{ fontFamily: 'monospace', fontSize: '10px', color: '#71717a', margin: '0 0 10px 0' }}>03 // CUSTOM</p>
              <h3 style={{ fontSize: '20px', fontWeight: 400, margin: '0 0 20px 0', color: '#ffffff' }}>Peisaj & Comercial</h3>
              <p style={{ fontSize: '24px', fontWeight: 300, color: '#f4f4f5', margin: '0 0 30px 0' }}>De la 600 €</p>
              <ul style={{ paddingLeft: '0', listStyle: 'none', fontSize: '13px', color: '#a1a1aa', lineHeight: '2.2', margin: '0 0 40px 0' }}>
                <li>• Proiecte personalizate de brand / turism</li>
                <li>• Licențiere exclusivă imagini rezoluție mare</li>
                <li>• Editare avansată pentru printuri mari</li>
                <li>• Deplasări internaționale la cerere</li>
              </ul>
            </div>
            <Link href="/contact" style={{ display: 'block', textAlign: 'center', backgroundColor: 'transparent', border: '1px solid #27272a', padding: '12px 0', fontSize: '11px', fontFamily: 'monospace', color: '#ffffff', textDecoration: 'none', letterSpacing: '1px' }}>
              SOLICITĂ OFERTĂ
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
