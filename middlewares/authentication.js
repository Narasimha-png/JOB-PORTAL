import { decodeToken } from "../config/jwt.js"
import User from "../models/userDataSchema.js"
export const auth = async(req , res , next )=>{
    try{
        if( !req.cookies.uid )
            return res.status(401).send("UnAuthorized User")  ;
        const payload = decodeToken(req.cookies.uid );
        if(await User.findOne({_id:payload._id})) {
            next() ;
        }   
        else    
        return res.status(401).send("UnAuthorized Cookie") ;
    }
    catch(err){
        return res.status(401).send("UnAuthorized User "+ err ) ;
    }
    
}