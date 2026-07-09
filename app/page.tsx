import Image from "next/image";

export default function Home() {
  // Aici punem datele fotografiei tale din screenshot
  const photo = {
    src: "/numele_pozei_tale.jpg", // ⚠️ Schimbă cu numele real al fișierului tău din folderul 'public'
    title: "Urban Fashion Vignette",
    specs: "85mm f/1.4",
    location: "NATURE Kyoto Forest, JP",
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between">
      {/* Containerul imaginii - ocupă tot ecranul minus zona de jos pentru text */}
      <div className="relative w-full flex-grow h-[calc(100vh-120px)] md:h-[calc(100vh-100px)]">
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center" // 👈 Această linie salvează proporțiile feței!
        />
      </div>

      {/* Zona de text de jos (Bara Neagră) */}
      <div className="bg-black p-6 md:px-12 md:py-8 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-end gap-2">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-1">
              Portrait
            </span>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              {photo.title}
            </h1>
          </div>
          
          <div className="text-sm text-zinc-400 font-mono space-y-0.5 md:text-right">
            <p>{photo.specs}</p>
            <p className="text-xs text-zinc-500 uppercase tracking-wider">
              {photo.location}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
}
