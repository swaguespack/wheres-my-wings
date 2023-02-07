// imports express' router object
const router = require('express').Router();

// if login button is clicked in homepage navbar, redirect to login handlebars page
router.get('/login', (req, res) => {
    // if on route and user is logged in, redirect to home page
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;