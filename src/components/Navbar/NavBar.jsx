import { useState } from 'react';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import logoBlack from '../../assets/logoblack.jpg'
import logowhite from '../../assets/logowhite.jpg'
 import LOGO from '../../assets/icons/logo.jpg' 

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className="linksLeft">
        <NavLink className={styles.navlink} to='/'>
          <img src={logowhite} alt="not found" style={{ height: '80px' }} />
        </NavLink>
      </div>
      <div className={styles.linksRight}>
      <div 
  className={styles.dropdownContainer} 
  onMouseEnter={() => setShowDropdown(true)} 
  onMouseLeave={() => setShowDropdown(false)}
>
  <NavLink className={styles.navlink} to='/eventos/travesias'>Eventos</NavLink> {/* CAMBIAR A /eventos solo cuando se arregle*/}
  {showDropdown && (
    <div className={styles.dropdown}>
      <NavLink to='/eventos/travesias'>Travesías</NavLink>
      <NavLink to='/eventos/escuela'>Escuela</NavLink>
      <NavLink to='/eventos/campamentos'>Campamentos</NavLink>
    </div>
  )}
</div>

        <NavLink className={styles.navlink} to='/sobrenosotros'>Sobre Nosotros</NavLink>
        <NavLink className={styles.navlink} to='/contactanos'>Contáctanos</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
