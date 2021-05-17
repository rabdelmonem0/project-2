const router = require('express').Router();
const userRoutes = require('./userRoutes')
const main = require('./mainRoutes')
const log = require('./loginRoutes')


// router.use('/signup', log);

router.use('/users', userRoutes); 

// router.use('/users', main); 
router.use('/', main); 

router.use('/login', log);


module.exports = router;