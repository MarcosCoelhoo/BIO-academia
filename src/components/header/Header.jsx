import React from 'react';
import styles from './Header.module.css';
import { ReactComponent as BioLogo } from '../../assets/icons/bio-logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScroll, setIsScroll] = React.useState(false);
  const headerRef = React.useRef(null);

  const handleInnerLink = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflowY = 'auto';
    }
  };

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
      id="header"
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
          <a href="#pricing" className={styles.link} onClick={handleInnerLink}>
            Preços
          </a>
          <a href="#workouts" className={styles.link} onClick={handleInnerLink}>
            Treinos
          </a>
          <a href="#contact" className={styles.link} onClick={handleInnerLink}>
            Contato
          </a>
          <a href="#about" className={styles.link} onClick={handleInnerLink}>
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
