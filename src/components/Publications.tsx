import { useMemo, useState } from "react";
import { clinic, publications as t } from "../data/clinic";
import { posts, type Post } from "../data/posts";
import { Link } from "../router";
import { ArrowIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

export function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export function readingTime(body: string) {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function Card({ post, index }: { post: Post; index: number }) {
  return (
    <Reveal delay={(index % 3) * 80}>
      <Link
        to={`/publicacoes/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-petrol/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-coral/50 hover:shadow-soft"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-sage-soft">
          {post.cover ? (
            <img
              src={post.cover}
              alt={post.coverAlt ?? ""}
              loading="lazy"
              className="h-full w-full object-cover object-[50%_25%] transition duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sage-soft via-paper to-coral-soft">
              <img src="/img/logo-mark.png" alt="" className="h-20 w-auto opacity-90" />
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-7">
          <p className="flex flex-wrap items-center gap-x-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-coral-deep">
            <span>{post.category}</span>
            <span className="text-slate2/70 normal-case tracking-normal">{formatDate(post.date)}</span>
          </p>
          <h3 className="mt-3 font-display text-[1.7rem] font-medium leading-tight">{post.title}</h3>
          <p className="mt-3 flex-1 leading-relaxed text-ink/75">{post.excerpt}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-[0.92rem] font-medium text-petrol group-hover:text-coral-deep">
            {t.readMore} <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Publications() {
  const sorted = useMemo(
    () => [...posts].sort((a, b) => b.date.localeCompare(a.date)),
    []
  );
  const categories = useMemo(
    () => Array.from(new Set(sorted.map((p) => p.category))),
    [sorted]
  );
  const [cat, setCat] = useState<string>("");
  const visible = cat ? sorted.filter((p) => p.category === cat) : sorted;
  const [before, after] = t.title.split(t.titleAccent);

  return (
    <>
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <div aria-hidden className="pointer-events-none absolute -right-32 top-10 h-[20rem] w-[20rem] rounded-full bg-sage-soft sm:-right-40 sm:h-[26rem] sm:w-[26rem]" />
        <div aria-hidden className="pointer-events-none absolute -left-20 top-64 h-56 w-56 rounded-full bg-coral-soft/70" />
        <div className="relative mx-auto max-w-4xl px-5 pb-16 text-center sm:px-8 sm:pb-20">
          <Reveal><p className="eyebrow">{t.eyebrow}</p></Reveal>
          <Reveal delay={80}>
            <h1 className="text-balance font-display text-[2.4rem] font-medium leading-[1.06] sm:text-6xl">
              {before}
              <em className="font-normal italic text-coral-deep">{t.titleAccent}</em>
              {after}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-ink/80">{t.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {sorted.length === 0 ? (
            <Reveal>
              <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-petrol/10 bg-white px-6 py-14 text-center shadow-soft sm:px-14 sm:py-20">
                <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sage-soft" />
                <div aria-hidden className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-coral-soft/70" />
                <div className="relative">
                  <img src="/img/logo-mark.png" alt="" className="mx-auto h-24 w-auto" />
                  <p className="eyebrow mt-8 justify-center">{t.emptyEyebrow}</p>
                  <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl">{t.emptyTitle}</h2>
                  <p className="mx-auto mt-5 max-w-xl text-lg font-light leading-relaxed text-ink/80">{t.emptyText}</p>
                  <div className="mt-9 flex flex-wrap justify-center gap-4">
                    <Link to="/" className="btn btn-primary">Conhecer o trabalho</Link>
                    <a href={clinic.instagram} target="_blank" rel="noreferrer" className="btn btn-ghost">
                      Acompanhar no Instagram
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ) : (
            <>
              {categories.length > 1 && (
                <div className="mb-10 flex flex-wrap justify-center gap-3" role="group" aria-label="Filtrar por tema">
                  {[t.allLabel, ...categories].map((c, i) => {
                    const active = (i === 0 && !cat) || c === cat;
                    return (
                      <button
                        key={c}
                        onClick={() => setCat(i === 0 ? "" : c)}
                        aria-pressed={active}
                        className={`rounded-full border px-5 py-2 text-[0.92rem] transition ${
                          active
                            ? "border-petrol bg-petrol text-white"
                            : "border-petrol/15 bg-white/70 text-petrol hover:border-petrol/50"
                        }`}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              )}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((p, i) => (
                  <Card key={p.slug} post={p} index={i} />
                ))}
              </div>
            </>
          )}

          <Reveal className="mx-auto mt-20 flex max-w-3xl flex-col items-center gap-5 text-center">
            <h3 className="font-display text-3xl font-medium">{t.ctaTitle}</h3>
            <p className="font-light text-ink/80">{t.ctaText}</p>
            <a href={clinic.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary">
              <WhatsAppIcon className="h-5 w-5" /> Agendar pelo WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
