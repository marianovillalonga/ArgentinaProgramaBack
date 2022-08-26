const Pagina = require("../models/Pagina");


exports.crearPagina = async (req, res) => {

    try {
        let pagina;

        pagina = new Pagina(req.body);

        await pagina.save();
        res.send(pagina);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPaginas = async (req, res) => {

    try {

        const paginas = await Pagina.find();
        res.json(paginas)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarPagina = async (req, res) => {

    try {
        const { nombre, web, repositorio } = req.body;
        let pagina = await Pagina.findById(req.params.id);

        if(!pagina) {
            res.status(404).json({ msg: 'No existe la pagina' })
        }

        pagina.nombre = nombre;
        pagina.web = web;
        pagina.repositorio = repositorio;

        pagina = await Pagina.findOneAndUpdate({ _id: req.params.id },pagina, { new: true} )
        res.json(pagina);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerPagina = async (req, res) => {

    try {
        let pagina = await Pagina.findById(req.params.id);

        if(!pagina) {
            res.status(404).json({ msg: 'No existe la pagina' })
        }
       
        res.json(pagina);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarPagina = async (req, res) => {

    try {
        let pagina = await Pagina.findById(req.params.id);

        if(!pagina) {
            res.status(404).json({ msg: 'No existe la pagina' })
        }
       
        await Pagina.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Pagina eliminada con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}