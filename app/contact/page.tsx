'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [lang, setLang] = useState<'RO' | 'ENG'>('RO');
  const [form, setForm] = useState({ name: '', email: '', package: 'PORTRET_STANDARD', message: '' });

  // Numărul tău de telefon configurat corect pentru API-ul WhatsApp
  const NUMAR_TELEFON = '40743346249'; 

  const handleWhatsAppClick = () => {
    const textulMeu = encodeURIComponent(
      `Salut Alexandru! Numele meu este ${form.name || 'un client'}. Aș dori să discutăm despre pachetul ${form.package}. Detalii: ${form.message || 'O ședință foto.'}`
    );
    window.open(`https://wa.me/${NUMAR_TELEFON}?text=${textulMeu}`, '_blank');
  };

  return (
    <div style={{
      backgroundColor: '#f5f5f7',
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
            <Link href="/prices" style={{ color: '#515154', textDecoration: 'none' }}>
              {lang === 'RO' ? 'Servicii' : 'Services'}
            </Link>
            <Link href="/contact" style={{ color: '#1d1d1f', textDecoration: 'none', borderBottom: '1.5px solid #1d1d1f', paddingBottom: '2px' }}>
              Contact
            </Link>
            <div style={{ display: 'flex', gap: '6px', borderLeft: '1px solid #d2d2d7', paddingLeft: '16px', fontFamily: 'monospace' }}>
              <span onClick={() => setLang('RO')} style={{ cursor: 'pointer', fontWeight: lang === 'RO' ? 700 : 400, color: lang === 'RO' ? '#0066cc' : '#86868b' }}>RO</span>
              <span onClick={() => setLang('ENG')} style={{ cursor: 'pointer', fontWeight: lang === 'ENG' ? 700 : 400, color: lang === 'ENG' ? '#0066cc' : '#86868b' }}>ENG</span>
            </div>
          </nav>
        </div>
      </header>

      {/* FORMULAR + COMUNICARE WHATSAPP */}
      <main style={{ maxWidth: '500px', margin: '0 auto', padding: '60px 24px 100px 24px', boxSizing: 'border-box' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '-0.5px', margin: '0 0 8px 0', textAlign: 'center' }}>
          {lang === 'RO' ? 'Hai să programăm' : 'Let\'s talk'}
        </h2>
        <p style={{ fontSize: '15px', color: '#86868b', textAlign: 'center', marginBottom: '32px' }}>
          {lang === 'RO' ? 'Alege calea cea mai simplă pentru tine.' : 'Choose the method that works best for you.'}
        </p>

        {/* CASSETĂ WHATSAPP DIRECT */}
        <div style={{
          backgroundColor: '#25D366',
          color: '#ffffff',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
          fontWeight: 600,
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.2)',
          marginBottom: '32px',
          fontSize: '15px'
        }} onClick={handleWhatsAppClick}>
          💬 {lang === 'RO' ? 'Trimite mesaj rapid pe WhatsApp' : 'Quick Message via WhatsApp'}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '24px 0', color: '#86868b', fontSize: '13px' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#d2d2d7' }}></div>
          <span style={{ padding: '0 16px' }}>{lang === 'RO' ? 'SAU PRIN EMAIL' : 'OR VIA EMAIL'}</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#d2d2d7' }}></div>
        </div>

        {/* FORMULAR EMAIL */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '12px', fontWeight: 600, color: '#1d1d1f' }}>{lang === 'RO' ? 'NUME COMPLET' : 'FULL NAME'}</label>
            <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} style={{ border: '1px solid #d2d2d7', borderRadius: '8px', padding: '12px', fontSize: '14px', outline: 'none', backgroundColor: '#ffffff' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '12px', fontWeight: 600, color: '#1d1d1f' }}>EMAIL</label>
            <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} style={{ border: '1px solid #d2d2d7', borderRadius: '8px', padding: '12px', fontSize: '14px', outline: 'none', backgroundColor: '#ffffff' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '12px', fontWeight: 600, color: '#1d1d1f' }}>{lang === 'RO' ? 'PACHET DORIT' : 'CHOSEN PACKAGE'}</label>
            <select value={form.package} onChange={(e) => setForm({...form, package: e.target.value})} style={{ border: '1px solid #d2d2d7', borderRadius: '8px', padding: '12px', fontSize: '14px', backgroundColor: '#ffffff', outline: 'none' }}>
              <option value="PORTRET_STANDARD">📸 Ședință Foto Standard (300 lei)</option>
              <option value="MAJORAT">🎂 Majorat (De la 450 lei)</option>
              <option value="NUNTA">💍 Eveniment Nuntă (De la 2000 lei)</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '12px', fontWeight: 600, color: '#1d1d1f' }}>{lang === 'RO' ? 'MESAJE / IDEI' : 'MESSAGE / IDEAS'}</label>
            <textarea rows={4} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} style={{ border: '1px solid #d2d2d7', borderRadius: '8px', padding: '12px', fontSize: '14px', outline: 'none', backgroundColor: '#ffffff', resize: 'none' }} />
          </div>

          <button type="button" onClick={() => alert('Simulare trimitere email reușită!')} style={{ backgroundColor: '#0071e3', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '14px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', marginTop: '10px' }}>
            {lang === 'RO' ? 'Trimite Solicitare Email' : 'Send Email Request'}
          </button>
        </form>
      </main>
    </div>
  );
}
