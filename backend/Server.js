require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const multer = require("multer")
const cors = require("cors")

const RealEstateRoutes = require('./routes/realEstate')
const UserRoutes = require('./routes/user')

// express app
const app = express();

const PORT = process.env.PORT ||  4000;

/* it checks if the request that comes in and checks if it has any body / data that is being send to the server , it attaches it the request object */
app.use(express.json())

app.use(cors())

// middleware

/* it checks if the request that comes in and checks if it has any body / data that is being send to the server , it attaches it the request object */

app.use(express.json());
app.use((req,res,next) => {
    console.log(req.path , req.method);
    
    next();
})


// routes
app.use( '/api/realEstate' ,RealEstateRoutes);
app.use( '/api/user' , UserRoutes );



// static images folder
app.use('/images', express.static('./images'))

// connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // lisenning for requests 
    app.listen( process.env.PORT , () => {
        console.log(`its running on port number ${PORT}`);
    })

})
.catch((error) => {
    console.log(error);
})
