import AsideButtons from  "../AsideButtons/AsideButtons" 
import NavBar from  "../Navbar/Navbaroriginal.jsx" 
import  Footer   from '../Footer/Footer'
import styles from './Layout.module.css'


const Layout = ({children}) => {
        return (
            <div className={styles.rootContainer}>
              <NavBar className={styles.everywhereComponents} />
              <AsideButtons className={styles.everywhereComponents} />
              <main className={styles.mainContent}>{children}</main>
              <Footer className={`${styles.everywhereComponents} ${styles.footer}`} />
            </div> )
}

export default Layout