'use client';

import { useState } from 'react';
import styles from './NavBar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logowhite from '../../assets/logowhite.jpg';
import hamburguermenu from '../../assets/icons/hamburguermenu.jpg'; // Ajusta esta ruta si es necesario

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false); // Estado del dropdown para desktop
  const [showMobileMenu, setShowMobileMenu] = useState(false); // Estado del menú hamburguesa

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className={styles.navbar}>
      {/* Logo */}
      <div className={styles.linksLeft}>
        <Link href="/">
          <Image className={styles.navlinkImage} src={logowhite} alt="Logo" />
        </Link>
      </div>

      {/* Menú principal (desktop) */}
      <div className={`${styles.linksRight} ${styles.desktopOnly}`}>
        <div
          className={styles.dropdownContainer}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Link className={styles.navlink} href="/eventos/travesias">
            Eventos
          </Link>
          {showDropdown && (
            <div className={styles.dropdown}>
              <Link className={styles.navlink} href="/eventos/travesias">Travesías</Link>
              <Link className={styles.navlink} href="/eventos/escuela">Escuela</Link>
              <Link className={styles.navlink} href="/eventos/campamentos">Campamentos</Link>
            </div>
          )}
        </div>
        <Link className={styles.navlink} href="/sobrenosotros">Sobre Nosotros</Link>
        <Link className={styles.navlink} href="/contactanos">Contáctanos</Link>
      </div>

      {/* Ícono de menú hamburguesa */}
      <div className={`${styles.hamburgerIcon} ${styles.mobileOnly}`} onClick={toggleMobileMenu}>
        <Image className={styles.hamburgerIconImage} src={hamburguermenu} alt="Menú" />
      </div>

      {/* Menú móvil */}
      {showMobileMenu && (
        <div className={styles.mobileDropdown}>
          <Link className={styles.navlink} href="/eventos/travesias">Eventos</Link>
          <Link className={styles.navlink} href="/eventos/escuela">Escuela</Link>
          <Link className={styles.navlink} href="/eventos/campamentos">Campamentos</Link>
          <Link className={styles.navlink} href="/sobrenosotros">Sobre Nosotros</Link>
          <Link className={styles.navlink} href="/contactanos">Contáctanos</Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
