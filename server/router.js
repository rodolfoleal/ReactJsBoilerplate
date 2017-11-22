const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
const facebookSignin = passport.authenticate('facebook', { scope: ['public_profile', 'email'] });
const facebookCallback = passport.authenticate('facebook', { failureRedirect: '/', session: false });
const googleSignin = passport.authenticate('google', { scope: ['profile', 'email'] });
const googleCallback = passport.authenticate('google', { failureRedirect: '/', session: false });
module.exports = (app) => {

    app.use(passport.initialize())

    app.get('/', requireAuth, (req, res) => {
        res.send({ message: 'Super secret code is 1234' });
    });
    app.post('/signup', Authentication.signup);
    app.post('/signin', requireSignin, Authentication.signin);
    app.get('/auth/facebook', facebookSignin);
    app.get('/auth/facebook/callback', facebookCallback, Authentication.signinWithToken);
    app.get('/auth/google', googleSignin);
    app.get('/auth/google/callback', googleCallback, Authentication.signinWithToken);

}