const router = require("express").Router();
const User = require("../../models/UserRA");

router.get("/", (req, res) => {
  try {
    res.render("login"); //, {
    //     loggedIn: req.session.loggedIn
    // })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async(req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const userLogin = await User.findOne({ where: { email } }).then((user) => {
    console.log(user);
    res.status(200).json({});
  });

  if (!userLogin) {
    // return some error message
  }

  const matchedPassword = await userLogin.checkPassword()
});

// localhost:3001/login/signup


module.exports = router;
