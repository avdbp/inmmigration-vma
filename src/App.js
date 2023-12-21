import './App.css';
import React, {Suspense, lazy} from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import Nosotros from './pages/Nosotros';
// import Servicios from './pages/Servicios';
// import ContactoPage from './pages/ContactoPage';
// import ConsejosPage from './pages/ConsejosPage';
const Home = lazy(() => import('./pages/HomePage'))
const Nosotros = lazy(() => import('./pages/Nosotros'))
const Servicios = lazy(() => import('./pages/Servicios'))
const ContactoPage = lazy(() => import('./pages/ContactoPage'))
const ConsejosPage = lazy(() => import('./pages/ConsejosPage'))

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <NavBar />
        
        <Routes>
          
          <Route element={
            <Suspense fallback={<h3>Loading...</h3>}>
              <Home />y
            </Suspense>
          }
          path="/" 
          />

<Route element={
            <Suspense fallback={<h3>Loading...</h3>}>
              <Nosotros />y
            </Suspense>
          }
          path="/nosotros" 
          />

<Route element={
            <Suspense fallback={<h3>Loading...</h3>}>
              <Servicios />y
            </Suspense>
          }
          path="/servicios" 
          />

<Route element={
            <Suspense fallback={<h3>Loading...</h3>}>
              <ContactoPage />y
            </Suspense>
          }
          path="/contacto" 
          />

<Route element={
            <Suspense fallback={<h3>Loading...</h3>}>
              <ConsejosPage />y
            </Suspense>
          }
          path="/consejos" 
          />
          
        </Routes>
      </div>

      {/* Incluye el componente Footer al final del renderizado */}
      <Footer />
    </div>
  );
}

export default App;
