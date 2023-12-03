import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactoPage.css';
import ws from '../img/ws.png'
import email from '../img/email.png'
import ig from '../img/ig.png'
import emailw from '../img/emailw.png'


const ContactoPage = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8n3d8hg', 'template_7hw3m6d', form.current, 'ppTI8ZSqq8q1h-z52')
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true);
          setTimeout(() => {
            setIsEmailSent(false);
            form.current.reset();
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contact-container'>
      <div className='containerContacto'>
        <div className='text-container'>
          <h1>Contacto</h1>
          <p>Envíanos un mensaje a <br/>nuestro <img className='iconos' src={email} alt="Correo" /> <strong>correo</strong> y te responderemos a la brevedad posible. También puedes llamarnos o escribirnos a nuestro número de WhatsApp:<br/> <strong><img className='iconos' src={ws} alt="WhatsApp" />  <a href="https://wa.me/19548530131" target="_blank">954 853 0131</a></strong><br/>También puedes seguirnos por nuestras Redes Sociales por nuestro usuario<br/> <img className='iconos' src={ig} alt="Instagram" /> <strong><a href="https://ig.me/m/immigration.vma" target="_blank">@immigration.vma</a></strong></p>

        </div>
        <div className='form-container'>
          <div className='formulario'>
          <p className='correo' ><img className='iconos' src={emailw} alt="Instagram"/> CORREO</p>
            {isEmailSent && <p className='alert alert-success'>Email enviado con éxito!</p>}
            <form ref={form} onSubmit={sendEmail}>
              <div className='form-group'>
                <input type='text' className='form-control' id='user_name' name='user_name' placeholder='Nombre y Apellido' required />
              </div>
              <div className='form-group'>
                <input type='email' className='form-control' id='user_email' name='user_email' placeholder='Email' required />
              </div>
              <div className='form-group'>
                <input type='text' className='form-control' id='user_phone_code' name='user_phone_code' placeholder='Código de tu país (Ej. +1)' required />
              </div>
              <div className='form-group'>
                <input type='text' className='form-control' id='user_phone' name='user_phone' placeholder='Número de teléfono' required />
              </div>
              <div className='form-group'>
                <input type='text' className='form-control' id='user_country' name='user_country' placeholder='País' required />
              </div>
              <div className='form-group'>
                <input type='text' className='form-control' id='user_city' name='user_city' placeholder='Ciudad' required />
              </div>
              <div className='form-group'>
                <textarea className='form-control' id='message' name='message' placeholder='Tu mensaje' rows='4' required></textarea>
              </div>
              <button type='submit' className='btn btn-primary'>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
