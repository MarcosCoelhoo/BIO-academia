import React from 'react';
import styles from './Time.module.css';

const Time = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content} data-aos="fade-right">
        <h1 className={styles.title}>Segunda à Sábado</h1>
        <p className={styles.description}>
          06h - 12h
          <span className={styles.divisor}></span>
          13:30h - 22h
        </p>
      </div>

      <div
        className={`${styles.feedback} ${styles['close']}`}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className={styles.feedbackText}>Fechado</h2>
        <span className={styles.feedbackDecoration}></span>
      </div>
    </section>
  );
};

export default Time;
