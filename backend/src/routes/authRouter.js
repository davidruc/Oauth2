import { Router } from "express";
import passportHelper from "../helpers/passportHelper.js";

const router = Router();

router.get('/', (req, res) => {
    res.sendFile('login.html', { root: './src/public' })
})
router.get('/logout', (req, res) => {
    req.logout({}, err => console.log(err));
    res.redirect('/login');
})

router.get('/discord', passportHelper.authenticate('discord', { scope: ['identify', 'email', 'connections'] }))
router.get('/discord/callback', passportHelper.authenticate('discord', { failureRedirect: '/login', successRedirect: '/dashboard'}))



export default router;