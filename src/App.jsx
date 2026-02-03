// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Servicios } from './pages/Servicios';
import {Actividades} from './pages/Actividades';
import {SobreNosotros} from './pages/sobreNosotros';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/sobreNosotros" element={<SobreNosotros />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;