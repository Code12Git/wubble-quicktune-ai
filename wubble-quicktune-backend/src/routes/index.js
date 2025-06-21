const express = require('express');

const musicRoutes = require('./musicRoutes');

const router = express.Router();
router.use('/music',musicRoutes)

module.exports = router;