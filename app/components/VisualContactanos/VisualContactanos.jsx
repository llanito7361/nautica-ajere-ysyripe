import Image from 'next/image'
import Rabaska2 from '../../assets/rabaska2.png'
import styles from './VisualContactanos.module.css'


const VisualContactanos = () => {

    return(
      <div className={styles.visualContact}>
       <Image src={Rabaska2} alt="img contactanos"  className={styles.contacImg}/>
       <p className={styles.contactVisualParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repudiandae autem inventore aliquam eveniet modi nostrum cumque reiciendis? Placeat doloremque beatae reiciendis nisi ut corporis magni amet aliquid quaerat fugiat?</p>
       </div>
    )
  }


  export default VisualContactanos