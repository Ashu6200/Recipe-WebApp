const userRouter = require('express').Router();
const User = require('../model/userModel');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWTSEC = "#2@!@$ndja45883r7##";


userRouter.post('/register',
    body('username').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json("some error occured")
        }
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(200).json("Please login with correct password")
        };
        const salt = await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(req.body.password, salt)

        user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: secpass,
        })
        const accessToken = jwt.sign({
            id: user._id,
            username: user.username
        }, JWTSEC);
        await user.save();
        res.status(200).json({ user: user, accessToken: accessToken });


    })

userRouter.post("/login",
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    async (req, res) => {

        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(400).json("User doesn't found")
            }
            const Comparepassword = await bcrypt.compare(req.body.password, user.password);
            if (!Comparepassword) {
                return res.status(400).json("Password does not match")
            }
            const accessToken = jwt.sign({
                id: user._id,
                username: user.username
            }, JWTSEC);
            const { password, ...other } = user._doc
            res.status(200).json({ user: other, accessToken });

        } catch (error) {
            res.status(500).json("Internal error occured")
        }

    })

module.exports = userRouter