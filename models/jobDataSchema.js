import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    url:{
        type:String,
        required:[true] 
    },
    date:{
        type:Date,
        required:[true] 
    },
    title:{
        type:String , 
        required:[true] 
    },
    skills:{
        type:[String]
    },
    description:{
        type:String
    },
    createdBy:{
        type: mongoose.Types.ObjectId ,
        ref:'User' 
    }
} , {timestamps:true})  ;
export default mongoose.model('Job' , jobSchema ) ;