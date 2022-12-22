const mongoose = require('mongoose');

const Schema = mongoose.Schema


const realEstateSchema = new Schema({
    
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    purpose:{
        type:String,
        required:true
    },
    bedrooms:{
        type:String,
        required:true
    },
    features:{
        type:String,
        required:true
    },
    amenities:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    units:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },

} , {timestamps : true});

module.exports = mongoose.model('RealEstate' , realEstateSchema)