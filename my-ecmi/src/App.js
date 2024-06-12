import './App.css';


import MyComponent from './components/MyComponent';
import Inisecion from './components/Inisecion';
import Contacto from './components/Contacto';
import EmAso from './components/EmAso';
import Inicio from './components/Inicio';






import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="container mt-5">
  
  <Router>

<div className="container mt-5">
  
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><Link to="/">Inicio</Link></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/EmAso">Unidades de negocio</Link></a>
        </li>
<ul>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/Inisecion">Inicio de Seción</Link></a>
        </li>
        </ul>
<ul>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to="/Contacto">Contacto</Link></a>
        </li>
        </ul>
        

      </ul>
      
    </div>
  </div>
</nav>


<div className="background-image"></div>





    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Clientes" element={<MyComponent />} />
      <Route path="/EmAso" element={<EmAso />} />
      <Route path="/Inisecion" element={<Inisecion/>}/>
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  </div>
</Router>









      </div>
  );
}

export default App;
