const URL_UBICACION_GRANJA = 'https://www.google.com/maps/place/Granja+Don+Julian/@-26.2266694,-58.1955946,16.19z/data=!4m12!1m5!3m4!2zMzTCsDUwJzI5LjciUyA1N8KwNTUnMDkuMCJX!8m2!3d-34.84157!4d-57.91917!3m5!1s0x945ca883a315cd79:0x3cbd3c7a615df482!8m2!3d-26.2305274!4d-58.1933131!16s%2Fg%2F11f03zz0nt?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D'

export const Footer = () => {
  return (
    <footer style={{border: '2px dotted gray'}} className="footer">
        <p>logardo</p>
        <div className="footer-contacts">
            <p>telefono: <span>3704567193</span></p>
            <p>correo: <span>hebergod@gmail.com</span></p>
            <div>
               <a href={URL_UBICACION_GRANJA}
              target="_blank" rel='noopener noreferrer' >📍 ubicacion</a> 
            </div>
        </div>
        <div className="footer-copyrighth">
            <p>Copyright 2022. Todos los derechos reservados. </p>
        </div>
    </footer>
  )
}
