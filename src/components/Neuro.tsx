import { clinic, neuro } from "../data/clinic";
import { CheckIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Neuro() {
  return (
    <section id="neuropsicologia" className="bg-petrol py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow !text-coral before:!bg-coral">{neuro.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title !text-white">{neuro.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/80">{neuro.text}</p>
          </Reveal>
          <Reveal delay={200}>
            <ul className="mt-8 space-y-4">
              {neuro.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-sage" />
                  <span className="text-white/90">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={260}>
            <a
              href={clinic.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn mt-10 bg-coral text-petrol-dark hover:bg-white"
            >
              Solicitar uma avaliação
            </a>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-sage/50" />
          <img
            src={neuro.image}
            alt="Gisela Mottin analisando um instrumento de avaliação neuropsicológica"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-[50%_25%]"
          />
        </Reveal>
      </div>
    </section>
  );
}
