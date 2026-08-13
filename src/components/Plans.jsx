const plans = [
  {
    icon: 'code',
    name: 'Desenvolvimento de Websites',
    text: 'Criamos websites modernos, rápidos e responsivos para empresas, instituições e profissionais.',
    prices: [
      ['Website sem hospedagem', '65.800,00 Kz'],
      ['Com hospedagem, domínio e 3 e-mails', '139.200,00 Kz'],
    ],
  },
  {
    icon: 'cart',
    name: 'Lojas Virtuais',
    text: 'Desenvolvemos lojas online completas para vender os seus produtos com segurança e praticidade.',
    price: '220.400,00 Kz',
  },
  {
    icon: 'layout',
    name: 'Sistemas Web Personalizados',
    text: 'Criamos sistemas sob medida para automatizar processos e aumentar a produtividade da sua empresa.',
    price: '220.400,00 Kz',
  },
  {
    icon: 'server',
    name: 'Hospedagem de Websites',
    text: 'Hospedagem rápida, segura e de alta disponibilidade para garantir o melhor desempenho do seu site.',
    price: '62.400,00 Kz',
    period: 'por ano',
    features: ['Hospedagem NVMe de alta velocidade', 'SSL gratuito', 'Backups automáticos', 'CDN gratuita', 'Suporte técnico', 'Migração gratuita do site'],
  },
  {
    icon: 'mail',
    name: 'E-mails Profissionais',
    text: 'Crie credibilidade com endereços personalizados, como contacto@suaempresa.ao.',
    price: '17.500,00 Kz',
    period: 'por e-mail · 5 GB',
  },
  {
    icon: 'support',
    name: 'Manutenção e Suporte',
    text: 'Mantemos o seu website atualizado, seguro e sempre disponível para os seus clientes.',
    price: '24/7',
    period: 'suporte contínuo',
    featured: true,
  },
  {
    icon: 'sparkles',
    name: 'Consultoria Digital',
    text: 'Ajudamos empresas a escolher as melhores soluções tecnológicas para crescer e destacar-se no ambiente digital.',
    price: 'Sob consulta',
  },
  {
    icon: 'globe',
    name: 'Registo de Domínios',
    text: 'Registamos e gerimos domínios nacionais e internacionais para fortalecer a identidade da sua marca.',
    prices: [['.ao', '29.900,00 Kz/ano'], ['.co.ao', '29.900,00 Kz/ano'], ['.com', '29.900,00 Kz/ano']],
  },
];

const iconPaths = {
  code: <><path d="m8 9 3 3-3 3" /><path d="m16 15-3 3 3 3" /><path d="m14 5-4 14" /></>,
  cart: <><path d="m3 3 2 2 2.4 10.1a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 1.9-1.5L21 8H6" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></>,
  layout: <><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18M9 21V9" /></>,
  server: <><rect width="18" height="7" x="3" y="3" rx="2" /><rect width="18" height="7" x="3" y="14" rx="2" /><path d="M7 7h.01M7 18h.01" /></>,
  mail: <><rect width="18" height="14" x="3" y="5" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  support: <><path d="M4 14a8 8 0 0 1 16 0" /><path d="M18 19c0 1.1-.9 2-2 2h-4" /><path d="M4 14v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2ZM20 14v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z" /></>,
  sparkles: <><path d="m12 3-1.7 5.3L5 10l5.3 1.7L12 17l1.7-5.3L19 10l-5.3-1.7L12 3Z" /><path d="m5 17-.7 2.3L2 20l2.3.7L5 23l.7-2.3L8 20l-2.3-.7L5 17Z" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.3 2.5 3.4 5.5 3.4 9S14.3 18.5 12 21c-2.3-2.5-3.4-5.5-3.4-9S9.7 5.5 12 3Z" /></>,
};

function PlanIcon({ name }) {
  return <span className="plan-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{iconPaths[name]}</svg></span>;
}

export default function Plans() {
  return (
    <section id="plans" className="plans-section">
      <div className="plans-shell">
        <div className="section-heading centered"><span className="eyebrow">Serviços e preços</span><h2>Escolha a solução certa para o seu negócio.</h2><p>Planos claros, tecnologia confiável e acompanhamento à medida dos seus objetivos.</p></div>
        <div className="plans-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`plan-card ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <span className="plan-badge">Sempre disponível</span>}
              <PlanIcon name={plan.icon} />
              <h3>{plan.name}</h3>
              <p>{plan.text}</p>
              {plan.price && <div className="plan-price"><strong>{plan.price}</strong>{plan.period && <span>{plan.period}</span>}</div>}
              {plan.prices && <div className="price-list">{plan.prices.map(([label, price]) => <div key={label}><span>{label}</span><strong>{price}</strong></div>)}</div>}
              {plan.features && <ul className="plan-features">{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>}
              <a href="#contact">Pedir proposta <span>→</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
