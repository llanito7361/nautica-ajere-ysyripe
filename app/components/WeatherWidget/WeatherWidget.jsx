'use client'
import React, { useEffect } from 'react';

const WeatherWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'weatherwidget-io-js';
    script.src = 'https://weatherwidget.io/js/widget.min.js';
    script.async = true;

    document.body.appendChild(script);

    
    return () => {
      // Limpia el script al desmontar el componente
      document.body.removeChild(script);
    };
  }, []);

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
