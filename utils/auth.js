//redirect user if not logged in
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    } else {
        next()
    }
}

module.exports = withAuth