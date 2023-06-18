const { Router } = require('express')

const UsersController = require('../controllers/UsersController')

const usersRoutes = Router()

// Instanciando os meus controllers
const usersController = new UsersController()

usersRoutes.post('/', usersController.create)

module.exports = usersRoutes
