import { howItWorks as process } from "../data/clinic";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><p className="eyebrow">{process.eyebrow}</p></Reveal>
          <Reveal delay={80}><h2 className="section-title">{process.title}</h2></Reveal>
        </div>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-3">
          <div aria-hidden className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-gradient-to-r from-coral via-sage to-coral md:block" />
          {process.steps.map((s, i) => (
            <li key={s.title} className="relative text-center">
              <Reveal delay={i * 100}>
                <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-coral bg-paper font-display text-2xl text-coral-deep">
                  {i + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl font-medium">{s.title}</h3>
                <p className="mx-auto mt-3 max-w-xs leading-relaxed text-ink/75">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
