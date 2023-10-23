import React from 'react';
import { ReactComponent as BioLogo } from '../../assets/icons/bio-logo.svg';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <a href="/">
          <BioLogo className={styles.logo} />
        </a>

        <div className={styles.navBox}>
          <h2 className={styles.title}>Navegue</h2>

          <ul className={styles.links}>
            <li className={styles.link}>
              <a href="#">Início</a>
            </li>
            <li className={styles.link}>
              <a href="#">A BIO</a>
            </li>
            <li className={styles.link}>
              <a href="#">BIO Treinos</a>
            </li>
            <li className={styles.link}>
              <a href="#">Profissionais BIO</a>
            </li>
            <li className={styles.link}>
              <a href="#">Planos BIO</a>
            </li>
          </ul>
        </div>

        <div className={styles.navBox} id="contact">
          <h2 className={styles.title}>Fale com a gente</h2>

          <ul className={styles.links}>
            <li className={styles.link}>
              <p>+55 91 99999-9999</p>
            </li>
            <li className={styles.link}>
              <a href="#">@bio.academia</a>
            </li>
            <li className={styles.link}>
              <a href="#">facebook.com/bioacademia</a>
            </li>
            <li className={styles.link}>
              <a href="#">bio.academia@contato.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.credits}>
        <p className={styles.text}>
          <span className={styles.copyright}>©</span> Marcos Coelho. Quase todos
          os direitos reservados
        </p>
        <p className={styles.text}>
          Acesse meu
          <a
            href="https://github.com/MarcosCoelhoo"
            target="_blank"
            rel="noreferrer"
            className={styles.github}
          >
            Github
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
