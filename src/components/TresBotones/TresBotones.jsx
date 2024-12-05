import React, { useEffect, useRef, useState } from 'react';
import styles from './TresBotones.module.css';
import { escuela, kayak, campamento } from '../../assets/icons/index';
import { NavLink } from 'react-router-dom';

const TresBotones = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Dejar de observar después de que sea visible
        }
      },
      { threshold: 0.1 } // Opcional: porcentaje visible requerido para activar
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect(); // Limpieza del observer
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.tresBotones} ${isVisible ? styles.visible : ''}`}
    >
      <NavLink className={styles.navLink} to='/eventos/travesias'>
      <div className={`${styles.boton} ${styles.boton1}`}>
        <img src={kayak} alt="" />
        <p>TRAVESIAS</p>
      </div>
      </NavLink>
      <NavLink className={styles.navLink} to='/eventos/escuela'>
      <div className={`${styles.boton} ${styles.boton2}`}>
        <img src={escuela} alt="" />
        <p>ESCUELA</p>
      </div>
      </NavLink>
      <NavLink className={styles.navLink} to='/eventos/campamentos'>
      <div className={`${styles.boton} ${styles.boton3}`}>
        <img src={campamento} alt="" />
        <p>CAMPAMENTO</p>
      </div>
      </NavLink>
    
    </div>
  );
};

export default TresBotones;
