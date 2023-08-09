import express from 'express';
import {
    userLogin,
    userSignup,
    userData,
} from '../controllers/userController.js'

const router = express.Router();

// Login route
router.post('/login', userLogin)

// Signup route
router.post('/signup', userSignup)

router.get('/user/:username', userData)


export default router;