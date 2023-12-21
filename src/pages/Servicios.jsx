import React from 'react';
import './HomePage.css';
import libertad from '../img/libertadRed.png'
import { Helmet } from 'react-helmet';


const Servicios = () => {
  return (
    <div className='containerHome'>
    <Helmet title='VMA-Servicios'></Helmet>
     
    <header className='headerUs' >
    <div>
    <h1 className='titleServicios'>Servicios</h1>
      <p className='headerUsText'>En <strong>VMA</strong> nos enorgullece ofrecer asesoramiento personalizado en diversas áreas migratorias para facilitar tu camino hacia el logro de tus objetivos legales en este país. A continuación, encontrarás una lista detallada de los servicios que proporcionamos, diseñados para abordar tus necesidades específicas y guiarte a través de los procesos migratorios con éxito. Explora nuestras áreas de experticia y descubre cómo podemos ayudarte a construir un futuro sólido y legal en los Estados Unidos.</p>
    </div>  
      <div className='libertad'>
          <img  src={libertad} alt="Estatua de la Libertad" />   
        </div>
      
      </header>

      <ol className='listaServiciosol'>
    <li><strong>Asilo:</strong> Brindamos asesoramiento especializado para aquellos que buscan asilo en los Estados Unidos,
      ayudándoles a comprender y navegar por los complejos procesos legales relacionados con la protección humanitaria.</li>

    <li><strong>Residencia:</strong> Ofrecemos orientación y asistencia en la obtención de la residencia permanente,
      guiando a nuestros clientes a través de los requisitos y procedimientos necesarios para establecerse de manera
      legal en el país.</li>

    <li><strong>Permiso de Trabajo:</strong> Proporcionamos asesoramiento en la obtención de permisos de trabajo,
      permitiendo a nuestros clientes trabajar legalmente en los Estados Unidos durante períodos específicos.</li>

    <li><strong>TPS (Estatus de Protección Temporal):</strong> Ayudamos a aquellos que califican para el TPS,
      brindándoles orientación sobre cómo solicitar y mantener este estatus que proporciona protección temporal a
      individuos de países designados.</li>

    <li><strong>Ciudadanía:</strong> Guiamos a aquellos que desean convertirse en ciudadanos estadounidenses a través de los
      procesos de naturalización, proporcionando información detallada y apoyo a lo largo de cada etapa.</li>

    <li><strong>Apertura de Compañías:</strong> Asesoramos en la creación legal de empresas, brindando orientación sobre los
      requisitos y procedimientos necesarios para establecer y operar negocios en los Estados Unidos.</li>

    <li><strong>Parole (Permiso Humanitario):</strong> Proporcionamos asistencia en la obtención de permisos humanitarios
      (Parole), que permiten la entrada temporal a personas que de otra manera podrían no ser elegibles para un visado.</li>

    <li><strong>Peticiones Familiares:</strong> Ofrecemos asesoramiento en el proceso de peticiones familiares,
      facilitando la reunificación de familias al ayudar en la presentación de solicitudes y documentos requeridos.</li>

    <li><strong>Servicios Notariales:</strong> Además de asesoramiento migratorio, proporcionamos servicios notariales para
      la autenticación de documentos legales y otros trámites.</li>

    <li><strong>Registro de Marcas:</strong> Ayudamos a proteger la propiedad intelectual de nuestros clientes mediante el
      registro de marcas, garantizando que sus marcas comerciales estén legalmente reconocidas y protegidas.</li>
  </ol>
    </div>
  );
};

export default Servicios;
