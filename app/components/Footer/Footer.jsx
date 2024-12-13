import styles from './Footer.module.css';
import Image from 'next/image';

const URL_UBICACION_GRANJA = 'https://www.google.com/maps/place/Granja+Don+Julian/@-26.2266694,-58.1955946,16.19z/data=!4m12!1m5!3m4!2zMzTCsDUwJzI5LjciUyA1N8KwNTUnMDkuMCJX!8m2!3d-34.84157!4d-57.91917!3m5!1s0x945ca883a315cd79:0x3cbd3c7a615df482!8m2!3d-26.2305274!4d-58.1933131!16s%2Fg%2F11f03zz0nt?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D';

import logowhite from '../../assets/logowhite.jpg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        {/* Izquierda: Imagen y ubicación */}
        <div className={styles.leftSection}>
          <Image src={logowhite} alt="Logo" className={styles.footerImg} />
          <a
            href={URL_UBICACION_GRANJA}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.locationLink}
          >
            <strong>📍 Ubicación</strong>
          </a>
        </div>

        {/* Derecha: Teléfono y correo */}
        <div className={styles.rightSection}>
          <p>
            Teléfono: <span className={styles.highlight}><strong>3704567193</strong></span>
          </p>
          <p>
            Correo: <span className={styles.highlight}><strong>hebergod@gmail.com</strong></span>
          </p>
        </div>
      </div>

      {/* Abajo: Copyright */}
      <div className={styles.bottomSection}>
        <p>Copyright 2022. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
