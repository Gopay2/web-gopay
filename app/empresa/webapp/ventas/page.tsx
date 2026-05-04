import React from "react";
import Link from "next/link";
import { getUserRole, isAllowed } from "@/utils/auth-check";
import AccessDenied from "@/components/empresa/AccessDenied";

export const revalidate = 0;

const styles = {
  container: "max-w-4xl mx-auto space-y-8",
  header: "flex items-center justify-between",
  title: "text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent",
  formCard: "bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl space-y-6",
  inputGroup: "space-y-2",
  label: "text-sm font-medium text-slate-300 ml-1",
  input: "w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-secondary transition-all",
  button: "w-full bg-secondary text-slate-950 font-bold py-4 rounded-xl hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 cursor-pointer"
};

export default async function VentasPage() {
  const userRole = await getUserRole();

  if (!isAllowed(userRole, ["Admin", "Closer"])) {
    return <AccessDenied role={userRole} sectionName="Formulario de Ventas" />;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Formulario de Ventas</h2>
        <Link href="/empresa/webapp" className="text-slate-500 hover:text-slate-300 flex items-center gap-2 text-sm transition-colors">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Volver
        </Link>
      </header>

      <div className={styles.formCard}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={styles.inputGroup}>
            <label className={styles.label}>Nombre del Cliente</label>
            <input type="text" className={styles.input} placeholder="Nombre completo" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>INE / Identificación</label>
            <input type="text" className={styles.input} placeholder="Número de documento" />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Modelo de Dispositivo</label>
          <select className={styles.input}>
            <option>Seleccione un modelo</option>
            <option>iPhone 15 Pro Max</option>
            <option>Samsung S24 Ultra</option>
            <option>Google Pixel 8</option>
          </select>
        </div>

        <button className={styles.button}>Registrar Venta</button>
      </div>
    </div>
  );
}
