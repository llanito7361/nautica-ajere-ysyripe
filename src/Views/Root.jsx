import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../components/Navbar/NavBar'
const Root = () => {

  const location = useLocation()

  return (

<div>
{location.pathname  !== '/' && <NavBar /> }
        <h1>pagina main</h1>
        <Outlet />
    </div>
  )
}

export default Root