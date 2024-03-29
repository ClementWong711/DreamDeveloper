import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn: '30m'})
}

// get all chatmessage
const userLogin = async (req, res) => {

    const {unique_name, password} = req.body

    try {
        const user = await User.login(unique_name, password)
        const nick_name = user.nick_name
        const email = user.email

        // create token
        const token = createToken(user._id)

        res.status(200).json({nick_name, unique_name, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
// get all message by chatroomID
const userSignup = async (req, res) => {
    const {email, nick_name, unique_name, password} = req.body

    try {
        const user = await User.signup(email, nick_name, unique_name, password)

        // create token
        const token = createToken(user._id)

        res.status(200).json({email, nick_name, unique_name, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

const userData = async (req, res) => {
    const { username } = req.params

    const user = await User.find({unique_name: username})

    if(!user){
        return res.status(400).json({error: 'No Such user'})
    }
    res.status(200).json(user)
}

const userUpdate = async (req, res) => {
    const { username } = req.params

    const userProfile = await User.findOneAndUpdate({unique_name: username},{
        ...req.body
    })
    if(!userProfile){
        return res.status(400).json({error: 'No Such user'})
    }
    res.status(200).json(userProfile)
}


export {
    userLogin,
    userSignup,
    userData,
    userUpdate
}