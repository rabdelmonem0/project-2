const router = require('express').Router();
// const Userjj = require('../../models/userJJ')
const UserRA = require('../../models/UserRA')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get('/', async (req, res) => {
    try{
        // const userjj = await Userjj.findAll().catch((err) => res.json(err));
        const userRR = await UserRA.findAll().catch((err) => res.json(err));
        // const users = userjj.map((user) => user.get({plain: true}));
        const users = userRR.map((user) => user.get({plain: true}));
        console.log('userRoutes line 12', users);
        res.send(users)
        // res.render('profile')
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/profile', upload.single('avatar'), async (req, res) => {

})

module.exports = router;