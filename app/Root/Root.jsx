import styles from './Root.module.css';
// import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/Navbar/Navbaroriginal.jsx';
import { Footer } from '../components/Footer/Footer';
import AsideButtons from '../components/AsideButtons/AsideButtons';

const Root = () => {
  // const location = useLocation();

  return (
    <div className={styles.rootContainer}>
      <NavBar className={styles.everywhereComponents} />

      <AsideButtons className={styles.everywhereComponents} />
      
      {/* <div className={styles.mainContent}>
        <Outlet />
      </div> */}
      <Footer className={`${styles.everywhereComponents}   ${styles.footer}`} />
    </div>
  );
};

export default Root;
