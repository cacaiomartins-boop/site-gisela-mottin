import { clinic, contact } from "../data/clinic";
import { ArrowIcon, CarIcon, InstagramIcon, PinIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  const a = clinic.address;
  return (
    <section id="contato" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="self-center">
          <Reveal><p className="eyebrow">{contact.eyebrow}</p></Reveal>
          <Reveal delay={80}><h2 className="section-title">{contact.title}</h2></Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-lg text-lg font-light leading-relaxed text-ink/80">{contact.text}</p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-9 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-coral-soft text-coral-deep">
                  <PinIcon className="h-6 w-6" />
                </span>
                <div className="leading-snug">
                  <p className="font-medium text-petrol">Consultório</p>
                  <p className="text-ink/80">
                    {a.street}, {a.complement}
                    <br />
                    {a.neighborhood}, {a.city} - {a.state} · CEP {a.zip}
                  </p>
                  <a href={clinic.mapLink} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-sm text-coral-deep hover:underline">
                    Como chegar <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-sage-soft text-petrol">
                  <CarIcon className="h-6 w-6" />
                </span>
                <div className="leading-snug">
                  <p className="font-medium text-petrol">Estacionamento</p>
                  <p className="text-ink/80">{clinic.parking.street}</p>
                  <a href={clinic.parkingMapLink} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-sm text-coral-deep hover:underline">
                    Ver no mapa <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-sage-soft text-petrol">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <div className="leading-snug">
                  <p className="font-medium text-petrol">WhatsApp</p>
                  <a href={clinic.whatsappLink} target="_blank" rel="noreferrer" className="text-ink/80 hover:text-coral-deep">
                    {clinic.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-sage-soft text-petrol">
                  <InstagramIcon className="h-6 w-6" />
                </span>
                <div className="leading-snug">
                  <p className="font-medium text-petrol">Instagram</p>
                  <a href={clinic.instagram} target="_blank" rel="noreferrer" className="text-ink/80 hover:text-coral-deep">
                    {clinic.instagramHandle}
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-8 border-l-2 border-coral pl-4 text-[0.95rem] leading-snug text-ink/80">
              <span className="font-medium text-petrol">Valores:</span> a combinar com a profissional.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={clinic.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                <WhatsAppIcon className="h-5 w-5" /> Agendar pelo WhatsApp
              </a>
              <a href={clinic.doctoralia} target="_blank" rel="noreferrer" className="btn btn-ghost">
                Ver no Doctoralia
              </a>
            </div>
          </Reveal>
        </div>

        {/* Mapa interativo, lado direito */}
        <Reveal delay={120}>
          <div className="relative h-full min-h-[24rem]">
            <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] bg-sage-soft" />
            <iframe
              title="Mapa do consultório Gisela Mottin"
              src={clinic.mapEmbed}
              className="relative h-full min-h-[24rem] w-full rounded-[2rem] border-0 shadow-soft lg:min-h-[34rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
