import "./AsideButtons.css";
import { facebook, instagram, whatsapp } from "../../../public/assets/icons/index";
import Image from "next/image";
const URL_FACEBOOK =
  "https://web.facebook.com/Dr.Notebooks/?locale=es_LA&_rdc=1&_rdr";
const URL_INSTAGRAM = "instagram.com/direct/inbox/";

const AsideButtons = () => {
  return (
    <div className="aside-buttons">
      <div className="button facebook">
        <a rel="noreferrer noopener" target="_blank" href={URL_FACEBOOK}>
          <Image src={facebook} alt="facebok image" />
        </a>
      </div>
      <div className="button instagram">
      <a rel="noreferrer noopener" target="_blank" href={URL_INSTAGRAM}>
        <Image src={instagram} alt="" />
      </a>
      </div>
      <div className="button wsp">
      <a rel="noreferrer noopener" target="_blank" 
              href="https://wa.me/5493704567193?text=¡Hola!%20Quiero%20saber%20más%20sobre%20sus%20travesías%20náuticas." 
       >
      <Image src={whatsapp} alt="whatsapp image" />
      </a>
      </div>
    </div>
  );
};

export default AsideButtons;
