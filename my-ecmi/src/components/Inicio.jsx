import React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import Footer from './Footer';


const Inicio = () => {
  return (
    <div>
        <h1><p className='Titulo'>Bienvenido a ECMI</p></h1>
       
        <img src="/images/logo_ecmi.jpeg" className=" w-60 rounded float-end" alt="..." />
        

        
<h2>< p className='crossfade-text'>Somos una empresa 100% mexicana comprometida con satisfacer las necesiades de todos nuestros clientes
dando soluciones rápidas, eficaces y económicas para evitar que su empresa detenga labores devido a su maquinaria.</p></h2>
    <br/>
<h1><p className='text-center'>Nuestro trabajo</p></h1>

<div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/Ec-1.jpeg" className="d-block mx-auto w-60 h-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/images/Ec-3.jpeg" className="d-block mx-auto w-60 h-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/images/Ec-4.jpeg" className="d-block mx-auto w-60 h-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/images/Ec-5.jpeg" className="d-block mx-auto w-60 h-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/images/Ec-7.jpeg" className="d-block mx-auto w-60 h-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/images/Ec-13.jpeg" className="d-block mx-auto w-60 h-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/images/Ec-16.jpeg" className="d-block mx-auto w-60 h-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/images/Ec-19.jpeg" className="d-block mx-auto w-60 h-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/images/Ec-15.jpeg" className="d-block mx-auto w-60 h-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/images/Ec-14.jpeg" className="d-block mx-auto w-60 h-auto" alt="..." />
        </div>
      
        <div className="carousel-item">
          <img src="/images/Ec-15.jpeg" className="d-block mx-auto w-60 h-auto" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      
    </div>
    
   <div>
    <Footer />
   </div>
  </div>




  )
}

export default Inicio
