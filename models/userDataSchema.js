//to encrypt password using bcryptjs which uses saltsync
import bcrypt from 'bcryptjs' ;
import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
const userSchema = new Schema({
    name:{
        type:String ,
        required:[true , 'Name is Required to register'] 
    },
    email:{
        type:String,
        required:[true , 'Email is Required'] ,
        
    },
    password:{
        type:String,
        required:[true , 'Enter Password'] ,
        minlength:[8,'Atleast 8 digits required'] 
    },
    location:{
        type:String,
        default:'India'
    }},
    {timestamps :true }
);

userSchema.pre('save' , async function(){
    const salt = await bcrypt.genSaltSync(10) ;
    this.password = await bcrypt.hash(this.password , salt ) ;
});
userSchema.methods.comparePassword = async function(userPassword) {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
};


export default mongoose.model('User' , userSchema)  ;
