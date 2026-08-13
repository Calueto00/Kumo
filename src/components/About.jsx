import digitalLayers from '../assets/hero.png';

function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4.2 4.2L19 6.5" /></svg>;
}

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-shell">
        <div className="about-visual">
          <div className="about-image-panel">
            <div className="about-orbit orbit-one" />
            <div className="about-orbit orbit-two" />
            <img src={digitalLayers} alt="Camadas digitais que representam soluções tecnológicas integradas" />
            <div className="visual-note"><span className="note-dot" />Tecnologia que aproxima</div>
          </div>
          <div className="about-stat"><strong>+100%</strong><span>Foco no seu crescimento digital</span></div>
        </div>

        <div className="about-content">
          <span className="about-kicker">Conheça a É-Kumo</span>
          <h2>Parceria digital para negócios que querem ir mais longe.</h2>
          <p>Somos uma empresa angolana especializada em desenvolvimento de websites, hospedagem de alta performance, e-mails profissionais e soluções digitais para empresas, negócios e empreendedores.</p>
          <p>Acreditamos que toda empresa merece uma presença digital moderna, segura e eficiente. Por isso, desenvolvemos soluções personalizadas que ajudam os nossos clientes a crescer, fortalecer a sua marca e conquistar mais oportunidades online.</p>
          <ul className="about-highlights">
            <li><CheckIcon />Soluções pensadas para a sua realidade</li>
            <li><CheckIcon />Acompanhamento próximo e especializado</li>
          </ul>
          <a href="#contact" className="about-cta">Conheça-nos <span>→</span></a>
        </div>
      </div>
    </section>
  );
}
