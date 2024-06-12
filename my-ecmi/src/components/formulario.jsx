import React, { useState } from 'react';


function ServicioFormulario() {
    const [vehiculoID, setVehiculoID] = useState('');
    const [catalogoServicioID, setCatalogoServicioID] = useState('');
    const [detalleServicio, setDetalleServicio] = useState('');
    const [kilometrajeRegistrado, setKilometrajeRegistrado] = useState('');
    const [fechaServicio, setFechaServicio] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes enviar los datos del formulario al servidor
        // utilizando fetch, axios u otra biblioteca para realizar solicitudes HTTP
        // Por ahora, simplemente mostramos los datos en la consola
        console.log({
            vehiculoID,
            catalogoServicioID,
            detalleServicio,
            kilometrajeRegistrado,
            fechaServicio
        });
        // Limpia los campos del formulario después de enviar los datos
        setVehiculoID('');
        setCatalogoServicioID('');
        setDetalleServicio('');
        setKilometrajeRegistrado('');
        setFechaServicio('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="vehiculoID">Vehiculo ID:</label>
                <input type="text" id="vehiculoID" value={vehiculoID} onChange={(e) => setVehiculoID(e.target.value)} />
            </div>
            <div>
                <label htmlFor="catalogoServicioID">Catalogo de Servicio ID:</label>
                <input type="text" id="catalogoServicioID" value={catalogoServicioID} onChange={(e) => setCatalogoServicioID(e.target.value)} />
            </div>
            <div>
                <label htmlFor="detalleServicio">Detalle de Servicio:</label>
                <textarea id="detalleServicio" value={detalleServicio} onChange={(e) => setDetalleServicio(e.target.value)} />
            </div>
            <div>
                <label htmlFor="kilometrajeRegistrado">Kilometraje Registrado:</label>
                <input type="number" id="kilometrajeRegistrado" value={kilometrajeRegistrado} onChange={(e) => setKilometrajeRegistrado(e.target.value)} />
            </div>
            <div>
                <label htmlFor="fechaServicio">Fecha de Servicio:</label>
                <input type="date" id="fechaServicio" value={fechaServicio} onChange={(e) => setFechaServicio(e.target.value)} />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default ServicioFormulario;
