const contacts = [
  { icon: 'whatsapp', label: 'WhatsApp', value: '940 090 144', href: 'https://wa.me/244940090144', action: 'Contactar agora' },
  { icon: 'phone', label: 'Linha alternativa', value: '958 657 674', href: 'tel:+244958657674', action: 'Ligar agora' },
  { icon: 'mail', label: 'E-mail', value: 'info@e-kumo.ao', href: 'mailto:info@e-kumo.ao', action: 'Enviar e-mail' },
];

const iconPaths = {
  phone: <><path d="M22 16.6v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.8 2 2 0 0 1 4.1 1.6h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 2.1Z" /></>,
  whatsapp: <><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 20.5 11.7Z" /><path d="M8.6 7.9c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.5c.1.2.1.4 0 .6l-.5.7c.6 1.1 1.5 2 2.7 2.6l.7-.5c.2-.1.4-.1.6 0l1.5.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.2-1.2.4-2.3 0-1-.4-2.2-1.2-3.3-2.3-1.1-1.1-1.9-2.3-2.3-3.3-.4-1.1-.2-1.9 0-2.3Z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  social: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" /></>,
};

function ContactIcon({ name }) {
  return <span className="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{iconPaths[name]}</svg></span>;
}

export default function Contacts() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-shell">
        <div className="contact-heading">
          <span className="contact-kicker">Fale connosco</span>
          <h2>Vamos dar vida à sua próxima ideia.</h2>
          <p>Conte-nos o que a sua empresa precisa. A nossa equipa está pronta para ajudar a encontrar a melhor solução digital.</p>
          <div className="contact-availability"><span />Atendimento rápido e acompanhamento próximo</div>
        </div>
        <div className="contact-grid">
          {contacts.map((contact) => <a className="contact-card" key={contact.value} href={contact.href}><ContactIcon name={contact.icon} /><span className="contact-label">{contact.label}</span><strong>{contact.value}</strong><span className="contact-link">{contact.action} <b>→</b></span></a>)}
          <a className="contact-card social-card" href="#" aria-label="Visitar as redes sociais da É-Kumo"><ContactIcon name="social" /><span className="contact-label">Acompanhe a É-Kumo</span><strong>Redes sociais</strong><span className="contact-link">Ver páginas oficiais <b>→</b></span></a>
        </div>
      </div>
    </section>
  );
}
