const express = require('express');
const { musicController } = require('../controllers');
const router = express.Router();



router.post('/',musicController.get)

module.exports = router