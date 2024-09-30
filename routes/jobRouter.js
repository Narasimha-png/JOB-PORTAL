import express from 'express' ;
import {createPost, getJobs} from '../controllers/jobController.js' ;
const jobRouter = express() ;

jobRouter.post('/createpost' , createPost)

jobRouter.post('/getalljobs' ,getJobs )
export default jobRouter ;