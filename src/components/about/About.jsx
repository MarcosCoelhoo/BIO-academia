import React from 'react';
import styles from './About.module.css';
import imgFounder from '../../assets/images/founder.png';
import { ReactComponent as IconWeight } from '../../assets/icons/gym-weight.svg';

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <img src={imgFounder} alt="Imagem fundador BIO" />
      </div>

      <div className={styles.content}>
        <div className={styles.info}>
          <h1 className="titleSection">
            <IconWeight /> A BIO
          </h1>
          <p className="descriptionSection">
            A Academia BIO é o seu destino para uma transformação completa. Com
            instrutores altamente qualificados, equipamentos de última geração,
            estamos empenhados em ajudá-lo a atingir seus objetivos de saúde e
            bem-estar.
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <a href="#" className={`${styles.button} buttonPrincipal`}>
            Quero entrar!
            <span class="material-symbols-outlined">east</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
