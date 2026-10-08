import { Fragment } from "react";
import { clinic, publications as t } from "../data/clinic";
import { posts } from "../data/posts";
import { Link } from "../router";
import { formatDate, readingTime } from "./Publications";
import { ArrowIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

function Body({ text }: { text: string }) {
  const blocks = text.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  return (
    <div className="space-y-6 text-[1.1rem] font-light leading-[1.85] text-ink/90">
      {blocks.map((b, i) => {
        if (b.startsWith("## "))
          return (
            <h2 key={i} className="pt-4 font-display text-3xl font-medium leading-tight sm:text-4xl">
              {b.slice(3)}
            </h2>
          );
        if (b.startsWith("> "))
          return (
            <blockquote key={i} className="border-l-2 border-coral py-1 pl-6 font-display text-2xl italic leading-snug text-petrol">
              {b.replace(/^>\s?/gm, "")}
            </blockquote>
          );
        if (b.split("\n").every((l) => l.trim().startsWith("- ")))
          return (
            <ul key={i} className="space-y-2 pl-1">
              {b.split("\n").map((l, j) => (
                <li key={j} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-coral" />
                  <span>{l.trim().slice(2)}</span>
                </li>
              ))}
            </ul>
          );
        return (
          <p key={i}>
            {b.split("\n").map((l, j, arr) => (
              <Fragment key={j}>
                {l}
                {j < arr.length - 1 && <br />}
              </Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default function PostPage({ slug }: { slug: string }) {
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="px-5 pb-28 pt-40 text-center sm:px-8">
        <img src="/img/logo-mark.png" alt="" className="mx-auto h-20 w-auto" />
        <h1 className="mt-8 font-display text-4xl font-medium">{t.notFoundTitle}</h1>
        <p className="mx-auto mt-4 max-w-md font-light text-ink/80">{t.notFoundText}</p>
        <Link to="/publicacoes" className="btn btn-primary mt-8">{t.back}</Link>
      </section>
    );
  }

  const others = posts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 2);

  return (
    <article className="pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <Link to="/publicacoes" className="inline-flex items-center gap-2 text-sm text-slate2 hover:text-coral-deep">
            <ArrowIcon className="h-4 w-4 rotate-180" /> {t.back}
          </Link>
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.75rem] font-medium uppercase tracking-[0.2em] text-coral-deep">
            <span>{post.category}</span>
            <span className="normal-case tracking-normal text-slate2">
              {formatDate(post.date)} · {readingTime(post.body)} min de leitura
            </span>
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-4 text-balance font-display text-[2.3rem] font-medium leading-[1.08] sm:text-6xl">{post.title}</h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 text-xl font-light leading-relaxed text-ink/75">{post.excerpt}</p>
        </Reveal>
      </div>

      {post.cover && (
        <Reveal className="mx-auto mt-10 max-w-5xl px-5 sm:px-8">
          <img
            src={post.cover}
            alt={post.coverAlt ?? ""}
            className="aspect-[16/9] w-full rounded-[2rem] object-cover object-[50%_25%] shadow-soft"
          />
        </Reveal>
      )}

      <div className="mx-auto mt-12 max-w-3xl px-5 sm:px-8">
        <Body text={post.body} />

        <div className="mt-16 flex flex-col items-start gap-6 rounded-[2rem] bg-white p-7 shadow-soft sm:flex-row sm:items-center sm:p-9">
          <img src={t.authorImage} alt={clinic.name} className="h-24 w-24 flex-none rounded-full object-cover object-[50%_20%]" />
          <div>
            <p className="font-display text-2xl font-medium text-petrol">{clinic.name}</p>
            <p className="text-sm text-slate2">{t.authorNote} · {clinic.crp}</p>
            <a href={clinic.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary mt-4 !py-2.5">
              <WhatsAppIcon className="h-5 w-5" /> Agendar consulta
            </a>
          </div>
        </div>
      </div>

      {others.length > 0 && (
        <div className="mx-auto mt-20 max-w-5xl px-5 sm:px-8">
          <h3 className="font-display text-3xl font-medium">Continue lendo</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  to={`/publicacoes/${o.slug}`}
                  className="block h-full rounded-2xl border border-petrol/10 bg-white p-6 transition hover:border-coral/50 hover:shadow-soft"
                >
                  <span className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-coral-deep">{o.category}</span>
                  <span className="mt-2 block font-display text-2xl font-medium leading-tight">{o.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
