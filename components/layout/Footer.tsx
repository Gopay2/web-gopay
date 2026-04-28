import React from "react";

/**
 * Footer Component
 * Contains the company copyright info, contact details, and social media links.
 */
export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 pt-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
        {/* Column 1 & 2: Brand */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <img
              alt="GoPay Logo"
              className="h-16 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/ADBb0uh6hzUjZCMnRQB2PP1w9wVrWu0iKRRol8bIm_zAu15EKcMZt6AeZxc8Ek0IJf78o28ibBuYTCDmUXACYvK73u1CzX1H2Z4w9piVC1XxsqivLXV2dpjFZuK_u0i3LCz7WgYtQ8g7hOc9dRUdMe1n-fktWL0g8rnCmVR5ZHq3jvffiYRUUlZNeGfrfS2YcLtPPgfjPHG2Rik5AamNVMmFWEFNDEABVgbgTRhyM332TBuAFAd89poypZPyOhYpFmjui2tFNUaO5lWung"
            />
          </div>
          <p className="text-slate-400 text-sm max-w-sm mb-8 leading-relaxed">
            © 2026 GoPay México. Tu celular nuevo en 5 minutos, sin salir de casa. Transformando el acceso a la tecnología en México.
          </p>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-white font-bold mb-6">Contacto</h4>
          <ul className="space-y-4">
            <li className="text-slate-500 text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-sm" data-icon="mail">mail</span>
              contacto@gopay.mx
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h4 className="text-white font-bold mb-6">Síguenos</h4>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-slate-400 hover:text-secondary hover:bg-secondary/10 transition-all shadow-lg" href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-slate-400 hover:text-secondary hover:bg-secondary/10 transition-all shadow-lg" href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-slate-400 hover:text-secondary hover:bg-secondary/10 transition-all shadow-lg" href="#">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-900 text-center">
        <p className="text-slate-600 text-xs">GoPay es una marca registrada. Todos los derechos reservados 2026.</p>
      </div>
    </footer>
  );
}
