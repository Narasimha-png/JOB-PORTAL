import express from "express" ;
import storeMessage from "../controllers/storeMessage.js";
import getMessages from "../controllers/getMessages.js";
const postRouter = express.Router() ;

postRouter.post('/post' , storeMessage ) ;
postRouter.get('/get' , getMessages )

export default postRouter ;