'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', package: 'PORTRAIT', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mulțumesc, ${form.name}! Mesajul tău a fost trimis. Voi reveni în 24h.`);
  };

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
            <Link href="/prices" style={{ color: '#a1a1aa', textDecoration: 'none', paddingBottom: '4px' }}>
              SERVICII & TARIFE
            </Link>
          </nav>
        </div>
      </header>

      {/* FORMULAR CONTACT SECȚIUNE */}
      <main style={{ maxWidth: '600px', margin: '0 auto', padding: '80px 24px 120px 24px', boxSizing: 'border-box' }}>
        <p style={{ fontSize: '10px', fontFamily: 'monospace', letterSpacing: '4px', color: '#a1a1aa', margin: '0 0 16px 0', textTransform: 'uppercase', textAlign: 'center' }}>
          SĂ CREĂM CEVA DEOSEBIT // BOOKINGS 2026
        </p>
        <h2 style={{ fontSize: '32px', fontWeight: 200, letterSpacing: '-0.5px', margin: '0 0 40px 0', color: '#ffffff', textAlign: 'center' }}>
          Discută o sesiune foto
        </h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Aici am corectat textTransform la standardul TypeScript */}
            <label style={{ fontSize: '10px', fontFamily: 'monospace', color: '#71717a', textTransform: 'uppercase', letterSpacing: '1px' }}>NUME COMPLET</label>
            <input 
              type="text" 
              required
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              style={{ backgroundColor: '#09090b', border: '1px solid #18181b', padding: '14px', color: '#ffffff', fontSize: '14px', outline: 'none' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '10px', fontFamily: 'monospace', color: '#71717a', textTransform: 'uppercase', letterSpacing: '1px' }}>ADRESĂ DE EMAIL</label>
            <input 
              type="email" 
              required
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              style={{ backgroundColor: '#09090b', border: '1px solid #18181b', padding: '14px', color: '#ffffff', fontSize: '14px', outline: 'none' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '10px', fontFamily: 'monospace', color: '#71717a', textTransform: 'uppercase', letterSpacing: '1px' }}>PACHETUL DORIT</label>
            <select 
              value={form.package}
              onChange={(e) => setForm({...form, package: e.target.value})}
              style={{ backgroundColor: '#09090b', border: '1px solid #18181b', padding: '14px', color: '#ffffff', fontSize: '14px', outline: 'none', appearance: 'none' }}
            >
              <option value="PORTRAIT">PORTRET EDITORIAL (250€)</option>
              <option value="FASHION">FASHION & LOOKBOOK (450€)</option>
              <option value="COMMERCIAL">PEISAJ / COMERCIAL (CUSTOM)</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '10px', fontFamily: 'monospace', color: '#71717a', textTransform: 'uppercase', letterSpacing: '1px' }}>DETALII VIZIUNE / CONTEXT PROIECT</label>
            <textarea 
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({...form, message: e.target.value})}
              placeholder="Spune-mi câteva cuvinte despre ideea ta..."
              style={{ backgroundColor: '#09090b', border: '1px solid #18181b', padding: '14px', color: '#ffffff', fontSize: '14px', outline: 'none', resize: 'none', fontFamily: 'inherit' }}
            />
          </div>

          <button 
            type="submit" 
            style={{
              backgroundColor: '#ffffff', 
              color: '#000000', 
              border: '1px solid #ffffff', 
              padding: '16px', 
              fontSize: '12px', 
              fontFamily: 'monospace', 
              fontWeight: 600, 
              letterSpacing: '2px', 
              cursor: 'pointer',
              marginTop: '10px',
              transition: 'background-color 0.3s'
            }}
          >
            TRIMITE SOLICITAREA →
          </button>
        </form>
      </main>
    </div>
  );
}
