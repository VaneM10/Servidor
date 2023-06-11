const { Router }= require('express');

const {agregarUsuario,mostrarUsuarios, editarUsuarios, eliminarUsuarios} = require('../controllers/user.controller');

const routerUsuario = Router();

routerUsuario.get('/', mostrarUsuarios)
routerUsuario.post('/', agregarUsuario)
routerUsuario.put('/', editarUsuarios)
routerUsuario.delete('/', eliminarUsuarios)





module.exports = routerUsuario;