import React from 'react';
import './HomePage.css';
import manos from '../img/manos.png'
import arbol from '../img/arbol.png'


const Nosotros = () => {
  return (
    <div className='containerHome'>
     
    <header className='headerUs' >
    <div>
    <h1 className='title'>Sobre Nosotros</h1>
      <p className='headerUsText'>En VMA, nos dedicamos a ser más que simplemente líderes en asesoramiento migratorio en los Estados Unidos; somos un equipo comprometido con el éxito y el bienestar de nuestros clientes. Nuestra historia se ha forjado a través de la experiencia, la dedicación y la pasión por ayudar a individuos y familias a alcanzar sus metas migratorias en un nuevo país.</p>
    </div>  
      <div className='arbol'>
          <img  src={arbol} alt="Árbol" />   
        </div>
      
      </header>

      <section className='whyChooseUs'>
        <h2>Nuestra Filosofía</h2>
        <p>
        En el corazón de VMA se encuentra una filosofía que valora la individualidad de cada caso. Reconocemos que cada historia de inmigración es única, con desafíos y sueños particulares. Es por eso que nos comprometemos a brindar asesoramiento personalizado, adaptando nuestros servicios para satisfacer las necesidades específicas de cada cliente.
        </p>
      </section>

      <section className='experiencia'>
      <div className='manos'>
          <img  src={manos} alt="Manos" />   
        </div>
        <div className='experienciaText'>
          <h2>Experiencia y Compromiso</h2>
          <p>Contamos con un equipo de profesionales altamente capacitados y comprometidos con la excelencia en el asesoramiento migratorio. Nuestra experiencia en una variedad de áreas, desde solicitudes de asilo hasta peticiones familiares y apertura de compañías, nos permite ofrecer orientación confiable y resultados exitosos.</p>
      </div>  
        
      </section>

      <section className='immigrantGuide'>
        <h2>Más Allá de la Migración</h2>
        <p>En VMA, no solo nos enfocamos en los procesos migratorios; también nos esforzamos por ser un recurso integral para aquellos que recién llegan a los Estados Unidos. Nuestra guía para el inmigrante ofrece herramientas esenciales y consejos prácticos para ayudar a nuestros clientes a dar los primeros pasos en su nueva vida.</p>
      </section>

      

     
    </div>
  );
};

export default Nosotros;
