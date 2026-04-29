import React from "react";

const styles = {
  brandSection: "pt-28 pb-12 bg-slate-950 flex items-center justify-center border-b border-white/5",
  brandContainer: "max-w-7xl mx-auto px-6 text-center animate-in fade-in slide-in-from-top-4 duration-1000 relative",
  brandGlow: "absolute w-72 h-72 bg-[#3CD7FF]/40 rounded-full blur-[100px] -z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2",
  brandLogo: "w-auto mx-auto object-contain drop-shadow-[0_0_40px_rgba(60,215,255,0.6)] relative z-10 h-55 md:h-65",
  brandLabelContainer: "mt-4 flex items-center justify-center gap-2",
  brandLine: "h-px w-8 bg-secondary/30",
  brandLabel: "text-secondary text-xs font-bold tracking-[0.3em] uppercase md:text-sm lg:text-base",
  
  heroSection: "relative pt-12 pb-20 md:pt-24 md:pb-40 overflow-hidden bg-gradient-to-b from-primary-container/30 to-surface",
  heroContainer: "max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
  heroTitle: "font-headline font-extrabold text-on-surface leading-tight tracking-tighter mb-6 text-center lg:text-left sm:text-4xl md:text-5xl lg:text-7xl text-[2.5rem]",
  heroDescription: "text-lg md:text-xl text-on-surface-variant mb-10 max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0",
  heroButtonsContainer: "flex flex-col sm:flex-row gap-4 text-center lg:text-left justify-center lg:justify-start",
  heroApplyButton: "text-on-tertiary-fixed px-10 py-4 rounded-md font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-tertiary/20",
  
  heroImageContainer: "relative lg:h-[600px] flex items-center justify-center",
  heroImageGlow: "absolute w-[120%] h-[120%] bg-secondary/10 rounded-full blur-[100px] -z-10 animate-pulse",
  heroImage: "w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,18,63,0.5)] transform hover:scale-105 transition-transform duration-700"
};

/**
 * BrandIntroduction Component
 * Displays the main GoPay logo and the slogan with glowing effects.
 */
function BrandIntroduction() {
  return (
    <section className={styles.brandSection}>
      <div className={styles.brandContainer}>
        <div className={styles.brandGlow}></div>
        <img
          alt="GoPay Brand Logo"
          className={styles.brandLogo}
          src="https://lh3.googleusercontent.com/aida/ADBb0uh6hzUjZCMnRQB2PP1w9wVrWu0iKRRol8bIm_zAu15EKcMZt6AeZxc8Ek0IJf78o28ibBuYTCDmUXACYvK73u1CzX1H2Z4w9piVC1XxsqivLXV2dpjFZuK_u0i3LCz7WgYtQ8g7hOc9dRUdMe1n-fktWL0g8rnCmVR5ZHq3jvffiYRUUlZNeGfrfS2YcLtPPgfjPHG2Rik5AamNVMmFWEFNDEABVgbgTRhyM332TBuAFAd89poypZPyOhYpFmjui2tFNUaO5lWung"
        />
        <div className={styles.brandLabelContainer}>
          <span className={styles.brandLine}></span>
          <span className={styles.brandLabel}>Tu Crédito Inteligente</span>
          <span className={styles.brandLine}></span>
        </div>
      </div>
    </section>
  );
}

/**
 * HeroMain Component
 * Displays the main call to action, headline, and the showcase image.
 */
function HeroMain() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className="z-10">
          <h1 className={styles.heroTitle}>
            <span className="block sm:inline">Tu celular nuevo</span>{" "}
            <span className="text-secondary whitespace-nowrap">en 5 minutos</span>,{" "}
            <span className="block lg:inline">sin salir de casa</span>
          </h1>
          <p className={styles.heroDescription}>
            9 de cada 10 personas son aprobadas con solo su INE. Consegui hoy tu smartphone con pagos semanales y sin complicaciones.
          </p>
          <div className={styles.heroButtonsContainer}>
            <button
              className={styles.heroApplyButton}
              style={{ backgroundColor: "#FF9933", color: "#001C3A" }}
            >
              ¡Aplica ya!
            </button>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <div className={styles.heroImageGlow}></div>
          <img
            alt="Smartphones premium"
            className={styles.heroImage}
            src="/brands/hero-image.webp"
          />
        </div>
      </div>
    </section>
  );
}

/**
 * HeroSection Component
 * Combines the brand introduction and the main hero content into a single component for the landing page.
 */
export default function HeroSection() {
  return (
    <>
      <BrandIntroduction />
      <HeroMain />
    </>
  );
}
