const RealEstate = require('../models/realEstateModel')
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');


// get all realestates
const getAllRealEstate = async (req,res) => {
    const realEstate = await RealEstate.find({}).sort({createdAt: -1})
    res.status(200).json(realEstate)
}


// get a single workout 

const getAsingleRealEstate = async (req,res) => {

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Realestate'})
     }

    const realEstate = await RealEstate.findById(id)

    if (!realEstate) {
        return res.status(400).json({"error" : "no such real estate"})
    }
    res.status(200).json(realEstate)
}

//   post a new real estate

const postAnewRealEstate = async (req,res) => {
    // const {title,price,location,units,overview,type} = req.body 
    // const {img} = req.file.path

    let Info = {
        title : req.body.title,
        price : req.body.price,
        location : req.body.location,
        units : req.body.units,
        overview : req.body.overview,
        type : req.body.type,
        img : req.file.path
    }

    // let emptyFields = [];

    // if (!title) {
    //     emptyFields.push('title')
    // }
    // if (!price) {
    //     emptyFields.push('price')
    // }
    // if (!location) {
    //     emptyFields.push('location')
    // }
    // if (!units) {
    //     emptyFields.push('units')
    // } 
    // if (!overview) {
    //     emptyFields.push('overview')
    // }
    // if (!type) {
    //     emptyFields.push('type')
    // }
    // if (!img) {
    //     emptyFields.push('img')
    // }

     // add a realestate to a db

     try {
        const postArealEstate = await RealEstate.create(Info)
        res.status(400).json(postArealEstate)
     } catch (error) {
        res.status(400).json({error:error.message})
     }
}

// delete a workout 

const deleteArealEstate = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Workout'})
     }

    const deleteRealEstate = await RealEstate.findByIdAndDelete({_id:id})

    if (!deleteRealEstate) {
        return res.status(400).json({"error" : "no such real estate"})
    }
    res.status(200).json(deleteRealEstate)
}

// UPDATE a workout

const updateArealEstate = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Workout'})
     }

    const update = await RealEstate.findByIdAndUpdate({_id:id} , {
        ...req.body
    })

    if (!update) {
        return  res.status(400).json({error: "no such workout"})
    }
    res.status(200).json(update)




}


// uploading image controller


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
    

    
}).single('img')

// const storage = multer.diskStorage({
//     destination : (req,file,cb) => {
//         cb(null , "images")
//     },
//     filename: (req,file,cb) => {
//         cb(null , file.originalname)
//     }
// })

// const upload = multer({
//     storage:storage,
//     limits: {fileSize:'10000000'},
//     fileFilter: (req,file,cb) => {
        
//         const fileTypes = /jpeg|jpg|png|gif/
//         const mimeType = fileTypes.test(file.mimetype)  
//         const extname = fileTypes.test(path.extname(file.originalname))

//         if(mimeType && extname) {
//             return cb(null, true)
//         }
//         cb('Give proper files formate to upload')
        
//         const fileTypes = /jpeg|jpg|png|gif/ 
       
//         if(mimeType && extname) {
//             return cb(null, true)
//         }

//         cb('Give proper files formate to upload')
//     }

    

//   }).single('img')
        


module.exports = {
    getAllRealEstate,
    getAsingleRealEstate,
    postAnewRealEstate,
    deleteArealEstate,
    updateArealEstate,
    upload   
}