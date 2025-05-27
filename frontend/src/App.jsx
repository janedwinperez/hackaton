import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Inicio from './pages/Inicio'
import Rproductores from './pages/Rproductores'


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/principal" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rproductores" element={<Rproductores />} />
        </Routes>
    </Router>
  );
};

export default App;
