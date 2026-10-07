import { useEffect, useState } from "react";
import { clinic, nav } from "../data/clinic";
import { CloseIcon, MenuIcon } from "./Icons";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-3" aria-label={`${clinic.name} - início`}>
      <img src="/img/logo-mark.png" alt="" className="h-11 w-auto" />
      <span className="leading-none">
        <span
          className={`block font-display text-[1.35rem] font-semibold uppercase tracking-[0.14em] ${
            light ? "text-white" : "text-slate2"
          }`}
        >
          {clinic.name}
        </span>
        <span
          className={`mt-1 block text-[0.7rem] font-light tracking-[0.42em] ${
            light ? "text-white/70" : "text-slate2/80"
          }`}
        >
          PSICOTERAPIA
        </span>
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open
          ? "bg-paper/90 shadow-[0_1px_0_rgba(43,74,95,.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Brand />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-[0.92rem] text-ink/80 transition hover:text-coral-deep"
            >
              {i.label}
            </a>
          ))}
          <a href={clinic.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary !px-6 !py-2.5">
            Agendar consulta
          </a>
        </nav>

        <button
          className="rounded-full p-2 text-petrol lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-petrol/10 bg-paper px-5 pb-6 pt-2 lg:hidden" aria-label="Mobile">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              onClick={() => setOpen(false)}
              className="block border-b border-petrol/10 py-4 font-display text-xl text-petrol"
            >
              {i.label}
            </a>
          ))}
          <a href={clinic.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary mt-5 w-full">
            Agendar consulta
          </a>
        </nav>
      )}
    </header>
  );
}
