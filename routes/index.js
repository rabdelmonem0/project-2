const express = require('express');
const router = express.Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// const main = require('./mainRoutes')

// router.use('/api', apiRoutes);

// router.use('/', main)
// router.use('/login', apiRoutes)
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;