import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactoPage.css';
import ws from '../img/ws.png'
import email from '../img/email.png'
import ig from '../img/ig.png'
import emailw from '../img/emailw.png'
import { Helmet } from 'react-helmet';


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
    <Helmet title='VMA-Contacto'></Helmet>
      <div className='containerContacto'>
        <div className='text-container'>
          <h1>Contacto</h1>
          <p className='pContacto'>Escríbenos a nuestro <img className='iconos' src={email} alt="Correo" /> <strong>correo</strong> mediante nuestro formulario y te responderemos a la brevedad posible.<br/><p></p> Si lo prefieres, contáctanos por nuestro número de WhatsApp:
          </p><p className='pContactoWS'><strong><img className='iconos' src={ws} alt="WhatsApp" />  <a href="https://wa.me/19548530131" target="_blank" rel="noreferrer">+1 (954)8530131</a> </strong> <br/></p> <p className='pContactoRRSS'>También puedes seguirnos en nuestras Redes Sociales por nuestro usuario <br/></p><p><img className='iconos' src={ig} alt="Instagram" /> <strong><a href="https://ig.me/m/immigration.vma" target="_blank" rel="noreferrer">@immigration.vma</a></strong></p>

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
