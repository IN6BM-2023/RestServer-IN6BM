const { response, request } = require('express');

const getUsuarios = (req = request, res = response) => {
    res.json({
        msg: 'get Api - Controlador Usuario'
    });
}

const postUsuario = (req = request, res = response) => {

    // se guarda como objeto
    // const usuario = req.body;

    //Desestructuración
    const { nombre  } = req.body;
    res.json({
        msg: 'POST',
        nombre
    });
}


const putUsuario = (req = request, res = response) => {

    //Req.params sirve para traer parametros de las rutas
    const { id } = req.params;

    res.json({
        msg: 'PUT editar user',
        id
    });
}

const deleteUsuario = (req = request, res = response) => {
    //Req.params sirve para traer parametros de las rutas
    const { id } = req.params;

    res.json({
        msg: 'DELETE eliminar user',
        id
    });
}

module.exports = {
    getUsuarios,
    postUsuario,
    putUsuario,
    deleteUsuario
}


// CONTROLADOR