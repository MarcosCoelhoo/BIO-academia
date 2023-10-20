import React from 'react';
import { ReactComponent as IconWeight } from '../../assets/icons/gym-weight.svg';
import styles from './Pricing.module.css';

const BENEFITS = {
  basic: [
    'Musculação ilimitada',
    'Treinamento funcional semanal',
    'Horário flexível',
    'Acompanhamento inicial',
  ],
  premium: [
    'Musculação ilimitada',
    'Treinamento funcional semanal',
    'Crossfit 2x por semana',
    'Acompanhamento personalizado',
    'Avaliação e plano de nutrição',
  ],
  strong: [
    'Musculação ilimitada',
    'Treinamento funcional semanal',
    'Crossfit ilimitado',
    'Acompanhamento personalizado ilimitado',
    'Avaliação, plano de nutrição e suplementação',
    'Desconto em produtos da academia',
  ],
};

const Pricing = () => {
  return (
    <section className={styles.container}>
      <div className="headerSection left">
        <h1 className="titleSection left">
          <IconWeight /> Planos BIO
        </h1>

        <p className="descriptionSection">
          Escolha o plano perfeito para o seu estilo de vida e objetivos.
        </p>
      </div>

      <ul className={styles.cards}>
        <li className={styles.card}>
          <div className={styles.infos}>
            <h2 className={styles.name}>Plano básico</h2>
            <div className={styles.priceContainer}>
              <h3 className={styles.price}>
                79<span className={styles.cents}>,99</span>
              </h3>
              <span className={styles.month}>/mês</span>
            </div>
          </div>

          <ul className={styles.benefits}>
            {BENEFITS.basic.map((benefit, index) => (
              <li key={index} className={styles.benefitContainer}>
                <span className={`${styles.icon} material-symbols-outlined`}>
                  select_check_box
                </span>
                <p className={styles.benefit}>{benefit}</p>
              </li>
            ))}
          </ul>

          <a href="#" className={styles.button}>
            Assinar Plano
          </a>
        </li>

        <li className={`${styles.card} ${styles.recommended}`}>
          <span className={styles.recommendedDecoration}>
            <p>Recomendado</p>
          </span>
          <div className={styles.infos}>
            <h2 className={styles.name}>Plano strong</h2>
            <div className={styles.priceContainer}>
              <h3 className={styles.price}>
                99<span className={styles.cents}>,99</span>
              </h3>
              <span className={styles.month}>/mês</span>
            </div>
          </div>

          <ul className={styles.benefits}>
            {BENEFITS.strong.map((benefit, index) => (
              <li key={index} className={styles.benefitContainer}>
                <span className={`${styles.icon} material-symbols-outlined`}>
                  select_check_box
                </span>
                <p className={styles.benefit}>{benefit}</p>
              </li>
            ))}
          </ul>

          <a href="#" className={styles.button}>
            Quero Economizar
          </a>
        </li>

        <li className={styles.card}>
          <div className={styles.infos}>
            <h2 className={styles.name}>Plano premium</h2>
            <div className={styles.priceContainer}>
              <h3 className={styles.price}>
                89<span className={styles.cents}>,99</span>
              </h3>
              <span className={styles.month}>/mês</span>
            </div>
          </div>

          <ul className={styles.benefits}>
            {BENEFITS.premium.map((benefit, index) => (
              <li key={index} className={styles.benefitContainer}>
                <span className={`${styles.icon} material-symbols-outlined`}>
                  select_check_box
                </span>
                <p className={styles.benefit}>{benefit}</p>
              </li>
            ))}
          </ul>

          <a href="#" className={styles.button}>
            Assinar Plano
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Pricing;
