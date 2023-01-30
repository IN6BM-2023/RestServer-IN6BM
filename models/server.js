//Importaciones de nodejs
const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        //Configuración inicial
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();


        //Rutas de mi app
        this.routes();


    }

    //Un middleware es una función que se ejecuta antes de las rutas
    middlewares(){

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del Body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use(  express.static('public') );

    }


    routes(){
       this.app.use( this.usuariosPath, require('../routes/usuario') );
    }


    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port);
        } )
    }


}


//Importamos la clase Server
module.exports = Server;