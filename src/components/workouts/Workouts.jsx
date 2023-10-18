import React from 'react';
import styles from './Workouts.module.css';
import { ReactComponent as IconWeight } from '../../assets/icons/gym-weight.svg';
import imgBodybuilding from '../../assets/images/bodybuilding.png';
import imgFuncitional from '../../assets/images/functional.png';
import imgCrossfit from '../../assets/images/crossfit.png';

const Workouts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className="titleSection">
          <IconWeight /> Bio Treinos
        </h1>
        <p className="descriptionSection">
          Descubra uma variedade de programas personalizados para alcançar suas
          metas.
        </p>
      </div>

      <ul className={styles.workoutsList}>
        <li className={styles.training}>
          <h2 className={styles.name}>Musculação</h2>

          <div className={styles.image}>
            <img src={imgBodybuilding} alt="" />
          </div>

          <a href="#" className={styles.button}>
            Quero treinar!
          </a>
        </li>

        <li className={styles.training}>
          <h2 className={styles.name}>Funcional</h2>

          <div className={styles.image}>
            <img src={imgFuncitional} alt="" />
          </div>

          <a href="#" className={styles.button}>
            Quero treinar!
          </a>
        </li>

        <li className={styles.training}>
          <h2 className={styles.name}>Crossfit</h2>

          <div className={styles.image}>
            <img src={imgCrossfit} alt="" />
          </div>

          <a href="#" className={styles.button}>
            Quero treinar!
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Workouts;
