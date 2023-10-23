import React from 'react';
import styles from './Location.module.css';
import { ReactComponent as IconWeight } from '../../assets/icons/gym-weight.svg';

const Location = () => {
  return (
    <section className={styles.container} id="location">
      <div className="headerSection right">
        <h1 className="titleSection right">
          Venha nos conhecer <IconWeight />
        </h1>
        <p className="descriptionSection">
          Venha até nós ou entre em contato facilmente pelas nossas redes
          sociais.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.mapContainer} data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1369.6202927411487!2d-49.8614051494237!3d-2.0014731591099326!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1697831837227!5m2!1spt-BR!2sbr"
            className={styles.map}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.info} data-aos="fade-up" data-aos-delay="100">
          <h2 className={styles.address}>TV. Airton Sena, Marapira</h2>
          <p className={styles.reference}>Próximo ao posto de saúde</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
