import React from 'react';
import styles from './Hero.module.css';
import imgHero from '../../assets/images/hero-person.png';

const Hero = () => {
  return (
    <section className="sectionContainer">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              <span className={styles.textHighlight}>Transforme-se.</span>
              <br />
              Treine na <span className={styles.textHighlight}>BIO </span>
              Academia
            </h1>

            <p className={styles.subtitle}>
              Alcance a melhor versão de você mesmo. Junte-se a nós para uma
              vida mais saudável e empolgante!
            </p>
          </div>

          <div className={styles.button}>
            <a className="buttonPrincipal" href="#">
              Quero mudar
              <span class="material-symbols-outlined">east</span>
            </a>
          </div>
        </div>

        <div className={styles.imgHero}>
          <img src={imgHero} alt="Person hero section" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
