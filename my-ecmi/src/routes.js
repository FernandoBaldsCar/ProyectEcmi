
module.exports = function(app, databaseService) {

    app.get('/lenguajes', (req, res) => {
        databaseService.getLenguages()
            .then(lenguajes => res.json(lenguajes))
            .catch(e => res.status(500).send(e));
    });

    app.post('/Vehiculos', (req, res) => {
        const newAutomovil = req.body;
        console.log(newAutomovil);
        databaseService
            .crearLenguaje(
                newAutomovil.NumeroSerie, 
                newAutomovil.TipoVehiculo, 
                newAutomovil.Estatus,
                newAutomovil.Color,
                newAutomovil.Ubicacion,
                newAutomovil.KilometrajeIngresado,
                newAutomovil.FechaIngreso,
                newAutomovil.FechaEntrega,
                newAutomovil.Contacto,
                newAutomovil.NombreOperador,
                )
            .then(() => {
                res.json({message: "created!"});
            }).catch(e => {
                res.status(500).send(e);
            });
    });
};