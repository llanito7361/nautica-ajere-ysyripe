// import vistosa from './assets/vistosa.jpg';
// import Image from 'next/image';
// import TresBotones from './components/TresBotones/TresBotones.jsx';
// import Carrusel from './components/Carrusel/Carrusel.jsx';
// import WeatherWidget from './components/WeatherWidget/WeatherWidget';

// const Inicio = () => {
//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <div
//         style={{
//           width: '100vw', // Ocupa el 100% del ancho del viewport
//           height: 'auto', // Ajusta la altura automáticamente según la proporción
//           maxHeight: '80vh', // Altura máxima del 80% del viewport
//           overflow: 'hidden', // Asegura que no haya desbordamientos
//         }}
//       >
//         <Image
//           src={vistosa}
//           alt="fondo vistoso"
//           layout="fill" // Usa el espacio completo del contenedor
//           objectFit="contain" // Mantiene la proporción sin recortar
//           style={{
//             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3), 0px -4px 8px rgba(0, 0, 0, 0.3)', // Sombra elegante
//           }}
//           priority={true} // Optimiza la carga de esta imagen
//         />
//       </div>
//       <h1 style={{ textAlign: 'center', margin: '1rem 0' }}>
//         Nautica Ajere Ysyripe - Canotaje en Formosa, Argentina
//       </h1>
//       <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Experiencias náuticas, ¿te sumás?</p>
//       <TresBotones />
//       <Carrusel />
//       <WeatherWidget />
//     </div>
//   );
// };

// export default Inicio;
import styles from './Inicio.module.css'; // Importamos los estilos
import vistosa from '../public/assets/vistosa.jpg';
import Image from 'next/image';
import TresBotones from './components/EventosBotones/EventosBotones.jsx';
import Carrusel from './components/Carrusel/Carrusel.jsx';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';

const Inicio = () => {
  return (
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
  );
};

export default Inicio;
