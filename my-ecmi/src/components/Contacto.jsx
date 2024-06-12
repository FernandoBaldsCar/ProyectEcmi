import React from 'react'
import Footer from './Footer';
const Contacto = () => {
  return (
    <div>
      <h1>Siéntete en confianza de poder contactar y así poder relizar cotizaciones sobre cualquier tipo de trabajo. </h1>
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h1 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <h2>Contacto telefónico</h2> 
      </button>
    </h1>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Tel fijo: 7121840585\n Número celular:712184085 \n WhatsApp:721840585 <code>.accordion-flush</code> .</div>
    </div>
  </div>
  <div class="accordion-item">
    <h1 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <h2>Contacto por correo electrónico</h2>
      </button>
    </h1>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled </div>
    </div>
  </div>
  <div class="accordion-item">
    <h1 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <h2>Contacto por nuestras redes sociales</h2>
      </button>
    </h1>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <Footer/> |</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Contacto