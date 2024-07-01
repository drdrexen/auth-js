const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const createError = require('../utils/appError');
const jwt = require('jsonwebtoken')

//register error
exports.signup = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            return next(new createError('User already exists', 400))
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12)
        const newUser = await User.create({
            ...req.body,
            password: hashedPassword
        });

        //token
        const token = jwt.sign({ _id: newUser._id }, 'secretkey123', {
            expiresIn: '90s',
        });

        res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            token,
        })
    } catch (error) {
        next(error)
    }

};