import express from 'express' ;
import regUser from '../controllers/registerUser.js';
//route objects 
const userRouter = express.Router() ;
userRouter.post("/register" , regUser ) ;

export default userRouter ;