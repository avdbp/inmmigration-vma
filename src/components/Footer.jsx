import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import ig from '../img/ig.png'
import phone from '../img/phone.png'
import email from '../img/email.png'
import ws from '../img/ws.png'


const Footer = () => {
  return (
    <div className='containerFooter'>
    <div className='containerFooterImg'>
     
        <NavLink className="contactoFooter" to="tel:9546322636" target="_blank">
          <img src={phone} alt="Phone" />
        </NavLink>

        <NavLink className="contactoFooter" to="https://wa.me/19548530131" target="_blank">
          <img src={ws} alt="WhatsApp" />
        </NavLink>

        <NavLink className="contactoFooter" to="/contacto" target="_blank">
          <img src={email} alt="Email" />
        </NavLink>

        <NavLink className="contactoFooter" to="https://ig.me/m/immigration.vma" target="_blank">
          <img src={ig} alt="Instagram" />
        </NavLink>
        
    </div>
   
    <p>Copyright © 2023 Immigration VMA</p>
    </div>
    
  );
};

export default Footer;
