// 'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import styles from './TresBotones.module.css';
// import { escuela, kayak, campamento } from '../../assets/icons/index.js';
// import  Link   from 'next/link';
// import Image from 'next/image';

// const TresBotones = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect(); // Dejar de observar después de que sea visible
//         }
//       },
//       { threshold: 0.1 } // Opcional: porcentaje visible requerido para activar
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => observer.disconnect(); // Limpieza del observer
//   }, []);
// // console.log('toyaca')
//   return (
//     <div
//       ref={ref}
//       className={`${styles.tresBotones} ${isVisible ? styles.visible : ''}`}
//     >
//       <Link className={styles.navlink} href='/eventos/travesias'>
//       <div className={`${styles.boton} ${styles.boton1}`}>
//         <Image width={30} height={30} src={kayak} alt="" />
//         <p>TRAVESIAS</p>
//       </div>
//       </Link>
//       <Link className={styles.navlink} href='/eventos/escuela'>
//       <div className={`${styles.boton} ${styles.boton2}`}>
//         <Image width={30} height={30} src={escuela} alt="" />
//         <p>ESCUELA</p>
//       </div>
//       </Link>
//       <Link className={styles.navlink} href='/eventos/campamentos'>
//       <div className={`${styles.boton} ${styles.boton3}`}>
//         <Image width={30} height={30} src={campamento} alt="" />
//         <p>CAMPAMENTO</p>
//       </div>
//       </Link>
    
//     </div>
//   );
// };

// export default TresBotones;
'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './EventosBotones.module.css';
import { escuela, kayak, campamento,colonia } from '../../../public/assets/icons/index.js';
import Link from 'next/link';
import Image from 'next/image';

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
      { threshold: 0.1 }
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
      <Link className={styles.navLink} href="/eventos/travesias">
        <div className={`${styles.boton} ${styles.boton1}`}>
          <Image width={30} height={30} src={kayak} alt="Icono Travesías" />
          <p>TRAVESÍAS</p>
        </div>
      </Link>
      <Link className={styles.navLink} href="/eventos/escuela">
        <div className={`${styles.boton} ${styles.boton2}`}>
          <Image width={30} height={30} src={escuela} alt="Icono Escuela" />
          <p>ESCUELA</p>
        </div>
      </Link>
      <Link className={styles.navLink} href="/eventos/campamentos">
        <div className={`${styles.boton} ${styles.boton3}`}>
          <Image width={30} height={30} src={campamento} alt="Icono Campamentos" />
          <p>CAMPAMENTO</p>
        </div>
      </Link>
      <Link className={styles.navLink} href="/eventos/campamentos">
        <div className={`${styles.boton} ${styles.boton3}`}>
          <Image width={30} height={30} src={colonia} alt="Icono Campamentos" />
          <p>COLONIA</p>
        </div>
      </Link>
    </div>
  );
};

export default TresBotones;
