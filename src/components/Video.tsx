import { video } from "../data/clinic";
import Reveal from "./Reveal";

export default function Video() {
  return (
    <section className="bg-sand py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <Reveal><p className="eyebrow">{video.eyebrow}</p></Reveal>
          <Reveal delay={80}><h2 className="section-title">{video.title}</h2></Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg font-light leading-relaxed text-ink/80">{video.text}</p>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="relative">
            <div aria-hidden className="absolute -bottom-4 -left-4 h-full w-full rounded-[1.75rem] bg-coral-soft" />
            <video
              className="relative aspect-video w-full rounded-[1.75rem] bg-petrol object-cover shadow-soft"
              controls
              preload="metadata"
              playsInline
              poster={video.poster}
            >
              <source src={video.src} type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
