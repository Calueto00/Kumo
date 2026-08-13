import digitalLayers from '../assets/hero.png';

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />
      <div className="hero-shell">
        <div className="hero-content">
          <span className="hero-kicker"><span />Soluções digitais para crescer</span>
          <h1>A primeira impressão conta. <em>Faça com que ela seja memorável.</em></h1>
          <p>Criamos soluções digitais modernas que ajudam empresas a crescer, fortalecer a sua marca e conquistar mais clientes.</p>
          <div className="hero-actions">
            <a className="hero-primary" href="#contact">Começar um projeto <ArrowIcon /></a>
            <a className="hero-secondary" href="#services">Ver serviços <span>↓</span></a>
          </div>
          <div className="hero-trust"><span className="trust-check">✓</span> Tecnologia, estratégia e acompanhamento num só lugar.</div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-disc" />
          <div className="hero-ring ring-a" /><div className="hero-ring ring-b" />
          <img src={digitalLayers} alt="" />
          <div className="hero-float float-top"><span className="float-icon">↗</span><div><strong>Presença digital</strong><small>que gera confiança</small></div></div>
          <div className="hero-float float-bottom"><span className="pulse-dot" /><div><strong>Sempre online</strong><small>rápido e seguro</small></div></div>
        </div>
      </div>
    </section>
  );
}
