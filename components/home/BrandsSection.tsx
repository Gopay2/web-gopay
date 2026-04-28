import React from "react";

/**
 * Interface representing a brand to display
 */
interface Brand {
  name: string;
  icon: string;
}

/**
 * BrandsSection Component
 * Displays the supported brands available for the user to purchase.
 */
export default function BrandsSection() {
  const brands: Brand[] = [
    { name: "Apple", icon: "phone_iphone" },
    { name: "Samsung", icon: "smartphone" },
    { name: "Xiaomi", icon: "bolt" },
    { name: "Motorola", icon: "grid_view" },
    { name: "HONOR", icon: "rocket_launch" },
  ];

  return (
    <section className="py-32 bg-surface-container-lowest" id="brands">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <header className="max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Las mejores marcas a tu alcance
          </h2>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
            Accede a un amplio catálogo de los mejores fabricantes. Trabajamos con marcas líderes para garantizarte equipos originales con garantía total.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20 opacity-60">
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center gap-4 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="w-20 h-20 bg-surface-container rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl" aria-hidden="true">
                  {brand.icon}
                </span>
              </div>
              <span className="font-bold text-sm tracking-widest uppercase">{brand.name}</span>
            </div>
          ))}
        </div>

        <article className="p-10 bg-surface-container rounded-3xl border border-outline-variant/20 inline-block text-left max-w-4xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-secondary/10">
            <span className="material-symbols-outlined text-9xl" aria-hidden="true">lock_open</span>
          </div>
          <div className="relative z-10">
            <h3 className="font-headline text-2xl font-bold mb-4 text-secondary">Aprobación inmediata</h3>
            <p className="text-on-surface-variant mb-8 text-lg max-w-2xl">
              Obtén tu crédito GoPay hoy mismo y accede a más de 20 modelos disponibles de las marcas que más te gustan. El proceso es 100% digital y seguro.
            </p>
            <button className="bg-secondary text-on-secondary-fixed px-8 py-3 rounded-md font-bold hover:scale-105 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-xl" aria-hidden="true">bolt</span>
              Iniciar mi solicitud ahora
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
