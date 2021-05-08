const router = require('express').Router();
const Userjj = require('../../models/userJJ')

router.get('/', async (req, res) => {
    try{
        const userjj = await Userjj.findAll().catch((err) => res.json(err));
        const users = userjj.map((user) => user.get({plain: true}));

        res.send(users)
        // res.render('profile')
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;