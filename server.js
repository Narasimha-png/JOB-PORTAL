//import libraries
import express from 'express' ;
import dotenv from 'dotenv' ;
import cookieParser from 'cookie-parser' ;
import cors from 'cors' ;

//file imports
import connectDB from './config/db.js';
import { auth } from './middlewares/authentication.js';
import { notify, notifyall } from './controllers/notifyController.js';

//routers
import userRouter from './routes/userRoute.js' ;
import jobRouter from './routes/jobRouter.js';
//to load environmental variables
dotenv.config() ;

//rest object
const app = express() ;
//middlewares
app.use(express.json()) ;
app.use(cookieParser()) ;
app.use(cors()) ;

connectDB() ;
app.use('/api/v1' , userRouter ) ;

app.use('/api/post', auth ,jobRouter ) ;

app.post('/sendnotification' , (req , res)=>{
    console.log("NORIFY CALLED ") ;
    console.log(req.body.token) ;
    notify(req.body.token , res ) ;
} ) ;
app.post('/sendtoall' , (req , res)=>{
    notifyall(req , res) ;
})



const PORT = process.env.PORT || 8400 ;
app.listen( PORT , (err)=>{
    if( !err )
        console.log("Ruinning on http://localhost:" + PORT ) ;
    else
    console.log(err) ;
});