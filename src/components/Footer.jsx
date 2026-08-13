const navigation = [['Início', '#hero'], ['Sobre nós', '#about'], ['Serviços', '#services'], ['Planos e preços', '#plans'], ['Contacto', '#contact']];

function FooterIcon({ name }) {
  const paths = { phone: <path d="M22 16.6v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.8 2 2 0 0 1 4.1 1.6h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 2.1Z" />, mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></> };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

export default function Footer() {
  return <footer className="site-footer"><div className="footer-shell"><div className="footer-brand"><a href="#hero" className="footer-logo">é-<span>Kumo</span></a><p>Transformamos ideias em experiências digitais que ajudam o seu negócio a crescer.</p></div><nav className="footer-nav" aria-label="Navegação de rodapé"><h3>Explorar</h3>{navigation.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav><div className="footer-contact"><h3>Contactos</h3><a href="tel:+244940090144"><FooterIcon name="phone" />940 090 144</a><a href="mailto:info@e-kumo.ao"><FooterIcon name="mail" />info@e-kumo.ao</a><span className="footer-status"><i />Disponível para novos projetos</span></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} É-Kumo. Todos os direitos reservados.</p><a href="#hero">Voltar ao topo ↑</a></div></footer>;
}
