//import libraries
import express from 'express' ;
import dotenv from 'dotenv' ;
import initJWTService from 'jwt-service' ;

//file imports
import connectDB from './config/db.js';
import { auth } from './middlewares/authentication.js';

import userRouter from './routes/userRoute.js' ;

//to load environmental variables
dotenv.config() ;


//rest object
const app = express() ;

//middlewares
app.use(express.json()) ;

connectDB() ;

app.use('/api/v1' , userRouter ) ;

app.get('/test' , auth , (req , res )=>{
    res.send("OKOK") ;
})

const PORT = process.env.PORT || 8400 ;
app.listen( PORT , (err)=>{
    if( !err )
        console.log("Ruinning on http://localhost:" + PORT ) ;
    else
    console.log(err) ;
});