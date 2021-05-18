const UserRA = require('../models/UserRA');

// routes that render pages
const router = require('express').Router();
// const { User, Post } = require('../models');

// res.render(page)

// 
router.get("/", (req, res) => {
    try {
        res.render("login");
    } catch (err) {
        res.status(404).json(err);
    }
});

router.get("/signup", (req, res) => {
    try {
      res.render("signup");
    } catch (err) {
      console.log(err);
      res.status(404).json(err);
    }
  });

// called by the login or submit button click
router.get("/profileRA", async (req, res) => {
    try {
        // find the user from the database const userData = User.find({ where:   })
        res.render("profileRA");
    } catch (err) {
        res.status(404).json(err);
    }
})

router.get("/login", async (req, res) => {
    try {
        res.render("login");
    } catch (err) {
        res.status(404).json(err);
    }
})

router.get("/profile-setup", async (req, res) => {
    try {
        res.render("profile-setup");
    } catch (err) {
        res.status(404).json(err);
    }
})

router.get("/homepage", async (req, res) => {
    try {
        res.render("homepage");
    } catch (err) {
        res.status(404).json(err);
    }
})
module.exports = router;