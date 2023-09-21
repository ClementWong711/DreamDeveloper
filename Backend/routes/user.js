import express from 'express';
import {
    userLogin,
    userSignup,
    userData,
    userUpdate,
} from '../controllers/userController.js'

const router = express.Router();

// Login route
router.post('/login', userLogin)

// Signup route
router.post('/signup', userSignup)

router.patch('/:username', userUpdate)

router.get('/:username', userData)


export default router;