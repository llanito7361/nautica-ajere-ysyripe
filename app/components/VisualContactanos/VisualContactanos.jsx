import Image from 'next/image'
import Rabaska2 from '../../../public/assets/rabaska2.png'
import styles from './VisualContactanos.module.css'

const VisualContactanos = () => {
  return (
    <div className={styles.visualContact}>
      <Image src={Rabaska2} alt="img contactanos" className={styles.contacImg} />
      <p className={styles.contactVisualParagraph}>
        ¡Nos encantaría saber de ti! Si estás interesado en organizar actividades, eventos o necesitas más información, no dudes en contactarnos. Puedes enviarnos un correo electrónico o escribirnos a través de nuestras redes sociales. ¡Estaremos encantados de coordinar contigo!
      </p>
    </div>
  )
}

export default VisualContactanos;
