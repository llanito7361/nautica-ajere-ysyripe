import ContactForm from "../../components/ContactForm/ContactForm";
import VisualContactanos from "../../components/VisualContactanos/VisualContactanos";

import styles from "./Contactanos.module.css";

const Contactanos = () => {
  return (
    <>
          <h3 className={styles.contactanosh3} >Coordinamos?</h3>
          <div className={styles.contactanos}>
      <div className={styles.contactLeftContainer}>
          <ContactForm />

      </div>
      <div className={styles.contactRightContainer}>
        <VisualContactanos />
      </div>
    </div>
    </>
    
  );
};

export default Contactanos;
