const router = require('express').Router();
// imports user model to use with our routes
const { User } = require('../../models');

// for /api/users, find all of this user's data except password
// if found, return it to the screen
// if not found, 500 - internal Server Error
router.get('/', (req, res) => {
    User.findAll({
            attributes: { exclude: ['[password'] }
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// come back to this when decided on what users are tied to (yelp style reviews??)
// when you click on this id, you get user info minus the password
router.get('/:id', (req, res) => {
    User.findOne({
            attributes: { exclude: ['password'] },
            where: {
                id: req.params.id
            }

        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.post('/login', (req, res) => {
    // when user clicks login button, find their corresponding username
    User.findOne({
            where: {
                username: req.body.username
            }
        }).then(dbUserData => {
            if (!dbUserData) {
                // if there is no username with that data - 404 bad request
                res.status(404).json({ message: 'No user with that username!' });
                return;
            }
            // if there is username, compare password to stored bcrypted password
            const validPassword = dbUserData.checkPassword(req.body.password);
            // if password is incorrect - 400
            if (!validPassword) {
                res.status(400).json({ message: 'Incorrect password!' });
                return;
            }
            // If no error, save session
            req.session.save(() => {

                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;

                res.json({ user: dbUserData, message: 'You are now logged in!' });
            });
        })
        .catch(err => {
            // 500 - Internal Server Error
            console.log(err);
            res.status(500).json(err);
        });
});

// when user clicks logout, frontend script triggers to destroy sessions
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            // 204 - No Content success status
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;