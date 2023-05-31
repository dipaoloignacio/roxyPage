import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Banner } from './componentes/banner/Banner';
import { Nav } from './componentes/nav/Nav';
import { Inicio } from './componentes/paginas/inicio/Inicio';
import { Talleres } from './componentes/paginas/talleres/Talleres';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Nav />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/talleres' element={<Talleres />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
