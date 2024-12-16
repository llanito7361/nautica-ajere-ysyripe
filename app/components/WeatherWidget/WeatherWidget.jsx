'use client';
import React, { useEffect, useState } from 'react';

const WeatherWidget = () => {
  const [isLoaded, setIsLoaded] = useState(false); // Estado para verificar si el script ha cargado

  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'weatherwidget-io-js';
    script.src = 'https://weatherwidget.io/js/widget.min.js';
    script.async = true;
    script.onload = () => setIsLoaded(true); // Marca como cargado cuando el script termine de cargarse

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Limpia el script cuando el componente se desmonta
    };
  }, []);

  // Solo renderiza el widget cuando el script ha sido cargado
  if (!isLoaded) {
    return null; // Retorna null si el script no ha sido cargado
  }

  return (
    <a
      className="weatherwidget-io"
      href="https://forecast7.com/es/n26d19n58d18/formosa/"
      data-label_1="FORMOSA"
      data-label_2="CLIMA"
      data-theme="original"
    >
      FORMOSA CLIMA
    </a>
  );
};

export default WeatherWidget;
