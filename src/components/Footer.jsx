import React from 'react';
import './Footer.css';
import ig from '../img/ig.png'
import phone from '../img/phone.png'
import email from '../img/email.png'
import ws from '../img/ws.png'


const Footer = () => {
  return (
    <div className='containerFooter'>
    <div className='containerFooterImg'>
     
        <div className='contactoFooter'>
          <img  src={phone} alt="Contacto" />   
        </div>

        <div className='contactoFooter'>
          <img  src={ws} alt="Contacto" />   
        </div>

        <div className='contactoFooter'>
          <img  src={email} alt="Contacto" />   
        </div>

        <div className='contactoFooter'>
          <img  src={ig} alt="Contacto" />   
        </div>
        
    </div>
   
    <p>Copyright © 2023 Immigration VMA</p>
    </div>
    
  );
};

export default Footer;
