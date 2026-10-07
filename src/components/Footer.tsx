import { clinic, nav } from "../data/clinic";
import { Brand } from "./Header";

export default function Footer() {
  return (
    <footer className="bg-petrol-dark text-white/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Brand light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Psicóloga, Psicanalista e Neuropsicóloga · {clinic.crp}
            <br />
            Psicoterapia e Neuropsicologia em Porto Alegre.
          </p>
        </div>
        <nav aria-label="Rodapé">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-coral">Navegação</p>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-white">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-coral">Contato</p>
          <ul className="space-y-2 text-sm">
            <li>{clinic.address.street}, {clinic.address.complement}</li>
            <li>Estacionamento: {clinic.parking.street}</li>
            <li>{clinic.address.neighborhood}, {clinic.address.city} - {clinic.address.state}</li>
            <li><a href={clinic.whatsappLink} target="_blank" rel="noreferrer" className="hover:text-white">{clinic.whatsappDisplay}</a></li>
            <li><a href={clinic.instagram} target="_blank" rel="noreferrer" className="hover:text-white">{clinic.instagramHandle}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs sm:px-8 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {clinic.name} Psicoterapia. Todos os direitos reservados.</p>
          <p>Em situação de crise, ligue 188 (CVV) ou 192 (SAMU).</p>
        </div>
      </div>
    </footer>
  );
}
