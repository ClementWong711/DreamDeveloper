const express = require('express');
const {
    userLogin,
    userSignup,
} = require("../controllers/userController")

const router = express.Router();

// Login route
router.post('/login', userLogin)

// Signup route
router.post('/signup', userSignup)


module.exports = router