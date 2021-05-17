const router = require('express').Router();
// const Userjj = require('../../models/userJJ')
const UserRA = require('../../models/UserRA')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const Userjj = require('../../models/userJJ');
const Links = require('../../models/Linksjj');
const Posts = require('../../models/postsjj');

router.get('/:id', async (req, res) => {
    try{
        // const userjj = await Userjj.findAll().catch((err) => res.json(err));
        // const userRR = await UserRA.findAll().catch((err) => res.json(err));
        // const users = userjj.map((user) => user.get({plain: true}));
        // const users = userRR.map((user) => user.get({plain: true}));
        // console.log('userRoutes line 12', users);
        // res.send(users)
        // res.render('profile')
        const userData = await Userjj.findByPk(req.params.id);
        const users = userData.get({plain: true});
        
        const userLinks = await Links.findAll({where: {userid: req.params.id}});
        const links = await userLinks.map((link) => link.get({plain:true}))

        const userPosts = await Posts.findAll({where: {userid: req.params.id}});
        const posts = await userPosts.map((post) => post.get({plain:true}))

        console.log(links)
        console.log(users)
        console.log(posts)
        // console.log("working")
        // console.log(userjj)
        // console.log(users.bio)
        // res.send(userjj)
        // res.send(users)
        res.render('profile', {users, links, posts})
    } catch (err) {
        res.status(500).json(err)
        return;
    }
});

router.post('/profile', upload.single('avatar'), async (req, res) => {

})

router.get('/:id/friends', async (req, res) => {
    try {

        res.render('profilefriends')
        // console.log("render working")
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id/edit', async (req, res) => { // get this to return data
    try {
        const userData = await Userjj.findByPk(req.params.id);
        const users = userData.get({plain: true});
        
        const userLinks = await Links.findAll({where: {userid: req.params.id}});
        const links = await userLinks.map((link) => link.get({plain:true}))

        const userPosts = await Posts.findAll({where: {userid: req.params.id}});
        const posts = await userPosts.map((post) => post.get({plain:true}))

        res.render('profileEdit', {users, links, posts})
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;