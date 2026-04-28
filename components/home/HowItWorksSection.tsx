import React from "react";

export default function HowItWorksSection() {
  return (
    <section className="py-32 bg-surface" id="how">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Cómo funciona
          </h2>
          <p className="text-on-surface-variant text-lg">
            Elige la que mejor se adapte a ti.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-stretch">
          {/* Card 01 */}
          <div className="bg-surface-container-high rounded-xl p-8 md:p-10 flex flex-col relative overflow-hidden group flex-1 h-full min-h-[320px]">
            <div className="z-10">
              <span className="text-secondary font-black text-6xl opacity-20 block mb-4">01</span>
              <h3 className="font-headline font-bold mb-4 text-2xl">Compra en línea</h3>
              <p className="text-on-surface-variant text-lg">
                Elige tu celular, paga un enganche y recíbelo en la puerta de tu casa en 1 a 5 días con envío gratis.
              </p>
            </div>
            <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors"></div>
            <span className="material-symbols-outlined absolute right-8 top-12 text-8xl text-secondary/5 rotate-12" data-icon="local_shipping">
              local_shipping
            </span>
          </div>

          {/* Card 02 */}
          <div className="bg-surface-container-highest rounded-xl p-8 md:p-10 flex flex-col relative overflow-hidden border border-outline-variant/10 group flex-1 h-full min-h-[320px]">
            <div className="z-10">
              <span className="text-tertiary font-black text-6xl opacity-20 block mb-4">02</span>
              <h3 className="font-headline font-bold mb-4 text-2xl">Aprobación Express</h3>
              <p className="text-on-surface-variant text-lg">
                Obtén tu aprobación desde casa y compra tu celular en una de nuestras miles de tiendas aliadas.
              </p>
            </div>
            <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-tertiary/5 rounded-full blur-3xl group-hover:bg-tertiary/10 transition-colors"></div>
            <span className="material-symbols-outlined absolute right-8 top-12 text-8xl text-tertiary/5 rotate-12" data-icon="storefront">
              storefront
            </span>
          </div>

          {/* Card 03 (Full width) */}
          <div className="md:col-span-2 bg-gradient-to-r from-primary-container to-surface-container-low rounded-xl p-10 flex flex-col md:flex-row items-center justify-between border border-outline-variant/5">
            <div className="mb-6 md:mb-0">
              <span className="text-secondary font-black text-6xl opacity-20 block mb-4">✓</span>
              <h3 className="font-headline font-bold mb-4 text-2xl">Proceso en 5 minutos</h3>
              <p className="text-on-surface-variant max-w-xl text-lg">
                Validamos tu perfil al instante. Sin burocracia, sin aval y sin complicaciones innecesarias.
              </p>
            </div>
            <div className="bg-secondary text-on-secondary-fixed p-6 rounded-full">
              <span className="material-symbols-outlined text-4xl" data-icon="bolt">bolt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
