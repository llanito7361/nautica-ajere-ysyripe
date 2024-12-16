import React from 'react';
import styles from './InfoAboutUs.module.css';

const InfoAboutUs = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Nosotros</h2>
      <main className={styles.main}>
        <section>
          <h3 className={styles.sectionTitle}>¿Quiénes Somos?</h3>
          <p className={styles.text}>
            Somos una organización dedicada a promover el deporte y la conexión con la naturaleza
            a través de experiencias náuticas únicas. Trabajamos con pasión para ofrecer actividades
            seguras, divertidas y enriquecedoras para todos.
          </p>
        </section>
        <section>
          <h3 className={styles.sectionTitle}>Nuestra Visión y Misión</h3>
          <p className={styles.text}>
            <strong>Misión:</strong> Inspirar a las personas a redescubrir la conexión con el agua,
            el deporte y la naturaleza mediante experiencias seguras y significativas.
          </p>
          <p className={styles.text}>
            <strong>Visión:</strong> Ser líderes en turismo náutico sostenible y educación en deportes acuáticos
            en nuestra región.
          </p>
        </section>
        <section>
          <h3 className={styles.sectionTitle}>Valores</h3>
          <ul className={styles.list}>
            <li><strong>Sostenibilidad:</strong> Protegemos el medioambiente en todas nuestras actividades.</li>
            <li><strong>Innovación:</strong> Buscamos mejorar continuamente la calidad de nuestros servicios.</li>
            <li><strong>Comunidad:</strong> Fomentamos el trabajo en equipo y la inclusión.</li>
            <li><strong>Seguridad:</strong> Garantizamos experiencias seguras para todos los participantes.</li>
          </ul>
        </section>
        <section>
          <h3 className={styles.sectionTitle}>Impacto</h3>
          <p className={styles.text}>
            Con más de 5 años de experiencia, hemos recibido a miles de visitantes y colaborado
            con comunidades locales para promover la sostenibilidad y el turismo responsable.
          </p>
        </section>
        <section>
          <h3 className={styles.sectionTitle}>Únete a Nosotros</h3>
          <p className={styles.text}>
            Ven y vive la experiencia de la naturaleza en su máxima expresión. ¡Te esperamos con los brazos abiertos!
          </p>
        </section>
      </main>
    </div>
  );
};

export default InfoAboutUs;
