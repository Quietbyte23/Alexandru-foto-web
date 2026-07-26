'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ServicePackage {
  id: string;
  titleRo: string;
  titleEn: string;
  priceRo: string;
  priceEn: string;
  featuresRo: string[];
  featuresEn: string[];
  popular: boolean;
}

const PACKAGES: ServicePackage[] = [
  {
    id: '1',
    titleRo: 'Portret Standard',
    titleEn: 'Standard Portrait',
    priceRo: '300 RON',
    priceEn: '€60',
    featuresRo: ['1 oră de sesiune foto', 'Studio sau locație urbană', '15 fotografii editate profesional', 'Livrare în 7 zile'],
    featuresEn: ['1 hour photo session', 'Studio or outdoor location', '15 professionally edited photos', '7-day delivery'],
    popular: false,
  },
  {
    id: '2',
    titleRo: 'Portret Premium / Editorial',
    titleEn: 'Premium Editorial',
    priceRo: '500 RON',
    priceEn: '€100',
    featuresRo: ['2 ore de sesiune foto', 'Schimbări multiple de ținute', '30 de fotografii editate în detaliu', 'Livrare prioritară (3 zile)'],
    featuresEn: ['2 hours photo session', 'Multiple outfit changes', '30 fully retouched photos', 'Priority delivery (3 days)'],
    popular: true,
  },
  {
    id: '3',
    titleRo: 'Eveniment / Majorat',
    titleEn: 'Event / Party',
    priceRo: 'de la 450 RON',
    priceEn: 'from €90',
    featuresRo: ['Fotografiere pe toată durata evenimentului', 'Toate pozele optimizate și corectate', 'Album digital securizat', 'Predare rapidă'],
    featuresEn: ['Full event coverage', 'All photos color corrected', 'Secured digital album', 'Fast delivery'],
    popular: false,
  }
];

export default function Prices() {
  const [lang, setLang] = useState<'RO' | 'ENG'>('RO');

  return (
    <div style={{
      backgroundColor: '#f5f5f7', // Aceeași culoare curată ca pe Home și Contact
      color: '#1d1d1f',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>
      
      {/* HEADER */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        backgroundColor: 'rgba(245, 245, 247, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #d2d2d7'
      }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '1.5px', margin: 0 }}>
              AXL <span style={{ color: '#86868b', fontWeight: 400 }}>VISUAL STUDIO</span>
            </h1>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '24px', fontSize: '12px', fontWeight: 500 }}>
            <Link href="/" style={{ color: '#515154', textDecoration: 'none' }}>
              {lang === 'RO' ? 'Portofoliu' : 'Portfolio'}
            </Link>
            <Link href="/prices" style={{ color: '#1d1d1f', textDecoration: 'none', borderBottom: '1.5px solid #1d1d1f', paddingBottom: '2px' }}>
              {lang === 'RO' ? 'Servicii' : 'Services'}
            </Link>
            <Link href="/contact" style={{ color: '#515154', textDecoration: 'none' }}>
              Contact
            </Link>
            <div style={{ display: 'flex', gap: '6px', borderLeft: '1px solid #d2d2d7', paddingLeft: '16px', fontFamily: 'monospace' }}>
              <span onClick={() => setLang('RO')} style={{ cursor: 'pointer', fontWeight: lang === 'RO' ? 700 : 400, color: lang === 'RO' ? '#0066cc' : '#86868b' }}>RO</span>
              <span onClick={() => setLang('ENG')} style={{ cursor: 'pointer', fontWeight: lang === 'ENG' ? 700 : 400, color: lang === 'ENG' ? '#0066cc' : '#86868b' }}>ENG</span>
            </div>
          </nav>
        </div>
      </header>

      {/* TITLU SECTIUNE */}
      <main style={{ maxWidth: '1024px', margin: '0 auto', padding: '60px 24px 100px 24px', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.5px', margin: '0 0 12px 0' }}>
            {lang === 'RO' ? 'Servicii & Tarife' : 'Services & Pricing'}
          </h2>
          <p style={{ fontSize: '17px', color: '#86868b', margin: 0 }}>
            {lang === 'RO' ? 'Prețuri transparente, fără costuri ascunse.' : 'Transparent pricing, no hidden fees.'}
          </p>
        </div>

        {/* GRILĂ SIMETRICĂ PACHETE */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          alignItems: 'start'
        }}>
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                padding: '32px 24px',
                boxShadow: pkg.popular ? '0 10px 25px rgba(0,0,0,0.08)' : '0 4px 12px rgba(0,0,0,0.03)',
                border: pkg.popular ? '2px solid #0071e3' : '1px solid #d2d2d7',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxSizing: 'border-box'
              }}
            >
              {pkg.popular && (
                <span style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#0071e3',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 600,
                  padding: '4px 12px',
                  borderRadius: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {lang === 'RO' ? 'Cel mai popular' : 'Most Popular'}
                </span>
              )}

              <h3 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 8px 0' }}>
                {lang === 'RO' ? pkg.titleRo : pkg.titleEn}
              </h3>
              
              <div style={{ fontSize: '28px', fontWeight: 700, margin: '16px 0 24px 0', color: '#1d1d1f' }}>
                {lang === 'RO' ? pkg.priceRo : pkg.priceEn}
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {(lang === 'RO' ? pkg.featuresRo : pkg.featuresEn).map((feat, idx) => (
                  <li key={idx} style={{ fontSize: '14px', color: '#515154', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#0071e3', fontWeight: 'bold' }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link href="/contact" style={{
                display: 'block',
                textAlign: 'center',
                backgroundColor: pkg.popular ? '#0071e3' : '#e8e8ed',
                color: pkg.popular ? '#ffffff' : '#1d1d1f',
                textDecoration: 'none',
                padding: '12px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'background-color 0.2s'
              }}>
                {lang === 'RO' ? 'Rezervă Sesiune' : 'Book Session'}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
