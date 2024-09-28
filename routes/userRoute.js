import express from 'express' ;
import {regUser, loginUser} from '../controllers/userController.js';
//route objects 
const userRouter = express.Router() ;
userRouter.post("/register" , regUser ) ;

userRouter.post('/login' , loginUser) ;
export default userRouter ;