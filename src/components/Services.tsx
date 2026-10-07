import { services } from "../data/clinic";
import { ServiceIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="atuacao" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><p className="eyebrow">{services.eyebrow}</p></Reveal>
          <Reveal delay={80}><h2 className="section-title">{services.title}</h2></Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg font-light text-ink/75">{services.intro}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <article className="group h-full rounded-[1.75rem] border border-petrol/10 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-coral/50 hover:shadow-soft">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-soft text-petrol transition group-hover:bg-coral-soft group-hover:text-coral-deep">
                  <ServiceIcon name={s.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-medium leading-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/75">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h3 className="text-center font-display text-2xl text-petrol">{services.topicsTitle}</h3>
          <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-3">
            {services.topics.map((t) => (
              <li
                key={t}
                className="rounded-full border border-petrol/15 bg-white/70 px-5 py-2 text-[0.92rem] text-petrol"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
