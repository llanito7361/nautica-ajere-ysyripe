import Carrusel from '../components/Carrusel/Carrusel' 
import vistosa from '../../assets/vistosa.jpg'
import TresBotones from '../components/TresBotones/TresBotones';
import WeatherWidget from '../components/WeatherWidget/WeatherWidget';
import Image from 'next/image';

const Inicio = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
      {/* <h1 style={{ textAlign: "center" }}>pagina main</h1> */}
      <Image
       src={vistosa} 
       alt="fondo vistoso" 
        style={{
          width: '100%',
          height: 'auto',
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3) , 0px -4px 8px rgba(0,0,0,0.3)" // Sutil sombra

        }}
/>
      <h1>Nautica Ajere Ysyripe - Canotaje en Formosa, Argentina</h1>
        <p>Experiencias nauticas, te sumas?</p>
        <TresBotones />
      <Carrusel />
      <WeatherWidget />
    </div>
  );
};

export default Inicio;
