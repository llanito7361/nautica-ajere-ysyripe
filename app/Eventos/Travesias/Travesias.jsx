import { tour } from "../../assets/index";
const Travesias  = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', lineHeight: '1.6' }}>
      <h1>Travesías Náuticas - Granja Don Julián</h1>
      <img src={tour} alt="" />
      <p>
        Bienvenidos a nuestras travesías náuticas en la Granja Don Julián. 
        Nuestro objetivo es ofrecer una experiencia única y enriquecedora en contacto con la naturaleza y el río.
      </p>
      <h2>¿Qué Ofrecemos?</h2>
      <ul>
        <li>Paseos en bote por el río.</li>
        <li>Exploración de flora y fauna local.</li>
        <li>Paradas en puntos estratégicos para disfrutar del paisaje.</li>
        <li>Actividades de pesca recreativa.</li>
      </ul>
      <h2>Detalles de las Travesías</h2>
      <p>
        Las travesías suelen durar entre 1 a 4 horas, dependiendo de la ruta y las condiciones climáticas. 
        Contamos con equipos de seguridad modernos y un guía experimentado que hará de tu aventura algo inolvidable.
      </p>
      <h2>Ubicación</h2>
      <p>
        Estamos ubicados en la Granja Don Julián, un lugar pintoresco y tranquilo, ideal para desconectarse del ajetreo de la ciudad.
      </p>
      <h3>¡Te Esperamos!</h3>
      <p>Ven y vive la experiencia de nuestras travesías náuticas. ¡La naturaleza te espera!</p>
    </div>
  );
}
export default Travesias