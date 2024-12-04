import Messanger from "../models/Messanger.js" ;
const getMessages = async(req, res)=>{
    try{
        const msgs = await Messanger.find({}) ;
        return res.status(200).send(msgs) ;
    }
    catch(err){
        return res.status(400).send(err) ;
    }
}
export default getMessages ;