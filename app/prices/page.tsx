'use client';

import React from 'react';
import Link from 'next/link';

function PricesPage() {
  // Lista ta completă de servicii în LEI (Fără nunți)
  const categories = [
    {
      title: '📸 Portrete & Ședințe Foto',
      items: [
        { name: 'Pachet Mini (30 min, 15-20 fotografii editate)', price: '150 lei' },
        { name: 'Pachet Standard (1 oră, 40-50 fotografii)', price: '300 lei' },
        { name: 'Pachet Premium (2 ore, 80-100 fotografii)', price: '500 lei' },
      ]
    },
    {
      title: '🎂 Majorate',
      items: [
        { name: 'Sesiune 2 Ore', price: '450 lei' },
        { name: 'Sesiune 4 Ore', price: '800 lei' },
        { name: 'Eveniment Complet', price: '1.200 - 1.500 lei' },
      ]
    },
    {
      title: '👶 Botezuri',
      items: [
        { name: 'Sesiune 2-3 Ore', price: '600 - 900 lei' },
        { name: 'Eveniment Complet', price: '1.200 - 1.800 lei' },
      ]
    },
    {
      title: '🎓 Absolvire / Banchet',
      items: [
        { name: 'Ședință Individuală', price: '200 lei' },
        { name: 'Grupuri (În funcție de nr. de persoane)', price: 'de la 150 lei / pers.' },
      ]
    },
    {
      title: '❤️ Cupluri',
      items: [
        { name: 'Sesiune 1 Oră', price: '300 lei' },
        { name: 'Sesiune 2 Ore', price: '500 lei' },
      ]
    },
    {
      title: '🐶 Animale de Companie',
      items: [
        { name: 'Sesiune Rapidă (30-45 minute)', price: '200 lei' },
      ]
    }
  ];

  // Ce este inclus în fiecare ședință
  const inclusions = [
    'Fotografii editate  (culoare, contrast, vibe)',
    'Livrare rapidă în format digital securizat (Google Drive sau WeTransfer)',
    'Imagini curate, livrate integral FĂRĂ filigran',
    'Timp de livrare record: doar 3-7 zile lucrătoare',
  ];

  // Echipamentul tău Canon
  const gear = [
    { category: 'CORP CAMERĂ', items: ['Canon EOS R6 (Senzor Full-Frame avansat, culori legendare și autofocus ultra-rapid)'] },
    { category: 'OBIECTIV TOP', items: ['Canon RF 24-105mm Pro Series (De la cadre ultra-largi de peisaj la portrete strânse la 105mm)'] },
    { category: 'DIGITAL LABORATORY', items: ['MacBook Pro / Stație de editare', 'Adobe Lightroom & Photoshop (Colorizare și textură custom)'] },
  ];

  return (
    <main className="min-h-screen bg-[#030303] text-zinc-100 selection:bg-zinc-400 selection:text-black p-4">
      
      {/* Header Consistent */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center border-b border-zinc-900/40">
        <div>
          <Link href="/" className="text-md font-medium tracking-[0.2em] uppercase text-white hover:opacity-80 transition-opacity">
            ALEXANDRU <span className="text-zinc-500 font-light">| PHOTOGRAPHY</span>
          </Link>
        </div>
        <nav className="flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
          <Link href="/" className="text-zinc-500 hover:text-zinc-200 transition-colors">Portofoliu</Link>
          <span className="text-white border-b border-white pb-1 font-medium cursor-default">Servicii & Tarife</span>
        </nav>
      </header>

      {/* 🎉 BANNER OFERTĂ DE LANSARE */}
      <section className="max-w-4xl mx-auto mt-12 px-4">
        <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-lg p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-white text-black font-mono text-[9px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl">
            LAUNCH OFFER
          </div>
          <p className="text-[10px] font-mono tracking-[0.3em] text-zinc-400 uppercase mb-1">🎉 OFERTĂ DE LANSARE</p>
          <h3 className="text-xl font-light text-white tracking-wide">📍 DISPONIBIL EXCLUSIV ÎN ARAD</h3>
          <p className="text-xs text-zinc-400 mt-2 font-mono">
            Cadouri livrate digital + <span className="text-white font-bold underline">REDUCERE DE 20%</span> pentru primii 10 clienți!
          </p>
        </div>
      </section>

      {/* Titlu Secțiune */}
      <section className="max-w-5xl mx-auto pt-16 pb-8 px-4 text-center">
        <p className="text-[10px] font-mono tracking-[0.4em] text-zinc-500 uppercase mb-2">// INVESTIȚIE TRANSPARENTĂ</p>
        <h2 className="text-3xl font-light tracking-tight text-white">Servicii & Tarife</h2>
      </section>

      {/* LISTĂ LISTĂ TARIFE - STIL CATALOG MINIMALIST */}
      <section className="max-w-4xl mx-auto px-4 py-4 space-y-12">
        {categories.map((cat, idx) => (
          <div key={idx} className="border border-zinc-900/60 bg-zinc-950/30 p-6 rounded-lg transition-all duration-300 hover:border-zinc-800">
            <h3 className="font-mono text-xs tracking-widest text-zinc-400 uppercase border-b border-zinc-900 pb-3 mb-4">
              {cat.title}
            </h3>
            <div className="space-y-4">
              {cat.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-sm font-light text-zinc-200">{item.name}</span>
                  <div className="hidden sm:block flex-grow border-b border-dotted border-zinc-800 mx-4 mt-2"></div>
                  <span className="font-mono text-xs text-white font-medium whitespace-nowrap bg-zinc-900/50 px-2 py-1 rounded border border-zinc-900">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* SECȚIUNE CE ESTE INCLUS */}
      <section className="max-w-4xl mx-auto px-4 pt-12 pb-16">
        <div className="bg-zinc-950/20 border border-zinc-900 rounded-lg p-6">
          <h4 className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-4">// CE ESTE INCLUS ÎNTOTDEAUNA:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inclusions.map((inc, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs text-zinc-300 font-light">
                <span className="text-emerald-500 mt-0.5">✅</span>
                <span>{inc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center pb-12">
        <Link href="/contact" className="inline-block font-mono text-xs tracking-widest bg-zinc-100 text-black hover:bg-white font-semibold px-8 py-4 rounded uppercase transition-all duration-300 shadow-md">
          REZERVĂ O ȘEDINȚĂ ACUM →
        </Link>
      </div>

      <hr className="max-w-4xl mx-auto my-12 border-zinc-900" />

      {/* SECȚIUNE ECHIPAMENT REAL (THE CANON STACK) */}
      <section className="max-w-4xl mx-auto px-4 pb-32">
        <div className="text-center mb-12">
          <p className="text-[10px] font-mono tracking-[0.4em] text-zinc-500 uppercase mb-2">// HARDWARE ARCHIVE</p>
          <h3 className="text-xl font-light text-white tracking-wide">Echipamentul din dotare</h3>
          <p className="text-xs text-zinc-500 font-mono mt-1">Sistem full-frame profesional optimizat pentru dynamic range și sharpness maxim.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          {gear.map((g, idx) => (
            <div key={idx} className="border border-zinc-900/60 bg-zinc-950/20 p-5 rounded-lg">
              <h4 className="text-zinc-500 text-[10px] tracking-widest uppercase border-b border-zinc-900 pb-2 mb-3">// {g.category}</h4>
              <ul className="space-y-2">
                {g.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-zinc-300 font-light leading-relaxed text-[11px]">
                    ⚡ {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-zinc-900 text-[10px] text-zinc-600 font-mono">
        &copy; 2026 ALEXANDRU PHOTOGRAPHY. EXCLUSIVELY SERVING ARAD.
      </footer>
    </main>
  );
}

export default PricesPage;