import { campamento } from "../../assets/index";
import WeatherWidget from "../../components/WeatherWidget/WeatherWidget";

const Campamentos = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h3 style={{ textAlign: 'center', color: '#2c3e50' }}>Campamentos Tauki</h3>
      <img 
        src={campamento} 
        alt="Campamento Tauki" 
        style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '20px' }}
      />
      <p>
        Bienvenidos a los <strong>Campamentos Tauki</strong>, una experiencia única para conectar con la naturaleza, disfrutar de actividades al aire libre, y fortalecer vínculos en un entorno seguro y divertido.
      </p>
      <p>
        Ubicados en la hermosa región de la Granja Don Julián, nuestros campamentos ofrecen una amplia variedad de actividades, desde senderismo y juegos de orientación, hasta talleres de supervivencia y noches bajo las estrellas.
      </p>

      <h4>¿Qué ofrecemos?</h4>
      <ul>
        <li>Exploración de la naturaleza y senderismo.</li>
        <li>Talleres de supervivencia y técnicas de campamento.</li>
        <li>Actividades recreativas y juegos en equipo.</li>
        <li>Clases de astronomía durante las noches despejadas.</li>
        <li>Convivencia en un entorno natural protegido.</li>
      </ul>

      <h4>Información del Clima</h4>
      {/* Activa el widget cuando lo necesites */}
      {/* <WeatherWidget /> */}
      <p>
        Conoce el clima actualizado para planificar mejor tu experiencia en la naturaleza. Nuestro widget de clima te proporciona información en tiempo real.
      </p>

      <h4>Recomendaciones</h4>
      <ul>
        <li>Ropa cómoda y abrigada para las noches.</li>
        <li>Calzado resistente para caminatas.</li>
        <li>Linterna y baterías adicionales.</li>
        <li>Protector solar y repelente de insectos.</li>
      </ul>

      <p>
        ¡Te esperamos para vivir una aventura inolvidable en los <strong>Campamentos Tuki</strong>!
      </p>
    </div>
  );
};

export default Campamentos;
