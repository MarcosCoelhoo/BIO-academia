import React from 'react';
import styles from './Header.module.css';
import { ReactComponent as BioLogo } from '../../assets/icons/bio-logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScroll, setIsScroll] = React.useState(false);
  const headerRef = React.useRef(null);

  const toggleMenuMobile = () => {
    setIsMenuOpen(!isMenuOpen);

    if (isMenuOpen) {
      document.body.style.overflowY = 'auto';

      return true;
    }

    document.body.style.overflowY = 'hidden';
  };

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsScroll(true);

        return true;
      }

      setIsScroll(false);
    });

    return window.removeEventListener('scroll', window);
  });

  return (
    <header
      className={`${styles.container} ${isScroll ? styles.scroll : ''}`}
      ref={headerRef}
    >
      <div className={styles.logo}>
        <a href="/">
          <BioLogo />
        </a>
      </div>

      <nav className={styles.nav}>
        <div className={`${styles.links} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.close} onClick={toggleMenuMobile}>
            <p>Fechar</p>
            <span className="material-symbols-outlined">close</span>
          </div>
          <a href="#" className={styles.link}>
            Preços
          </a>
          <a href="#" className={styles.link}>
            Contato
          </a>
          <a href="#" className={styles.link}>
            Quem somos
          </a>
          <a href="#" className={styles.highlight}>
            Treine conosco
          </a>
        </div>
        <span
          className={`${styles.iconMenu} material-symbols-outlined`}
          onClick={toggleMenuMobile}
        >
          menu_open
        </span>
      </nav>
    </header>
  );
};

export default Header;
