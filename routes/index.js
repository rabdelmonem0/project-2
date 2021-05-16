const express = require('express');
const router = express.Router();
const apiRoutes = require('./api');
// const main = require('./mainRoutes')

// router.use('/api', apiRoutes);

// router.use('/', main)
// router.use('/login', apiRoutes)

router.use('/', apiRoutes)

module.exports = router;