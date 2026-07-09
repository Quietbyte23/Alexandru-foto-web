'use client';

import React, { useState } from 'react';
import Link from 'next/link';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    package: 'PKG_01',
    concept: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Solicitare Sesiune Foto: ${formData.package} - ${formData.name}`);
    const body = encodeURIComponent(
      `Salut, Alexandru,\n\n` +
      `Nume Client: ${formData.name}\n` +
      `Email Contact: ${formData.email}\n` +
      `Pachet Selectat: ${formData.package}\n\n` +
      `Concept / Detalii Proiect:\n${formData.concept}\n\n` +
      `Trimis via alexandru.photography`
    );

    window.location.href = `mailto:alex@yourdomain.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-[#030303] text-zinc-100 selection:bg-zinc-400 selection:text-black p-4">
      {/* Header consistent */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center border-b border-zinc-900/40">
        <div>
          <Link href="/" className="text-md font-medium tracking-[0.2em] uppercase text-white hover:opacity-80 transition-opacity">
            ALEXANDRU <span className="text-zinc-500 font-light">| PHOTOGRAPHY</span>
          </Link>
        </div>
        <nav className="flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
          <Link href="/" className="text-zinc-500 hover:text-zinc-200 transition-colors">Portofoliu</Link>
          <span className="text-white border-b border-white pb-1 font-medium cursor-default">Contact</span>
        </nav>
      </header>

      {/* Zona Formular */}
      <section className="max-w-2xl mx-auto pt-20 pb-32 px-4">
        <div className="text-center mb-12">
          <p className="text-[10px] font-mono tracking-[0.4em] text-zinc-500 uppercase mb-2">// BOOKING ENGINE</p>
          <h2 className="text-3xl font-light tracking-tight text-white">Inițiază o sesiune foto</h2>
          <p className="text-xs text-zinc-400 mt-2 font-light">Completează detaliile de mai jos pentru a stabili conceptul vizual.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
          <div>
            <label className="block text-zinc-400 uppercase tracking-wider mb-2">Nume Complet *</label>
            <input 
              type="text" 
              required
              className="w-full bg-zinc-950 border border-zinc-900 rounded p-3 text-white focus:outline-none focus:border-zinc-500 transition-colors"
              placeholder="Ex: Alex Popescu"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-zinc-400 uppercase tracking-wider mb-2">Adresă Email *</label>
            <input 
              type="email" 
              required
              className="w-full bg-zinc-950 border border-zinc-900 rounded p-3 text-white focus:outline-none focus:border-zinc-500 transition-colors"
              placeholder="Ex: alex@exemplu.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-zinc-400 uppercase tracking-wider mb-2">Tipul de Sesiune / Pachet</label>
            <select 
              className="w-full bg-zinc-950 border border-zinc-900 rounded p-3 text-white focus:outline-none focus:border-zinc-500 transition-colors appearance-none"
              value={formData.package}
              onChange={(e) => setFormData({...formData, package: e.target.value})}
            >
              <option value="PKG_01_PORTRAIT">PORTRET CINEMATIC (180€)</option>
              <option value="PKG_02_NATURE">PEISAJ / ADVENTURE EDITORIAL (400€)</option>
              <option value="PKG_03_CUSTOM">FINE ART ARCHIVE (750€+)</option>
            </select>
          </div>

          <div>
            <label className="block text-zinc-400 uppercase tracking-wider mb-2">Ideea sau Conceptul tău (Locație, vibe, haine) *</label>
            <textarea 
              rows={5}
              required
              className="w-full bg-zinc-950 border border-zinc-900 rounded p-3 text-white focus:outline-none focus:border-zinc-500 transition-colors resize-none leading-relaxed"
              placeholder="Descrie pe scurt ce ai în minte pentru această sesiune..."
              value={formData.concept}
              onChange={(e) => setFormData({...formData, concept: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-zinc-100 hover:bg-white text-black font-semibold py-4 rounded tracking-widest uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
          >
            Trimite Solicitarea via Email
          </button>
        </form>
      </section>

      <footer className="text-center py-8 border-t border-zinc-900 text-[10px] text-zinc-600 font-mono">
        &copy; 2026 ALEXANDRU PHOTOGRAPHY. SECURE ENCRYPTED TRANSFER.
      </footer>
    </main>
  );
}

export default ContactPage;