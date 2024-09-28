import mongoose from "mongoose";

const connectDB = ()=>{
    try{
        console.log("INSIDE") ;
        const conn = mongoose.connect(process.env.MONGODB_URL).then(()=>{
            console.log("Connected") ;
        }) ;
        
    }
    catch(err){
        console.log(`Error in Connecting to DataBase ${err} `) ;

    }
}

export default connectDB ;