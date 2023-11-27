import React from 'react';
import './HomePage.css';
import edificio from '../img/EdifPublic.jpg'

const HomePage = () => {
  return (
    <div className='containerHome'>
      <h1 className='title'>Somos Especialistas en Asistencia Migratoria</h1>

      <section className='whyChooseUs'>
        <h2>¿Por qué elegirnos?</h2>
        <p>
          En <strong>VMA</strong>, nos enorgullece ser líderes en asesoramiento migratorio en los Estados Unidos. Nuestra experiencia y dedicación nos convierten en la opción ideal para guiarlo a través de los complejos procesos migratorios. En <strong>VMA</strong>, entendemos que cada caso es único, y trabajamos de cerca con nuestros clientes para lograr resultados exitosos.
        </p>
      </section>

      <section className='ourServices'>
      <div className='ourServicesText'>
        <h2>Nuestros Servicios</h2>
        <p>Ofrecemos asesoramiento personalizado en una variedad de áreas migratorias, incluyendo:</p>

        <ul>
          <li>Asilo</li>
          <li>Residencia</li>
          <li>Permiso de Trabajo</li>
          <li>TPS (Estatus de Protección Temporal)</li>
          <li>Ciudadanía</li>
          <li>Apertura de Compañías</li>
          <li>Parole (Permiso Humanitario)</li>
          <li>Peticiones Familiares</li>
        </ul>

        <p>Además, ofrecemos servicios notariales y registro de marcas.</p>
        </div>
        <div className='ourServiceImg'></div>
      </section>

      <section className='immigrantGuide'>
        <h2>Guía para el Inmigrante</h2>
        <p>¿Acabas de llegar a los Estados Unidos? Nuestra guía básica para el inmigrante te proporciona herramientas esenciales para orientarte en tu nuevo entorno. Desde información sobre servicios comunitarios hasta consejos prácticos, estamos aquí para ayudarte a dar los primeros pasos en tu nueva vida.</p>
      </section>

      <section className='contactUs'>
        <h2>Contáctanos</h2>
        <p>En [Nombre de tu Consultora], nos apasiona ayudarte a alcanzar tus metas migratorias. Ponte en contacto con nosotros para programar una consulta y comenzar tu viaje hacia un futuro legal en los Estados Unidos.</p>
      </section>

      <section className='testimonials'>
        <h2>Testimonios</h2>
        <blockquote>
          <p>"Gracias a [Nombre de tu Consultora], logré obtener mi residencia permanente. Su equipo profesional y comprometido hizo que todo el proceso fuera mucho más fácil."</p>
          <footer>— Cliente Satisfecho</footer>
        </blockquote>

        <blockquote>
          <p>"La asesoría experta de [Nombre de tu Consultora] fue clave para mi éxito en la obtención de la ciudadanía. Los recomendaría sin dudarlo."</p>
          <footer>— Otra Historia de Éxito</footer>
        </blockquote>
      </section>
    </div>
  );
};

export default HomePage;
