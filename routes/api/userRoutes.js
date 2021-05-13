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

        // console.log(links)
        // console.log(users)
        // console.log(posts)
        // console.log("working")
        // console.log(userjj)
        // console.log(users.bio)
        // res.send(userjj)
        // res.send(users)
        res.render('profile', {users, links, posts})
        // res.status(200);
    } catch (err) {
        res.status(500).json(err)
        return;
    }
})

module.exports = router;