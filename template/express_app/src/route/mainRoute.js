const express = require('express');
const router = express.Router()
const MainController = require('../app/controllers/MainController.js');

router.get('/home', MainController.renderHome)
module.exports = router;
