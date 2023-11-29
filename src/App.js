import './App.css';
import{ Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import InConstructionPage from './pages/InConstructionPage';

function App() {
  return (
    <div className="App">
    <div className='navbar'>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/" element={<InConstructionPage />} />

        </Routes>
    </div>
      


    </div>
  );
}

export default App;
