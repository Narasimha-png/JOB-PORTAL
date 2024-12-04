import Messanger from "../models/Messanger.js" ;
const storeMessage = async(req , res)=>{
    const {message} = req.body ;
    try{
        const sendMsg = await Messanger.create({message}) ;
        res.status(201).send(
            "Message Sent Succesfully \n ThankYou" 
        ) ;
    }
    catch(err){
        res.status(500).send('Internal Server Error.') ;
    }
}

export default storeMessage ;