import styles from './Root.module.css'
import { Outlet, useLocation } from 'react-router-dom'
import Inicio from '../Inicio'
import NavBar from "../../components/Navbar/NavBar";
import { Footer } from '../../components/Footer/Footer';
import AsideButtons from '../../components/AsideButtons/AsideButtons';

const Root = () => {

  const location = useLocation()

  return (

<div>


      <NavBar  className='everywhereComponents'/>
      <AsideButtons  className='everywhereComponents'/>
      <Outlet />

      <Footer className='everywhereComponents'/>


    </div>
  )
}

export default Root