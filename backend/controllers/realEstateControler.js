const RealEstate = require('../models/realEstateModel')
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const { type } = require('os');
const { features } = require('process');


// get all realestates
const getAllRealEstate = async (req,res) => {
    const realEstate = await RealEstate.find({}).sort({createdAt: -1})
    res.status(200).json(realEstate)
}


// get a single realestate
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

    let Info = {
        title : req.body.title,
        price : req.body.price,
        location : req.body.location,
        type : req.body.type,
        purpose: req.body.purpose,
        bedrooms : req.body.bedrooms,
        features: req.body.features,
        amenities: req.body.amenities,
        overview : req.body.overview,
        units : req.body.units,       
        img : req.file.path
    }

     // add a realestate to a db
     try {
        const postArealEstate = await RealEstate.create(Info)
        res.status(201).json(postArealEstate)
     } catch (error) {
        res.status(400).json({error:error.message})
     }
}

// delete a relaEstate
const deleteArealEstate = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such real Property'})
     }

    const deleteRealEstate = await RealEstate.findByIdAndDelete({_id:id})

    if (!deleteRealEstate) {
        return res.status(400).json({"error" : "no such real estate"})
    }
    res.status(200).json(deleteRealEstate)
}

// UPDATE a realEsatte
const updateArealEstate = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such property'})
     }

    const update = await RealEstate.findByIdAndUpdate({_id:id} , {
        ...req.body
    })

    if (!update) {
        return  res.status(400).json({error: "no such property"})
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
        const fileTypes = /jpeg|jpg|png|webp|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))
        console.log(req.file);

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }

    
    

    
}).single('img')

// const upload = multer({
    
//     storage: storage,
//     limits: { fileSize: '1000000' },
//     fileFilter: (req, file, cb) => {
//         const fileTypes = /jpeg|jpg|png|gif/
//         const mimeType = fileTypes.test(file.mimetype)  
//         const extname = fileTypes.test(path.extname(file.originalname))
        

//         if(mimeType && extname) {
//             return cb(null, true)
//         }
//         cb('Give proper files formate to upload')
//     }
    

    
// }).single('img')


        


module.exports = {
    getAllRealEstate,
    getAsingleRealEstate,
    postAnewRealEstate,
    deleteArealEstate,
    updateArealEstate,
    upload   
}