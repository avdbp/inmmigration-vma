import './App.css';
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ReactLoading from 'react-loading';

const Home = lazy(() => import('./pages/HomePage'));
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Servicios = lazy(() => import('./pages/Servicios'));
const ContactoPage = lazy(() => import('./pages/ContactoPage'));
const ConsejosPage = lazy(() => import('./pages/ConsejosPage'));

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <NavBar />
        
        <Routes>
          <Route
            element={
              <Suspense
                fallback={
                  <div className="loading-container">
                    <ReactLoading type="spin" color="#000" height={50} width={50} />
                  </div>
                }
              >
                <Home />
              </Suspense>
            }
            path="/"
          />

          <Route
            element={
              <Suspense
                fallback={
                  <div className="loading-container">
                    <ReactLoading type="spin" color="#000" height={50} width={50} />
                  </div>
                }
              >
                <Nosotros />
              </Suspense>
            }
            path="/nosotros"
          />

          <Route
            element={
              <Suspense
                fallback={
                  <div className="loading-container">
                    <ReactLoading type="spin" color="#000" height={50} width={50} />
                  </div>
                }
              >
                <Servicios />
              </Suspense>
            }
            path="/servicios"
          />

          <Route
            element={
              <Suspense
                fallback={
                  <div className="loading-container">
                    <ReactLoading type="spin" color="#000" height={50} width={50} />
                  </div>
                }
              >
                <ContactoPage />
              </Suspense>
            }
            path="/contacto"
          />

          <Route
            element={
              <Suspense
                fallback={
                  <div className="loading-container">
                    <ReactLoading type="spin" color="#000" height={50} width={50} />
                  </div>
                }
              >
                <ConsejosPage />
              </Suspense>
            }
            path="/consejos"
          />
        </Routes >
      </div>

      <Footer />
    </div>
  );
}

export default App;
