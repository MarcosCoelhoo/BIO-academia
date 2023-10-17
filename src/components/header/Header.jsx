import React from 'react';
import styles from './Header.module.css';
import { ReactComponent as BioLogo } from '../../assets/icons/bio-logo.svg';
import { ReactComponent as IconMenu } from '../../assets/icons/menu.svg';
import { ReactComponent as IconClose } from '../../assets/icons/close.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenuMobile = () => {
    setIsMenuOpen(!isMenuOpen);

    if (isMenuOpen) {
      document.body.style.overflowY = 'auto';

      return true;
    }

    document.body.style.overflowY = 'hidden';
  };

  return (
    <header className="sectionContainer">
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/">
            <BioLogo />
          </a>
        </div>

        <nav className={styles.nav}>
          <div className={`${styles.links} ${isMenuOpen ? styles.open : ''}`}>
            <div className={styles.close} onClick={toggleMenuMobile}>
              <p>Fechar</p>
              <IconClose />
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
          <IconMenu className={styles.iconMenu} onClick={toggleMenuMobile} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
