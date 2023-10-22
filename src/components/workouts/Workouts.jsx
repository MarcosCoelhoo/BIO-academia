import React from 'react';
import styles from './Workouts.module.css';
import { ReactComponent as IconWeight } from '../../assets/icons/gym-weight.svg';
import imgBodybuilding from '../../assets/images/bodybuilding.webp';
import imgFuncitional from '../../assets/images/functional.webp';
import imgCrossfit from '../../assets/images/crossfit.webp';

const Workouts = () => {
  return (
    <section className={styles.container} id="workouts">
      <div className="headerSection left" data-aos="fade-right">
        <h1 className="titleSection left">
          <IconWeight /> Bio Treinos
        </h1>
        <p className="descriptionSection">
          Descubra uma variedade de programas personalizados para alcançar suas
          metas.
        </p>
      </div>

      <ul className={styles.content}>
        <li className={styles.training} data-aos="fade-up">
          <h2 className={styles.name}>Musculação</h2>

          <div className={styles.image}>
            <img
              src={imgBodybuilding}
              alt="Homem treinando musculação"
              loading="lazy"
            />
          </div>

          <div
            className={styles.buttonContainer}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a href="#" className={styles.button}>
              Quero treinar!
            </a>
          </div>
        </li>

        <li className={styles.training} data-aos="fade-up" data-aos-delay="100">
          <h2 className={styles.name}>Funcional</h2>

          <div className={styles.image}>
            <img
              src={imgFuncitional}
              alt="Mulher treinando treino funcional"
              loading="lazy"
            />
          </div>

          <div
            className={styles.buttonContainer}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a href="#" className={styles.button}>
              Quero treinar!
            </a>
          </div>
        </li>

        <li className={styles.training} data-aos="fade-up" data-aos-delay="200">
          <h2 className={styles.name}>Crossfit</h2>

          <div className={styles.image}>
            <img
              src={imgCrossfit}
              alt="Homem fazendo uma execução de crossfit"
              loading="lazy"
            />
          </div>

          <div
            className={styles.buttonContainer}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a href="#" className={styles.button}>
              Quero treinar!
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Workouts;
