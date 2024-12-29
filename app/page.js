 import Head from 'next/head'
import styles from './Inicio.module.css'; // Importamos los estilos
import vistosa from '../public/assets/vistosa.jpg';
import Image from 'next/image';
import TresBotones from './components/EventosBotones/EventosBotones.jsx';
import Carrusel from './components/Carrusel/Carrusel.jsx';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';

const Inicio = () => {
  return (
      <>
         <Head>
        <title>Nautica Formosa - Canotaje y Travesías en Formosa</title>
        <meta name="description" content="Disfruta experiencias náuticas únicas en Formosa, Argentina. Canotaje, travesías y más con Nautica Ajere Ysyripe." />
        <meta name="keywords" content="nautica, Formosa, canotaje, travesías, experiencias náuticas, Argentina" />
        <meta name="author" content="Nautica Ajere Ysyripe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Nautica Formosa - Canotaje y Travesías" />
        <meta property="og:description" content="Vive aventuras únicas en Formosa, Argentina. Canotaje y travesías inolvidables." />
        <meta property="og:image" content="/assets/vistosa.jpg" />
        <meta property="og:url" content="https://www.tudominio.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.container}>
      {/* Contenedor de la imagen */}
      <div className={styles.imageContainer}>
        <Image
          src={vistosa}
          alt="fondo vistoso"
          className={styles.image}
          layout="fill" // Llenar el contenedor
          priority={true} // Optimiza la carga
        />
      </div>
      
      {/* Contenido adicional */}
      <h1 className={styles.title}>
        Nautica Ajere Ysyripe - Canotaje en Formosa, Argentina
      </h1>
      <h2 className={styles.description}>Experiencias náuticas, ¿te sumás?</h2>
      <TresBotones />
      <Carrusel />
      {/* <WeatherWidget /> */}
    </div>
      </>
  );
};

export default Inicio;
