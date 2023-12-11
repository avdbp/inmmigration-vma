import React from 'react';
import './HomePage.css';
import libertad from '../img/libertadBlue.png'


const ConsejosPage = () => {
  return (
    <div className='containerHome'>
     
    <header className='headerUs'  >
    <div>
    <h1 className='titleServicios'>Consejos</h1>
      <p className='headerUsText'>Te damos la bienvenida a tu nueva vida en los Estados Unidos. Para hacer tu transición más suave, aquí hay algunos consejos prácticos para los nuevos inmigrantes. Desde la documentación esencial hasta la construcción de tu historial crediticio, estos consejos te ayudarán a dar los primeros pasos hacia un futuro exitoso en tu nuevo hogar.</p>
    </div>  
      <div className='libertad'>
          <img  src={libertad} alt="Estatua de la Libertad" />   
        </div>
      
      </header>

      <div className='listaServiciosolTips' >

      <h2>Documentación:</h2>
    <ol>
        <li><strong>Pasaporte y Visa:</strong> Asegúrate de tener tu pasaporte y visa en orden y válidos.</li>
        <li><strong>Documentos de Inmigración:</strong> Mantén copias de todos tus documentos de inmigración y renuévalos a tiempo.</li>
    </ol>

    <h2>Vivienda:</h2>
    <ol>
        <li><strong>Alojamiento Temporal:</strong> Considera opciones temporales como hoteles o alquileres a corto plazo.</li>
        <li><strong>Registro de Dirección:</strong> Actualiza tu dirección en la oficina postal y en documentos oficiales.</li>
    </ol>

    <h2>Vehículo:</h2>
    <ol>
        <li><strong>Licencia de Conducir:</strong> Investiga los requisitos para obtener una licencia de conducir y comienza el proceso.</li>
        <li><strong>Transporte Público:</strong> Investiga las opciones de transporte público en tu área.</li>
    </ol>

    <h2>Finanzas:</h2>
    <ol>
        <li><strong>Cuenta Bancaria:</strong> Abre una cuenta bancaria local y conoce los requisitos para extranjeros.</li>
        <li><strong>Establecer Crédito:</strong> Comienza a construir tu historial crediticio con una tarjeta de crédito asegurada.</li>
        <li><strong>Presupuesto:</strong> Elabora un presupuesto para controlar tus ingresos y gastos.</li>
    </ol>

    <h2>Consejos Prácticos:</h2>
    <ol>
        <li><strong>Seguro de Salud:</strong> Asegúrate de tener un seguro de salud a través de empleadores o programas estatales.</li>
        <li><strong>Red de Apoyo:</strong> Conecta con la comunidad local y busca grupos de apoyo para inmigrantes.</li>
        <li><strong>Culturalmente Informado:</strong> Entiende la cultura local y las normas sociales.</li>
        <li><strong>Idioma:</strong> Mejora tus habilidades en inglés si es necesario.</li>
    </ol>

    <p>Recuerda que cada experiencia es única, y estos consejos pueden adaptarse según tu situación personal y el lugar específico donde te encuentres. ¡Buena suerte en tu nueva vida en los Estados Unidos!</p>
    </div>
    </div>
  );
};

export default ConsejosPage;
