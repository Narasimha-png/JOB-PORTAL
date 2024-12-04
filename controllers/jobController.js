import Job from '../models/jobDataSchema.js' ;
import { decodeToken } from '../config/jwt.js';
export const createPost = async(req , res)=>{
    const {url , date , title , skills , description } = req.body ;
    try{
        const createdBy = decodeToken(req.cookies.uid ) ;
        const ref = await Job.create({url , date , title , skills , description, createdBy }) ;
        res.status(201).send({
            status:'Job Created Succesfully',
            ref 
        }) ;
    }
    catch(err){
        res.status(500).send('Internal Server Error') ;
    }
}
export const getJobs = async(req , res)=>{
    try{
        const payload = decodeToken(req.cookies.uid) ;
        const userposts = await Job.find({createdBy:payload}) ;
        res.status(200).send({
            userposts
        }) ;
    }
    catch(err){
        res.status(403).send('payload too large') ;
    }
}