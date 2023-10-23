import React from 'react';
import styles from './Time.module.css';

const Time = () => {
  const [isOpenGym, setIsOpenGym] = React.useState(false);

  React.useEffect(() => {
    const timeZone = 'America/Sao_Paulo';

    const date = new Date();

    const options = {
      timeZone: timeZone,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    };

    const currentTime = date.toLocaleString('pt-BR', options);

    const [hour, minute] = currentTime.split(':');

    if (
      (hour >= 6 && hour < 12) ||
      (hour === 12 && minute === 0) ||
      (hour === 13 && minute >= 30) ||
      (hour >= 14 && hour < 22)
    ) {
      return setIsOpenGym(true);
    }

    console.log('Academia está fechada.');
    setIsOpenGym(false);
  }, []);

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
        className={`${styles.feedback} ${
          isOpenGym ? styles['open'] : styles['close']
        }`}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className={styles.feedbackText}>
          {isOpenGym ? 'Estamos abertos :)' : 'Estamos fechados :('}
        </h2>
        {/* <span className={styles.feedbackDecoration}></span> */}
      </div>
    </section>
  );
};

export default Time;
