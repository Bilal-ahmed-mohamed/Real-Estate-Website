const express = require('express');
const {
    getAllRealEstate,
    getAsingleRealEstate,
    postAnewRealEstate,
    deleteArealEstate,
    updateArealEstate,
    upload
}  = require('../controllers/realEstateControler')



const router = express.Router();


// get all houses

router.get('/' , getAllRealEstate)


//  get a single real estate

router.get('/:id' , getAsingleRealEstate)

// post a new real estate
router.post('/' , upload, postAnewRealEstate)

// delete a real estate

router.delete('/:id' , deleteArealEstate)

// update a real estate

router.patch('/:id' , updateArealEstate)


module.exports = router;