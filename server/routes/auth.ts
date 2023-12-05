import { Router } from "express";
import passport from "passport";
import dotenv from 'dotenv'

dotenv.config();
const authRoutes = Router();

<<<<<<< HEAD
<<<<<<< Updated upstream
const router = Router();
=======
const successLoginUrl = process.env.HOST + '/home';
const failedLoginUrl = process.env.HOST + '/';
>>>>>>> Stashed changes
=======
const successLoginUrl = process.env.HOST + '/home';
const failedLoginUrl = process.env.HOST + '/welcome';
>>>>>>> 2760ea537c57a63e17115e4735a2a5d5d3248cfe

//Route to google oauth
authRoutes.get('/google', passport.authenticate('google',
{
  scope: ['email', 'profile']
}));

//Route for google redirect
authRoutes.get('/google/redirect', passport.authenticate('google',
{
  failureMessage: true,
  failureRedirect: failedLoginUrl,
  successRedirect: successLoginUrl
}),
(req, res) => {
  if (req.user) {
    res.render(successLoginUrl);
  } else {
    res.redirect(failedLoginUrl);
  }
});

<<<<<<< HEAD
<<<<<<< Updated upstream
export default router;
=======
=======
//Route to logout of session
authRoutes.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.send('loggedOut')

  });
});

>>>>>>> 2760ea537c57a63e17115e4735a2a5d5d3248cfe
//Route used to request user data for the front-end
authRoutes.get('/getuser', (req, res) => {
  res.send(req.user);
} )

<<<<<<< HEAD

export default authRoutes;
>>>>>>> Stashed changes
=======
export default authRoutes;
>>>>>>> 2760ea537c57a63e17115e4735a2a5d5d3248cfe
