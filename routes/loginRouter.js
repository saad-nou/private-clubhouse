const {Router} = require('express')

const loginRouter = Router();

loginRouter.get("*a", (req, res)=>{
    res.render("login",{username: req.query?.username});
})

module.exports = loginRouter;