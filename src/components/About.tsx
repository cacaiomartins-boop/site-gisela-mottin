import { about, education } from "../data/clinic";
import { CheckIcon } from "./Icons";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <img
              src={about.image}
              alt="Gisela Mottin sentada na poltrona do consultório"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover object-[50%_20%] shadow-soft"
            />
            <div aria-hidden className="absolute -bottom-5 -left-5 -z-10 h-40 w-40 rounded-full bg-coral-soft" />
            <div aria-hidden className="absolute -right-5 -top-5 -z-10 h-28 w-28 rounded-full bg-sage-soft" />
          </div>
        </Reveal>

        <div className="self-center">
          <Reveal><p className="eyebrow">{about.eyebrow}</p></Reveal>
          <Reveal delay={80}><h2 className="section-title">{about.title}</h2></Reveal>
          <div className="mt-6 space-y-4 text-[1.05rem] font-light leading-relaxed text-ink/80">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={120 + i * 60}><p>{p}</p></Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <dl className="mt-9 grid grid-cols-3 gap-4 border-y border-petrol/10 py-6">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-4xl font-medium text-coral-deep">{s.value}</dt>
                  <dd className="mt-1 text-[0.8rem] leading-snug text-slate2">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal className="rounded-[2rem] bg-paper p-7 sm:p-10 lg:col-span-2">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="font-display text-3xl font-medium">{education.title}</h3>
              <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {education.items.map((e) => (
                  <li key={e.title} className="flex gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-coral" />
                    <span className="leading-snug">
                      <span className="block font-medium text-petrol">{e.title}</span>
                      {e.place && <span className="text-sm text-slate2">{e.place}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:border-l md:border-petrol/10 md:pl-10">
              <h3 className="font-display text-3xl font-medium">Experiência</h3>
              <ul className="mt-6 space-y-4">
                {education.experience.map((x) => (
                  <li key={x} className="flex gap-3 leading-snug text-ink/80">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sage" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
