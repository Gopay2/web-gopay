import React from "react";

/**
 * WhatsAppButton Component
 * A floating action button that allows users to quickly start a WhatsApp chat for support.
 */
export default function WhatsAppButton() {
  return (
    <a
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white flex items-center gap-3 px-6 py-4 shadow-2xl hover:scale-110 transition-transform group aspect-square rounded-full flex items-center justify-center p-4"
      href="#"
    >
      <span className="material-symbols-outlined text-2xl" data-icon="chat">
        chat
      </span>
      <span className="font-bold hidden">Ayuda rápida</span>
    </a>
  );
}
