import jwt from 'jsonwebtoken' ;
export const genToken = async( id ) =>{
    const secretKey = process.env.JWT_SECURITY_KEY ;
    const days = 30 ;
    const token = await jwt.sign({_id:id } ,
        secretKey , { expiresIn :`${days}d`} 
    )
    return token ;
} 
export const decodeToken = (token)=>{
    const secretKey = process.env.JWT_SECURITY_KEY ;
    try{
        const payload = jwt.verify(token , secretKey) ;
        return payload ;
    }
    catch(err){
        return "" ;
    }
}