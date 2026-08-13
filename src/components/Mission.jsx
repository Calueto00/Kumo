const principles = [
  {
    icon: 'target',
    label: 'O nosso propósito',
    title: 'Nossa Missão',
    text: 'Desenvolver soluções digitais inovadoras, seguras e acessíveis que impulsionem o crescimento de empresas e empreendedores, com tecnologia de qualidade e suporte especializado.',
  },
  {
    icon: 'eye',
    label: 'Para onde vamos',
    title: 'Nossa Visão',
    text: 'Ser uma referência em Angola e em África no desenvolvimento de soluções web e hospedagem, reconhecida pela inovação, qualidade e compromisso com o sucesso dos clientes.',
  },
  {
    icon: 'heart',
    label: 'Como trabalhamos',
    title: 'Nossos Valores',
    text: 'Compromisso, inovação, excelência e integridade são os pilares que orientam o nosso trabalho, as nossas decisões e cada relação que construímos.',
  },
];

const iconPaths = {
  target: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="3.5" /><path d="m16.5 7.5 4-4M17 3.5h3.5V7" /></>,
  eye: <><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.5" /></>,
  heart: <path d="M20.8 8.6c0 5.8-8.8 10.8-8.8 10.8s-8.8-5-8.8-10.8A4.8 4.8 0 0 1 12 5.4a4.8 4.8 0 0 1 8.8 3.2Z" />,
};

function PrincipleIcon({ name }) {
  return <span className="principle-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{iconPaths[name]}</svg></span>;
}

export default function Mission() {
  return (
    <section id="mission" className="mission-section">
      <div className="mission-shell">
        <div className="mission-intro">
          <span className="mission-kicker">A essência da É-Kumo</span>
          <h2>Tecnologia com propósito, pessoas no centro.</h2>
          <p>Não criamos apenas produtos digitais. Criamos parcerias confiáveis para que empresas e empreendedores possam avançar com segurança.</p>
        </div>
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <article className="principle-card" key={principle.title}>
              <span className="principle-number">0{index + 1}</span>
              <PrincipleIcon name={principle.icon} />
              <span className="principle-label">{principle.label}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
