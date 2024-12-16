import React from 'react';
import styles from './Colonia.module.css'; // Importar los estilos

const Colonia = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Colonia de Lunes a Jueves</h1>
      <p className={styles.description}>
        Disfruta de una experiencia única con nuestra colonia, diseñada para brindar diversión y aprendizaje a los más pequeños. 
        De lunes a jueves, de 8 a 12 AM, ofrecemos actividades como escuela de natación, deportes y juegos al aire libre, además de una colación para recargar energías.
      </p>

      <section className={styles.activities}>
        <h2>Actividades de la Colonia</h2>
        <ul>
          <li><strong>Escuela de Natación</strong> – Clases adaptadas a todos los niveles.</li>
          <li><strong>Actividades al Aire Libre</strong> – Juegos, deportes y exploración en la naturaleza.</li>
          <li><strong>Colación</strong> – Una merienda para mantener energías durante la mañana.</li>
        </ul>
      </section>

      <section className={styles.schedule}>
        <h2>Horario</h2>
        <p>Lunes a Jueves: 8:00 AM - 12:00 PM</p>
      </section>

      <section className={styles.location}>
        <h2>Ubicación</h2>
        <p>La colonia se lleva a cabo en nuestras instalaciones al aire libre, en un ambiente seguro y divertido.</p>
      </section>
    </div>
  );
};

export default Colonia;
