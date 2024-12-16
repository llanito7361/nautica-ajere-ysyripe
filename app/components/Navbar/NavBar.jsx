'use client';
import { useState } from 'react';
import styles from './NavBar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logowhite from '../../../public/assets/logowhite.jpg';
import hamburguermenu from '../../../public/assets/icons/hamburguermenu.jpg';

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.linksLeft}>
        <Link href="/">
          <Image className={styles.navlinkImage} src={logowhite} alt="Logo" />
        </Link>
      </div>


      <div
        className={ styles.linksRight }
      >
        {/* <Link
          className={styles.navlink}
          href="/eventos/travesias"
          onClick={() => setShowMobileMenu(false)}
        >
          Eventos
        </Link>
        <Link
          className={styles.navlink}
          href="/eventos/escuela"
          onClick={() => setShowMobileMenu(false)}
        >
          Escuela
        </Link>
        <Link
          className={styles.navlink}
          href="/eventos/campamentos"
          onClick={() => setShowMobileMenu(false)}
        >
          Campamentos
        </Link> */}
        <Link
          className={styles.navlink}
          href="/sobrenosotros"
          onClick={() => setShowMobileMenu(false)}
        >
          Sobre Nosotros
        </Link>
        {/* <Link
          className={styles.navlink}
          href="/contactanos"
          onClick={() => setShowMobileMenu(false)}
        >
          Contáctanos
        </Link> */}
      </div>



      {/* Ícono del menú hamburguesa */}
      <div className={styles.hamburgerIcon} onClick={toggleMobileMenu}>
        <Image className={styles.hamburgerIconImage} src={hamburguermenu} alt="Menú" />
      </div>

      {/* Menú móvil */}
      <div
        className={`${styles.mobileDropdown} ${showMobileMenu ? styles.active : ''}`}
      >
        <Link
          className={styles.navlink}
          href="/eventos/travesias"
          onClick={() => setShowMobileMenu(false)}
        >
          Eventos
        </Link>
        <Link
          className={styles.navlink}
          href="/eventos/escuela"
          onClick={() => setShowMobileMenu(false)}
        >
          Escuela
        </Link>
        <Link
          className={styles.navlink}
          href="/eventos/campamentos"
          onClick={() => setShowMobileMenu(false)}
        >
          Campamentos
        </Link>
        <Link
          className={styles.navlink}
          href="/sobrenosotros"
          onClick={() => setShowMobileMenu(false)}
        >
          Sobre Nosotros
        </Link>
        <Link
          className={styles.navlink}
          href="/contactanos"
          onClick={() => setShowMobileMenu(false)}
        >
          Contáctanos
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;


