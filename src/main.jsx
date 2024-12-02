import {
  Contactanos,
  Eventos,
  SobreNosotros,
  Escuela,
  Campamentos,
  Travesias,
  Inicio,
  Root,

} from "./Views/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Inicio /> },
      { path: "/contactanos", element: <Contactanos /> },
      {
        path: "/eventos",
        element: <Eventos />,
        children: [
          { path: "travesias", element: <Travesias /> },
          {path: 'escuela', element: <Escuela />},
          {path: 'campamentos', element: <Campamentos />},

        ],
      },
      { path: "/sobrenosotros", element: <SobreNosotros /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
