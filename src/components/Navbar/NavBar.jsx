import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
        <div className="linksLeft">
            <NavLink className={styles.navlink} to='/'><button>Inicio</button></NavLink>
        </div>
        <div className="linksRight">
            <NavLink className={styles.navlink} to='/eventos'><button>Eventos</button></NavLink>
            <NavLink className={styles.navlink} to='/sobrenosotros'><button>Sobre Nosotros</button></NavLink>
            <NavLink className={styles.navlink} to='/contactanos'><button>Contactanos</button></NavLink>
        </div>
    </div>
  )
}

export default NavBar