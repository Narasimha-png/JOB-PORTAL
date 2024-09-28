import User from '../models/userDataSchema.js' ;
import { genToken, decodeToken } from '../config/jwt.js';

 export const regUser = async(req , res )=>{
    const {name,email, password, location} = req.body ;
    if( !name )
        return res.status(400).send('Provide Name') ;
    if( !email )
        return res.status(400).send('Provide email') ;
    if( !password )
        return res.status(400).send('Provide password') ;
    if( !location )
        return res.status(400).send('Provide Location') ;
    if( await User.findOne({email:email})) 
       return res.status(208).send('User already exists') ;
    try{
        const user = await User.create({name , email , password, location}) ;
        const token = await genToken(user._id) ;
        res.cookie("uid" , token ) ;
        res.status(201).json({
            user,
            token
        }) ;
    }
    catch(err){
        res.status(406).send("Something Went Wrong" + err ) ;
    }
}

export const loginUser = async(req , res)=>{
    console.log("USER LOGIN") ;
    const {email, password} = req.body ;
    if( !email )
        res.status(400).send('Provide email') ;
    if( !password )
        res.status(400).send('Provide password') ;
    const user = await User.findOne({email:email}) ;
    if( !user )
       return res.status(404).send('user Not Registered') ;
    const isMatch = await user.comparePassword(password) ;
    if( !isMatch )
       return res.status(400).send('Invalid UserName/Password') ;
    const token = await genToken(user._id) ;
    res.cookie("uid" , token ) ;
    res.status(202).send({user , token}) ;
}
