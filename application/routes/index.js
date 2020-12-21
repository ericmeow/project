var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  next(new Error('test'));
  res.render('index',{title:"Home page"});
});

router.get('/display', (req, res, next) => {
  res.render("display",{title:"Display"});
});

router.get('/imagepost', (req, res, next) => {
  res.render("imagepost",{title:"Image Post"});
});

router.get('/login', (req, res, next) => {
  res.render("login",{title:"Login"});
});

router.get('/postimage', (req, res, next) => {
  res.render("postimage",{title:"Create Post"});
});
router.get('/registration', (req, res, next) => {
  res.render("registration",{title:"Registration"});
});



module.exports = router;
