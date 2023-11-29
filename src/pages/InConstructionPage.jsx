import React from 'react';
import './HomePage.css';
import construction from "../img/construccion3.png"
import logo from "../img/logoVMA.png"


const InConstructionPage = () => {
  return (
    <div className='containerHome'>

    <div className='constructionLogo'>
        <img className='constructionLogo' src={logo} alt="Plantas" />   
    </div>

    
      <h1 className='title'>Somos Especialistas en Asistencia Migratoria</h1>

      <section className='whyChooseUs'>
        <h2>Y pronto tendrás esta web para encontrar soluciones a tu situación migratoria</h2>
      </section>

      <div className='construction'>
        <img className='constructionImg' src={construction} alt="Plantas" />      
        <h2>Sitio Web en Construcción</h2>
        </div>
    </div>
  );
};

export default InConstructionPage;
