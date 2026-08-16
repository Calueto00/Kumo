const plans = [
  {
    icon: 'server',
    name: 'Hospedagem de Sites',
    text: 'Hospede o seu site com desempenho, segurança e suporte técnico.',
    packages: [
      { name: 'Pacote Básico', detail: '5 GB · 1 site · 1 GB RAM · até 25.000 ficheiros. Ideal para sites institucionais, portfólios e pequenos projetos.', price: '6.500 Kz/mês' },
      { name: 'Pacote Profissional', detail: '15 GB · até 3 sites · 2 GB RAM · até 75.000 ficheiros. Ideal para empresas e projetos que precisam de mais espaço e capacidade.', price: '10.000 Kz/mês', featured: true },
      { name: 'Pacote Premium', detail: '50 GB · até 10 sites · 3 GB RAM · até 150.000 ficheiros. Para maior capacidade e desempenho.', price: '16.000 Kz/mês' },
    ],
    features: ['Tráfego ilimitado', 'Contas de e-mail ilimitadas', 'Certificado SSL gratuito', 'Backups automáticos', 'Terminal SSH', 'Suporte técnico e migração gratuita do site', 'Período de 1 a 24 meses — total: valor mensal × número de meses'],
  },
  {
    icon: 'mail',
    name: 'E-mails Corporativos',
    text: 'Tenha e-mails profissionais com o domínio da sua empresa, por exemplo: nome@suaempresa.ao.',
    packages: [
      { name: 'Pacote Básico', detail: '10 GB de armazenamento · aproximadamente 50.000 e-mails. Uma solução simples e profissional para comunicação empresarial.', price: '3.500 Kz/mês' },
      { name: 'Pacote Profissional', detail: '50 GB de armazenamento · aproximadamente 250.000 e-mails. Mais espaço para empresas com maior volume de comunicação.', price: '5.000 Kz/mês' },
      { name: 'Pacote Premium', detail: '100 GB de armazenamento · aproximadamente 250.000 e-mails. Inclui Microsoft 365 Online, Word, Excel, PowerPoint Online e Microsoft Teams.', price: '10.000 Kz/mês' },
    ],
    features: ['Webmail com Roundcube', 'Acesso em computador e telemóvel', 'Suporte IMAP e POP', 'Utilização do seu próprio domínio', 'Período de 1 a 24 meses — total: valor mensal × número de meses'],
  },
  {
    icon: 'globe',
    name: 'Registo de Domínios',
    text: 'Registe o endereço digital da sua empresa e tenha uma presença profissional na internet.',
    prices: [
      ['.com / .net / .org / .it.com / .info', '25.990 Kz/ano'],
      ['.ao', '29.990 Kz/ano'],
      ['.it.ao', '10.990 Kz/ano'],
      ['.org.ao / .edu.ao / .co.ao', '41.990 Kz/ano'],
    ],
    features: ['Disponível apenas em planos anuais', 'O domínio é renovado anualmente'],
  },
  {
    icon: 'code',
    name: 'Criação de Websites',
    text: 'Criamos websites modernos, rápidos, responsivos e adaptados à identidade da sua empresa.',
    packages: [
      { name: 'Pacote Básico', detail: 'Até 4 páginas · design responsivo para computador, tablet e telemóvel · formulário de contacto · integração com redes sociais · otimização básica. Domínio e hospedagem não incluídos.', price: '75.800 Kz' },
      { name: 'Pacote Profissional', detail: 'Até 5 páginas · design moderno e responsivo · domínio .com e hospedagem incluídos · 5 contas de e-mail corporativo bónus · formulário de contacto · integração com redes sociais · otimização básica.', price: '145.200 Kz' },
    ],
  },
  {
    icon: 'cart',
    name: 'Lojas Virtuais e Sistemas Personalizados',
    text: 'Desenvolvemos soluções digitais sob medida para vender online, automatizar processos e melhorar a produtividade.',
    packages: [
      { name: 'E-commerce', detail: 'Sistema completo e personalizado · domínio .com e hospedagem incluídos · 5 contas de e-mail corporativo bónus · gestão de produtos e clientes · integração com softwares e API · estrutura preparada para expansão.', price: '350.945 Kz' },
      { name: 'Web System', detail: 'Sistema completo e personalizado · domínio .com e hospedagem incluídos · 5 contas de e-mail corporativo bónus · desenvolvimento sob medida · integração com softwares e API · automação de processos · estrutura preparada para expansão.', price: '455.870 Kz' },
    ],
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
              {plan.packages && <div className="price-list">{plan.packages.map((item) => <div key={item.name}><span><strong>{item.name}{item.featured && ' — Mais escolhido'}</strong><br />{item.detail}</span><strong>{item.price}</strong></div>)}</div>}
              {plan.features && <ul className="plan-features">{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>}
              <a href="#contact">Pedir proposta <span>→</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
