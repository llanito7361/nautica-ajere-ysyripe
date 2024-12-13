import React from 'react'
import {heberwithgroup,
  rabaska1,
  // rabaska2,
  travelgroup1,} from '../../assets/index.js'



const Escuela = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>ESCUELA NÁUTICA DEPORTIVA</h2>
      <img src={heberwithgroup}  alt="asd" />
      <div className="textoLeft">
        <p>
          Nuestra Escuela Náutica Deportiva es un espacio dedicado a promover y enseñar disciplinas náuticas como el remo, el kayak y la navegación. 
          Con un enfoque tanto práctico como teórico, ofrecemos a los participantes la oportunidad de disfrutar del deporte en un ambiente seguro, al mismo tiempo que desarrollan habilidades y conocimientos que pueden llevarlos desde la recreación hasta la competencia.
        </p>
        <strong>Propósitos</strong>
        <ul>
          <li>Fomentar el interés y la motivación por las actividades deportivas, resaltando sus beneficios para la salud y el bienestar.</li>
          <li>Involucrarse en deportes colectivos en un entorno natural, minimizando el impacto ambiental.</li>
          <li>Promover un uso responsable y sostenible del medioambiente para preservar los ecosistemas.</li>
          <li>Formar futuras generaciones de navegantes, remeros y palistas que mantengan viva la tradición náutica.</li>
          <li>Desarrollar habilidades sociales, como el respeto, la cooperación y el trabajo en equipo, en un contexto diferente al académico.</li>
          <li>Fomentar la confianza, la autoestima, la iniciativa y la autonomía personal.</li>
          <li>Proporcionar conocimientos técnicos y de seguridad esenciales para la práctica de deportes náuticos.</li>
          <li>Facilitar experiencias lúdicas que fortalezcan el aprendizaje y la diversión.</li>
          <li>Aprender y aplicar normas de seguridad y un uso adecuado del equipo.</li>
          <li>Identificar y comprender las partes de las embarcaciones (barco, bote, kayak) y sus funciones básicas.</li>
          <li>Familiarizarse con el entorno acuático, experimentando la sensación de deslizarse sobre el agua.</li>
          <li>Fomentar el trabajo en equipo para alcanzar objetivos comunes.</li>
          <li>Disfrutar plenamente de las actividades en el río Paraguay.</li>
        </ul>

        <strong>Contenidos</strong>
        <ul>
          <li>Técnica de paleo y remo en máquina de simulación.</li>
          <li>Maniobras básicas: colocación de los remos, posición de seguridad, toma correcta de la pala, ubicación en el kayak, embarque, desembarque, etc.</li>
          <li>Normas de navegación en el Río Paraguay. Técnica de propulsión en el agua.</li>
          <li>Prácticas en embarcaciones de iniciación individuales y de conjunto.</li>
        </ul>

        <strong>Actividades</strong>
        <ul>
          <li>Inicio en las técnicas de navegar y remar, embarque y desembarque.</li>
          <li>Traslado de los botes y kayaks, conocimiento y dominio de las partes y elementos de las embarcaciones, técnica de flotación y propulsión en el agua.</li>
          <li>Proceso metodológico en la enseñanza de la navegación.</li>
          <li>Juegos y actividades recreativas en el agua.</li>
        </ul>

        <strong>Temporalización</strong>
        <p>
          Las actividades se realizan durante cuatro clases de dos horas cada una, los días sábados de 14:30 a 16:30.
        </p>

        <strong>Personal a cargo</strong>
        <p>Profesor: Heber Aurelio Godoy</p>

        <strong>Recursos materiales</strong>
        <ul>
          <li>Kayaks y piraguas dobles e individuales de escuela y competición.</li>
          <li>Canoas y elementos de seguridad.</li>
        </ul>
      </div>
    </div>
  );
}

export default Escuela