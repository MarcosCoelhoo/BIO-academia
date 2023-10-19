import React from 'react';
import { ReactComponent as IconWeight } from '../../assets/icons/gym-weight.svg';
import { ReactComponent as IconInstagramLogo } from '../../assets/icons/instagram-logo.svg';
import { ReactComponent as IconFacebookLogo } from '../../assets/icons/facebook-logo.svg';
import styles from './Intructors.module.css';
import imgFounder from '../../assets/images/founder-card.png';
import imgInstructorCrossfit from '../../assets/images/instructor-crossfit.png';
import imgInstructorFunctional from '../../assets/images/instructor-functional.png';

const Instructors = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={`${styles.title} titleSection`}>
          Profissionais BIO <IconWeight />
        </h1>
        <p className="descriptionSection">
          Descubra uma variedade de programas personalizados para alcançar suas
          metas.
        </p>
      </div>

      <ul className={styles.instructors}>
        <li className={styles.instructor}>
          <div className={styles.card}>
            <img
              src={imgFounder}
              alt="Imagem do fundador da BIO e instrutor de musculação"
            />

            <div className={styles.info}>
              <h2 className={styles.name}>Lucas Martinez</h2>

              <p className={styles.function}>
                Instrutor de musculação e fundador da BIO
              </p>
            </div>
          </div>
          <div className={styles.socials}>
            <a href="#" className={styles.social}>
              <IconInstagramLogo />
            </a>
            <a href="#" className={styles.social}>
              <IconFacebookLogo />
            </a>
          </div>
        </li>

        <li className={styles.instructor}>
          <div className={styles.card}>
            <img
              src={imgInstructorCrossfit}
              alt="Imagem do Instrutor de Crossift"
            />

            <div className={styles.info}>
              <h2 className={styles.name}>Ricardo Torres</h2>

              <p className={styles.function}>Instrutor de Crossfit</p>
            </div>
          </div>
          <div className={styles.socials}>
            <a href="#" className={styles.social}>
              <IconInstagramLogo />
            </a>
            <a href="#" className={styles.social}>
              <IconFacebookLogo />
            </a>
          </div>
        </li>

        <li className={styles.instructor}>
          <div className={styles.card}>
            <img
              src={imgInstructorFunctional}
              alt="Imagem da instrutora de Treino Funcional"
            />

            <div className={styles.info}>
              <h2 className={styles.name}>Isabela Silva</h2>

              <p className={styles.function}>
                Instrutora de Treinamento Funcional
              </p>
            </div>
          </div>
          <div className={styles.socials}>
            <a href="#" className={styles.social}>
              <IconInstagramLogo />
            </a>
            <a href="#" className={styles.social}>
              <IconFacebookLogo />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Instructors;
