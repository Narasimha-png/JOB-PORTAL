import { decodeToken } from "../config/jwt.js"
import User from "../models/userDataSchema.js"
export const auth = (req , res , next )=>{
    try{
        if( !req.cookie.uid )
            return res.status(401).send("UnAuthorized")  ;
        console.log(req.cookie.uid ) ;
        const payload = decodeToken(req.cookie.uid );
        if(User.findOne({_id:payload._id})) 
            next() ;
        return res.status(401).send("UnAuthorized") ;
    }
    catch(err){
        return res.status(202).send("Authorized") ;
    }
    
}