import React from "react";

/**
 * Interface representing a customer testimonial
 */
interface Testimonial {
  quote: string;
  authorName: string;
  authorInitial: string;
  authorRole: string;
  colorTheme: "secondary" | "tertiary";
}

/**
 * Component to display an individual testimonial
 */
function TestimonialCard({ quote, authorName, authorInitial, authorRole, colorTheme }: Testimonial) {
  const borderClass = colorTheme === "secondary" ? "border-secondary" : "border-tertiary";
  const iconColorClass = colorTheme === "secondary" ? "text-secondary/20" : "text-tertiary/20";
  const roleColorClass = colorTheme === "secondary" ? "text-secondary" : "text-tertiary";

  return (
    <article className={`relative p-10 bg-surface-container-low rounded-2xl border-l-4 ${borderClass} shadow-2xl`}>
      <span className={`material-symbols-outlined ${iconColorClass} text-6xl absolute top-6 right-8`} aria-hidden="true">
        format_quote
      </span>
      <p className="text-xl italic leading-relaxed mb-8 relative z-10">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-white">
          {authorInitial}
        </div>
        <div>
          <h4 className="font-bold">{authorName}</h4>
          <p className={`text-sm ${roleColorClass}`}>{authorRole}</p>
        </div>
      </div>
    </article>
  );
}

/**
 * TestimonialsSection Component
 * Displays social proof and customer testimonials.
 */
export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      quote: "Es un proceso muy sencillo, rápido y fácil de entender. Solo necesitas tu INE y una foto para comenzar. Lo recomiendo al 100%.",
      authorName: "Carlos E.",
      authorInitial: "C",
      authorRole: "Cliente verificado",
      colorTheme: "secondary",
    },
    {
      quote: "El enganche es súper accesible y los pagos semanales también. Mi equipo llegó rápido y en excelentes condiciones.",
      authorName: "Miriam R.",
      authorInitial: "M",
      authorRole: "Cliente verificado",
      colorTheme: "tertiary",
    },
  ];

  return (
    <section className="py-32 bg-surface overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-20">
          <h2 className="font-headline text-4xl font-extrabold mb-4">Clientes satisfechos</h2>
          <p className="text-on-surface-variant">Millones de personas ya confían en nuestro sistema de crédito.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
