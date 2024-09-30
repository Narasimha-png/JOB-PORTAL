import sendPushNotification from "../config/notify.js";
import Notify from '../models/fcmmodel.js' ;

export const notify = async (token, res) => {
    try {
        // Check if the user with the token is already subscribed
        const existingUser = await Notify.findOne({ token });

        if (existingUser) {
            console.log("TOKEN EXISTS: " + token);

            // Send a notification for already subscribed users
            await sendPushNotification(
                token,
                "Already Subscribed",
                "Thank You For Subscribing Again",
                "https://www.google.com/"
            );

            return res.status(208).send('Already Reported');
        }

        // If not subscribed, add the user and send the notification
        await Notify.create({ token });
        await sendPushNotification(
            token,
            "Openings Never Be Missed",
            "Thank You For Subscribing",
            "https://www.google.com/"
        );

        res.status(200).send('Notification sent');
    } catch (err) {
        console.error("Error sending notification: ", err);
        res.status(500).send('Failed to send notification');
    }
};

export const notifyall = async( req, res )=>{
    try{
        const {title , body , url } = req.body ;
        const users = await Notify.find() ;
        for(var i = 0 ;i < users.length ;i++ ){
            console.log(users[i].token.toString()) ;
            await sendPushNotification(users[i].token.toString() , title , body , url ) ;
        }
        res.status(200).send('Notficaions sent Successfully') ;
    }
    catch(err){
        res.status(403).send('Error to send Notification to all') ;
    }
   
}