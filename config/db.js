import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        console.log("INSIDE") ;
        const conn = await mongoose.connect(process.env.MONGODB_URL) ;
        console.log("Connected") ;
    }
    catch(err){
        console.log(`Error in Connecting to DataBase ${err} `) ;

    }
}

export default connectDB ;