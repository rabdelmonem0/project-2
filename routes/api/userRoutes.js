const router = require('express').Router();
const Userjj = require('../../models/userJJ');
const Links = require('../../models/Linksjj');
const Posts = require('../../models/postsjj');

router.get('/:id', async (req, res) => {
    try{
        const userData = await Userjj.findByPk(req.params.id);
        const users = userData.get({plain: true});
        
        const userLinks = await Links.findAll({where: {userid: req.params.id}});
        const links = await userLinks.map((link) => link.get({plain:true}))

        const userPosts = await Posts.findAll({where: {userid: req.params.id}});
        const posts = await userPosts.map((post) => post.get({plain:true}))

        res.render('profile', {users, links, posts})
    } catch (err) {
        res.status(500).json(err)
        return;
    }
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