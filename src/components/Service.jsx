const cards = [
  { icon: 'code', title: 'Desenvolvimento web', description: 'Sites institucionais rápidos, claros e pensados para converter visitantes em clientes.' },
  { icon: 'server', title: 'Hospedagem de sites', description: 'Infraestrutura segura e estável para o seu negócio estar sempre disponível.' },
  { icon: 'mail', title: 'E-mails profissionais', description: 'Comunicação credível com endereços personalizados para a sua marca.' },
  { icon: 'support', title: 'Suporte técnico', description: 'Acompanhamento próximo, manutenção preventiva e respostas quando precisa.' },
  { icon: 'search', title: 'Otimização SEO', description: 'Melhor performance e visibilidade para a sua empresa ser encontrada online.' },
  { icon: 'sparkles', title: 'Transformação digital', description: 'Consultoria prática para tornar os seus processos mais simples e eficientes.' },
  { icon: 'layout', title: 'Sistemas personalizados', description: 'Plataformas web feitas à medida dos fluxos e objetivos da sua equipa.' },
  { icon: 'cloud', title: 'Gestão de websites', description: 'Atualizações, segurança e cuidado contínuo para o seu site evoluir consigo.' },
  { icon: 'cart', title: 'Lojas virtuais', description: 'Experiências de compra intuitivas, preparadas para vender a qualquer hora.' },
  { icon: 'globe', title: 'Domínios', description: 'Registo e gestão do endereço digital que dá identidade ao seu negócio.' },
];

const iconPaths = {
  code: <><path d="m8 9 3 3-3 3" /><path d="m16 15-3 3 3 3" /><path d="m14 5-4 14" /></>,
  server: <><rect width="18" height="7" x="3" y="3" rx="2" /><rect width="18" height="7" x="3" y="14" rx="2" /><path d="M7 7h.01M7 18h.01" /></>,
  mail: <><rect width="18" height="14" x="3" y="5" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  support: <><path d="M4 14a8 8 0 0 1 16 0" /><path d="M18 19c0 1.1-.9 2-2 2h-4" /><path d="M4 14v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2ZM20 14v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z" /></>,
  search: <><circle cx="11" cy="11" r="6" /><path d="m16 16 4 4M8 11h6M11 8v6" /></>,
  sparkles: <><path d="m12 3-1.7 5.3L5 10l5.3 1.7L12 17l1.7-5.3L19 10l-5.3-1.7L12 3Z" /><path d="m5 17-.7 2.3L2 20l2.3.7L5 23l.7-2.3L8 20l-2.3-.7L5 17Z" /></>,
  layout: <><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18M9 21V9" /></>,
  cloud: <><path d="M17.5 19H7a4 4 0 1 1 .7-7.94A5.5 5.5 0 0 1 18.2 9a5 5 0 0 1-.7 10Z" /><path d="M12 11v6m-2-2 2 2 2-2" /></>,
  cart: <><path d="m3 3 2 2 2.4 10.1a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 1.9-1.5L21 8H6" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.3 2.5 3.4 5.5 3.4 9S14.3 18.5 12 21c-2.3-2.5-3.4-5.5-3.4-9S9.7 5.5 12 3Z" /></>,
};

function ServiceIcon({ name }) {
  return <span className="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{iconPaths[name]}</svg></span>;
}

export default function Service() {
  return (
    <section id="services" className="services-section">
      <div className="services-shell">
        <div className="section-heading">
          <span className="eyebrow">O que fazemos</span>
          <h2>Soluções digitais que acompanham o seu crescimento.</h2>
          <p>Da presença online à gestão diária, reunimos a tecnologia e o acompanhamento de que a sua empresa precisa.</p>
        </div>
        <div className="services-grid">
          {cards.map((card) => <article key={card.title} className="service-card"><ServiceIcon name={card.icon} /><h3>{card.title}</h3><p>{card.description}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}
        </div>
      </div>
    </section>
  );
}
