const {Router} = require('express');
const HomeController = require('../controllers/HomeController');

const homeRouter = Router()

homeRouter.get('/', HomeController.index)

module.exports = homeRouter;
