import React from 'react';
import { ReactComponent as IconWeight } from '../../assets/icons/gym-weight.svg';
import { ReactComponent as IconInstagramLogo } from '../../assets/icons/instagram-logo.svg';
import { ReactComponent as IconFacebookLogo } from '../../assets/icons/facebook-logo.svg';
import imgFounder from '../../assets/images/founder-card.webp';
import imgInstructorCrossfit from '../../assets/images/instructor-crossfit.webp';
import imgInstructorFunctional from '../../assets/images/instructor-functional.webp';
import styles from './Intructors.module.css';

const Instructors = () => {
  return (
    <section className={styles.container}>
      <div className="headerSection right">
        <h1 className="titleSection right">
          Profissionais BIO <IconWeight />
        </h1>
        <p className="descriptionSection">
          Descubra uma variedade de programas personalizados para alcançar suas
          metas.
        </p>
      </div>

      <ul className={styles.content}>
        <li className={styles.instructor} data-aos="fade-right">
          <div className={styles.card}>
            <img
              src={imgFounder}
              alt="Imagem do fundador da BIO e instrutor de musculação"
              loading="lazy"
            />

            <div className={styles.info}>
              <h2 className={styles.name}>Lucas Martinez</h2>

              <p className={styles.function}>
                Instrutor de musculação e fundador da BIO
              </p>
            </div>
          </div>
          <div className={styles.socials}>
            <a
              href="#"
              className={styles.social}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <IconInstagramLogo />
            </a>
            <a
              href="#"
              className={styles.social}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <IconFacebookLogo />
            </a>
          </div>
        </li>

        <li className={styles.instructor}>
          <div
            className={styles.card}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src={imgInstructorCrossfit}
              alt="Imagem do Instrutor de Crossift"
              loading="lazy"
            />

            <div className={styles.info}>
              <h2 className={styles.name}>Ricardo Torres</h2>

              <p className={styles.function}>Instrutor de Crossfit</p>
            </div>
          </div>
          <div className={styles.socials}>
            <a
              href="#"
              className={styles.social}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <IconInstagramLogo />
            </a>
            <a
              href="#"
              className={styles.social}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <IconFacebookLogo />
            </a>
          </div>
        </li>

        <li className={styles.instructor}>
          <div
            className={styles.card}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src={imgInstructorFunctional}
              alt="Imagem da instrutora de Treino Funcional"
              loading="lazy"
            />

            <div className={styles.info}>
              <h2 className={styles.name}>Isabela Silva</h2>

              <p className={styles.function}>
                Instrutora de Treinamento Funcional
              </p>
            </div>
          </div>
          <div className={styles.socials}>
            <a
              href="#"
              className={styles.social}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <IconInstagramLogo />
            </a>
            <a
              href="#"
              className={styles.social}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <IconFacebookLogo />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Instructors;
