function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export default function Cta() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta-orbit orbit-left" /><div className="cta-orbit orbit-right" />
      <div className="cta-shell">
        <div><span className="cta-kicker">O próximo passo começa aqui</span><h2>Pronto para impulsionar o seu negócio?</h2><p>Fale connosco e descubra como as nossas soluções tecnológicas podem transformar a sua empresa.</p></div>
        <a href="#contact" className="cta-button">Fale connosco <ArrowIcon /></a>
      </div>
    </section>
  );
}
