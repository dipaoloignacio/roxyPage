import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Banner } from './componentes/banner/Banner';
import { Nav } from './componentes/nav/Nav';
import { Footer } from './componentes/footer/Footer';
import { Inicio } from './componentes/paginas/inicio/Inicio';
import { Talleres } from './componentes/paginas/talleres/Talleres';
import { Desenredando } from './componentes/paginas/talleres/desenredando/Desenredando';
import { Inmercion } from './componentes/paginas/talleres/inmersion/Inmercion';
import { LibroEscena } from './componentes/paginas/talleres/libroAescena/LibroEscena';
import { Intervenciones } from './componentes/paginas/intervenciones/Intervenciones';
import { Espectaculos } from './componentes/paginas/espectaculos/Espectaculos';
import { Marionetas } from './componentes/paginas/espectaculos/marionetas/Marionetas';
import { Enderas } from './componentes/paginas/espectaculos/marionetas/enderas-masugui/Enderas';
import { Borondongo } from './componentes/paginas/espectaculos/marionetas/borondongo/Borondongo';
import { Mimama } from './componentes/paginas/espectaculos/marionetas/mimamemima/Mimama';
import { LambeLambe } from './componentes/paginas/espectaculos/lambe-lambe/Lambe-lambe';
import { Compania } from './componentes/paginas/compania/Compania';
import { Contacto } from './componentes/paginas/contacto/Contacto';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Nav />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/talleres' element={<Talleres />} />
        <Route path='/taller-desenredando-los-hilos' element={<Desenredando />} />
        <Route path='/taller-inmercion-mundo-marionetas' element={<Inmercion />} />
        <Route path='/taller-delLibro-aLaEscena' element={<LibroEscena />} />
        <Route path='/intervenciones' element={<Intervenciones />} />
        <Route path='/espectaculos' element={<Espectaculos />} />
        <Route path='/espectaculos-marionetas' element={<Marionetas />} />
        <Route path='/enderas-masugui' element={<Enderas />} />
        <Route path='/mimamamemima' element={<Mimama />} />
        <Route path='/borondongo' element={<Borondongo />} />
        <Route path='/espectaculos-lambe-lambe' element={<LambeLambe />} />
        <Route path='/compania' element={<Compania />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
