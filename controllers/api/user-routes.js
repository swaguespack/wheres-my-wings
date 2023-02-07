const router = require('express').Router();
// imports user model to use with our routes
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    try{
    // when user clicks login button, find their corresponding username
  const userData = await User.findOne({ where: { username: req.body.username }});
        
  if (!userData) {
        // if there is no username with that data - 404 bad request
        res.status(400).json({ message: 'No user with that username!' });
    return;
        }

        // if there is username, compare password to stored bcrypted password
    const validPassword = await userData.checkPassword(req.body.password);
        // if password is incorrect - 400
    if (!validPassword) {
                res.status(400).json({ message: 'Incorrect password!' });
                return;
            }
            // If no error, save session
            req.session.save(() => {

                req.session.user_id = userData.id;
                req.session.logged_in = true;

                res.json({ user: userData, message: 'You are now logged in!' });
            });
      
         } catch (err) {
            // 500 - Internal Server Error
            console.log(err);
            res.status(500).json(err);
        }
    });

// when user clicks logout, frontend script triggers to destroy sessions
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            // 204 - No Content success status
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;