import User from '../models/userDataSchema.js'

 const regUser = (req , res )=>{
    const {name, password} = req.body ;
    try{
        User.save() ;
        res.status(201).send('{Status: User Created" }')
    }
    catch(err){
        res.status(400).send("Something Went Wrong") ;
    }
    

}
export default regUser ;