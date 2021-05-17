const router = require('express').Router()
const User = require("../../models/userJJ")

router.get('/', (req, res) => {
    try{
        res.render('login')//, {
        //     loggedIn: req.session.loggedIn
        // })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.post("/", (req, res) => {
    const { email , password } = req.body
    console.log(req.body)
    User.findOne({ where : { email }}).then( user => {
        console.log(user)
        res.status(200).json({})
    })
})


module.exports = router