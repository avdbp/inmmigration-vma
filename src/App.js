import React, {Suspense, lazy} from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import Nosotros from './pages/Nosotros';
// import Servicios from './pages/Servicios';
// import ContactoPage from './pages/ContactoPage';
// import ConsejosPage from './pages/ConsejosPage';
const HomePage = lazy(() => import('./pages/HomePage'))
const Nosotros = lazy(() => import('./pages/Nosotros'))
const Servicios = lazy(() => import('./pages/Servicios'))
const ConsejosPage = lazy(() => import('./pages/ConsejosPage.jsx'))
const ContactoPage = lazy(() => import('./pages/ContactoPage.jsx'))


function App() {
  return (
    <BrowserRouter>
        <NavBar />
        
          <Routes>
            
            <Route path="/" element={
              <Suspense fallback = {<h3>Loading...</h3>}> 
                <HomePage /> 
              </Suspense>}
            />

            <Route path="/nosotros" element={
              <Suspense fallback = {<h3>Loading...</h3>}> 
                <Nosotros /> 
              </Suspense>}
            />

            <Route path="/servicios" element={
              <Suspense fallback = {<h3>Loading...</h3>}> 
                <Servicios /> 
              </Suspense>}
            />

            <Route path="/consejos" element={
              <Suspense fallback = {<h3>Loading...</h3>}> 
                <ConsejosPage /> 
              </Suspense>}
            />

            <Route path="/contacto" element={
              <Suspense fallback = {<h3>Loading...</h3>}> 
                <ContactoPage /> 
              </Suspense>}
            />
  {/* <Route path="/" element={<InConstructionPage />} /> */}
  {/* <Route path="/nosotros" element={<Nosotros />} />
  <Route path="/servicios" element={<Servicios />} />
  <Route path="/consejos" element={<ConsejosPage />} />
  <Route path="/contacto" element={<ContactoPage />} /> */}
          
          </Routes>
          

        <Footer />
      </BrowserRouter>
  );
}

export default App;
