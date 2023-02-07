// imports express' router object
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password'] }
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('homepage', {
        users,
        // Pass the logged in flag to the template
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// if login button is clicked in homepage navbar, redirect to login handlebars page
router.get('/login', (req, res) => {
    // if on route and user is logged in, redirect to home page
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// same as login page, except signup counts as a login
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;