import { useState } from 'react';
import logo from '../assets/logos/logo2.PNG';

const links = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Planos', href: '#plans' },
  { label: 'Contacto', href: '#contact' },
];

export default function HeaderSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="header-shell" aria-label="Navegação principal">
        <a href="#hero" className="header-brand" onClick={closeMenu}><img src={logo} alt="É-Kumo" /><span>é-<b>Kumo</b></span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d={menuOpen ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'} /></svg>
        </button>
        <div className={`header-menu ${menuOpen ? 'is-open' : ''}`}>
          <ul>{links.map((link) => <li key={link.label}><a href={link.href} onClick={closeMenu}>{link.label}</a></li>)}</ul>
          <a href="#contact" className="header-cta" onClick={closeMenu}>Fale connosco <span>→</span></a>
        </div>
      </nav>
    </header>
  );
}
