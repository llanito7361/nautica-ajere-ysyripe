import Carrusel from "../components/Carrusel/Carrusel";
import vistosa from '../assets/vistosa.jpg'

const Inicio = () => {
  return (
    <div style={{height:'100vh'}} >
      {/* <h1 style={{ textAlign: "center" }}>pagina main</h1> */}
      <img
       src={vistosa} 
       alt="fondo vistoso" 
        style={{
          width: '100%',
          height: 'auto',
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3) , 0px -4px 8px rgba(0,0,0,0.3)" // Sutil sombra

        }}
/>
      <Carrusel />
    </div>
  );
};

export default Inicio;
