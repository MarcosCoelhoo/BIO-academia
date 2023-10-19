import React from 'react';
import styles from './Hero.module.css';
import imgHero from '../../assets/images/hero-person.png';
import { ReactComponent as LogoSklz } from '../../assets/icons/SKLZ-logo.svg';
import { ReactComponent as LogoOptimumNutrition } from '../../assets/icons/optimum-nutrition-logo.svg';
import { ReactComponent as LogoNaturesWay } from '../../assets/icons/natures-way-logo.svg';
import { ReactComponent as LogoLifeFitness } from '../../assets/icons/life-fitness-logo.svg';
import { ReactComponent as LogoDymatize } from '../../assets/icons/dymatize-logo.svg';
const Hero = () => {
  return (
    <>
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
              Quero mudar!
              <span className="material-symbols-outlined">east</span>
            </a>
          </div>
        </div>

        <div className={styles.imgHero}>
          <img src={imgHero} alt="Person hero section" />
        </div>
      </div>
      <ul className={styles.brandings}>
        <li className={styles.logo}>
          <LogoSklz />
        </li>
        <li className={styles.logo}>
          <LogoOptimumNutrition />
        </li>
        <li className={styles.logo}>
          <LogoNaturesWay />
        </li>
        <li className={styles.logo}>
          <LogoLifeFitness />
        </li>
        <li className={styles.logo}>
          <LogoDymatize />
        </li>
      </ul>
    </>
  );
};

export default Hero;
