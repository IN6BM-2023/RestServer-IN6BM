const { Router } = require('express');
const { check } = require('express-validator');

// Middlewares
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

//Controllers
const { postProducto, putProducto, deleteProducto } = require('../controllers/producto');

const router = Router();

//Manejo de rutas

// Obtener todas las productos - publico
// router.get('/',  );

// Obtener un producto por id - publico
// router.get('/:id', [
//     check('id', 'No es un id de Mongo Válido').isMongoId(),
//     check('id').custom(  ),
//     validarCampos
// ],  );

// Crear producto - privada - cualquier persona con un token válido
router.post('/agregar', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], postProducto);

// Actuaizar producto - privada - cualquier persona con un token válido
router.put('/editar/:id', [
    //validarJWT,
    //check('id', 'No es un id de Mongo Válido').isMongoId(),
    //check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    //check('id').custom(  ),
    //validarCampos
], putProducto);

//Borrar un producto - privado - Solo el admin puede eliminar una categoria (estado: false)
router.delete('/eliminar/:id', [
    //validarJWT,
    //check('id', 'No es un id de Mongo Válido').isMongoId(),
    //check('id').custom(  ),
    //validarCampos
], deleteProducto);



module.exports = router;