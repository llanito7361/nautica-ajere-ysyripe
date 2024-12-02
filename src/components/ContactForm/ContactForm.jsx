import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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
    e.preventDefault()

    emailjs.send(
        'service_2si0gcs','template_eq5j7ae',
        formData,
        'GZS5hf2JVksM2yNYe'
    )
    .then(() => {
        alert('Correo enviado exitosamente');
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al enviar el correo.');
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Tu Nombre"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Tu Correo Electrónico"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tu Mensaje"
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
