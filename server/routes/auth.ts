import { Router } from "express";
import passport from "passport";
import dotenv from 'dotenv';
import session from "express-session";
dotenv.config();

<<<<<<< Updated upstream
const router = Router();
=======
const successLoginUrl = process.env.HOST + '/home';
const failedLoginUrl = process.env.HOST + '/';
>>>>>>> Stashed changes

const successLoginUrl = process.env.HOST;
const failedLoginUrl = process.env.HOST + '/signup';

//routes to google oauth
router.get('/google', passport.authenticate('google', 
{ 
  scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google', 
{
  failureMessage: true,
  failureRedirect: failedLoginUrl,
  successRedirect: successLoginUrl
}),
(req, res) => {
  if (req.user) {

    res.redirect(successLoginUrl);

  }
});

<<<<<<< Updated upstream
export default router;
=======
//Route used to request user data for the front-end
authRoutes.get('/getuser', (req, res) => {
  res.send(req.user);
} )


export default authRoutes;
>>>>>>> Stashed changes
