const express = require('express');
const router = express.Router();
const homeController = require('../controller/home.controller')

const accessMiddleware = require('../middlewares/access.middleware')

router.get('/', accessMiddleware.authUser, homeController.getAllMusics)

module.exports = router;
