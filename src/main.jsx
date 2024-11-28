import {Contactanos, Eventos,SobreNosotros ,Root} from './Views/index.js'
 
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: < Root/>,
    children: [
      {path: '/contactanos', element: <Contactanos />},
      {path: '/eventos',     element:<Eventos />}      ,
      {path: '/sobrenosotros', element: <SobreNosotros />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)