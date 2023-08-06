import express from 'express';
import {
    userLogin,
    userSignup,
} from '../controllers/userController.js'

const router = express.Router();

// Login route
router.post('/login', userLogin)

// Signup route
router.post('/signup', userSignup)


export default router;