import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<InConstructionPage />} /> */}
          <Route path="/nosotros" element={<Nosotros />} />

          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </div>

      {/* Incluye el componente Footer al final del renderizado */}
      <Footer />
    </div>
  );
}

export default App;
