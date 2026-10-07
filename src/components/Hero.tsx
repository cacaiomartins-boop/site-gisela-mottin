import { clinic, hero } from "../data/clinic";
import { ArrowIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* formas inspiradas na logo */}
      <div aria-hidden className="pointer-events-none absolute -right-32 top-10 h-[22rem] w-[22rem] sm:-right-40 sm:h-[34rem] sm:w-[34rem] rounded-full bg-sage-soft" />
      <div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-coral-soft/70" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-8 lg:pb-28">
        <div>
          <Reveal>
            <p className="eyebrow">{hero.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-[2.6rem] font-medium leading-[1.04] sm:text-6xl lg:text-[4.4rem]">
              {hero.title} <em className="block whitespace-nowrap font-normal italic text-coral-deep">{hero.titleAccent}</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-ink/80">{hero.text}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={clinic.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                <WhatsAppIcon className="h-5 w-5" /> Agendar pelo WhatsApp
              </a>
              <a href="#atuacao" className="btn btn-ghost">
                Conhecer o trabalho <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate2">
              {hero.chips.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-coral" /> {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[26rem] lg:ml-auto">
            <div aria-hidden className="absolute -left-5 top-8 h-full w-full rounded-t-[999px] rounded-b-[2rem] border border-coral/60" />
            <img
              src={hero.image}
              alt="Gisela Mottin em seu consultório, escrevendo em um caderno"
              className="relative h-full w-full rounded-t-[999px] rounded-b-[2rem] object-cover object-[50%_20%] shadow-soft"
            />
            <div className="absolute -bottom-6 -right-2 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-4 shadow-soft backdrop-blur sm:-right-8">
              <img src="/img/logo-mark.png" alt="" className="h-10 w-auto" />
              <div className="leading-tight">
                <p className="font-display text-lg font-semibold text-petrol">{clinic.name}</p>
                <p className="text-xs text-slate2">Psicóloga, Psicanalista e Neuropsicóloga · {clinic.crp}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
