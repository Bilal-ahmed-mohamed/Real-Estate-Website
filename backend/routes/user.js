const express = require('express')
const User = require('../models/userModel')
const {loginUser , signupUser} = require('../controllers/userControler')


const router = express.Router()

// lgoin route
router.post('/Login' , loginUser)

// signupuser route
router.post('/Signup' , signupUser)


module.exports = router