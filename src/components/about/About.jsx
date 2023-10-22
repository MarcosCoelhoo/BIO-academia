import React from 'react';
import styles from './About.module.css';
import imgFounder from '../../assets/images/founder.webp';
import { ReactComponent as IconWeight } from '../../assets/icons/gym-weight.svg';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.image} data-aos="fade-right">
        <img src={imgFounder} alt="Imagem fundador BIO" loading="lazy" />
      </div>

      <div className={styles.content}>
        <div className="headerSection left">
          <h1 className="titleSection left" data-aos="fade-left">
            <IconWeight /> A BIO
          </h1>
          <p
            className="descriptionSection"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            A Academia BIO é o seu destino para uma transformação completa. Com
            instrutores altamente qualificados, equipamentos de última geração,
            estamos empenhados em ajudá-lo a atingir seus objetivos de saúde e
            bem-estar.
          </p>
        </div>

        <div
          className={styles.buttonContainer}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <a href="#" className={`${styles.button} buttonPrincipal`}>
            Quero entrar!
            <span className="material-symbols-outlined">east</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
