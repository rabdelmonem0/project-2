const router = require('express').Router();

router.get('/', (req, res) => {
    try{
        console.log(req.session)
        res.render('homepage')//, {
        //     loggedIn: req.session.loggedIn
        // })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.post('/signuup', async(req, res) => {
    // first check if the user is in the database already
    // insert new user
})

module.exports = router
