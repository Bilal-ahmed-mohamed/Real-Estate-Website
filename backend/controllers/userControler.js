const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const validator = require('validator')


// create a token 
const createToken = (_id) => {
    return jwt.sign({_id} , process.env.SECRET , {expiresIn:'3d'})
}
// login user
const loginUser = async (req,res) => {
    
    const {email , password} = req.body
    if (!email || !password) {
        return res.sendStatus(405) 
    }
    // email validation
   if (!validator.isEmail(email)) {
        return res.sendStatus(406) 
    
   }
//    password validation
   if (!validator.isStrongPassword(password)) {
    return res.sendStatus(407) 
    
}

    

    try {
        const user = await User.login(email,password)

           // create a token 
           const token = createToken(user._id)

        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// signup user
const signupUser = async (req,res) => {
   
     const {userName, email, password} = req.body
     // validation
    if (!userName || !email || !password) {
        // throw Error('all fields must be filled')
        return res.sendStatus(401)      
    }
    // email validation
   if (!validator.isEmail(email)) {
    // throw Error('Email Is Not Valid')
    return res.sendStatus(402)   
   }
//    password validation
   if (!validator.isStrongPassword(password)) {
    // throw Error('password must be atleats 8 characters & start with a CAPS and have a special character')
    return res.sendStatus(403)    
}

    try {
        // const user = await User.signup(userName, email, password)
        const Exists = await  User.findOne({email})
            if (Exists) { 
                // throw Error('email already in use')
                return res.sendStatus(404)
                
            }

            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password , salt)

            const user = await User.create({userName, email, password:hash})

            // return user;
        // create token 
        const token = createToken(user._id)

        res.status(200).json({email,token})
    } catch (error) {
        // res.status(400).json({error: error.message})
        res.json({ message: error.message });
    }
}




module.exports= {loginUser ,signupUser}