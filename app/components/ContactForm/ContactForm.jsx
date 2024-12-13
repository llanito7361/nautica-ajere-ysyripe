'use client'
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_2si0gcs", "template_eq5j7ae", formData, "GZS5hf2JVksM2yNYe")
      .then(() => {
        alert("Correo enviado exitosamente");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un problema al enviar el correo.");
      });
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Tu Nombre"
        className={styles.contactInput}
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Tu Correo Electrónico"
        className={styles.contactInput}
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tu Mensaje"
        className={styles.contactTextarea}
        required
      />
      <button className={styles.contactButton} type="submit">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
