const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    nick_name: {
        type: String,
    },
    unique_name:{
        type: String,
        required: true,
        unique: true
    },
    friend_list: {
        type: Array
    },
    password: {
        type: String,
        required: true
    }
})

// statis signup method
userSchema.statics.signup = async function (email, nick_name, unique_name, password) {

    // validation
    if(!email || !password){
        throw Error('All field must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }

    const emailExists = await this.findOne({ email })
    if(emailExists){
        throw Error('Email already in use')
    }

    const uniqueNameExists = await this.findOne({ unique_name })
    if(uniqueNameExists){
        throw Error('Unique Name already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, nick_name, unique_name, password: hash})

    return user
}

// statis login method
userSchema.statics.login = async function (unique_name, password) {

    // validation
    if(!unique_name || !password){
        throw Error('All field must be filled')
    }

    const user = await this.findOne({ unique_name })

    if(!user){
        throw Error('Incorrect Unique name')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect Password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)