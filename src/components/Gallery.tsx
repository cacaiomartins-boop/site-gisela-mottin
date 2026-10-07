import { useEffect, useState } from "react";
import { gallery } from "../data/clinic";
import { CloseIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="consultorio" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><p className="eyebrow">{gallery.eyebrow}</p></Reveal>
          <Reveal delay={80}><h2 className="section-title">{gallery.title}</h2></Reveal>
          <Reveal delay={140}><p className="mt-5 text-lg font-light text-ink/75">{gallery.text}</p></Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[13rem] grid-cols-2 gap-3 sm:auto-rows-[16rem] sm:gap-4 lg:grid-cols-3">
          {gallery.items.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 70} className={g.span}>
              <button
                onClick={() => setActive(i)}
                className="group relative block h-full w-full overflow-hidden rounded-2xl"
                aria-label={`Ampliar: ${g.alt}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-[50%_20%] transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-petrol/0 transition group-hover:bg-petrol/15" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-petrol-dark/95 p-4"
          onClick={() => setActive(null)}
        >
          <button className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white" aria-label="Fechar">
            <CloseIcon />
          </button>
          <img
            src={gallery.items[active].src}
            alt={gallery.items[active].alt}
            className="max-h-[88vh] max-w-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
