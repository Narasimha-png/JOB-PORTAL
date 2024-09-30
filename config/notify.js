import admin from './firebase-admin.js';

const sendPushNotification = async (registrationToken, title, body, url) => {
    const message = {
        notification: {
            title: title,
            body: body,
        },
        data: {
            icon: '../assets/skill6.png',
            click_action: url, // Ensure it's in the data
        },
        token: registrationToken,
    };

    try {
        const response = await admin.messaging().send(message);
        console.log('Successfully sent message:', response);
    } catch (error) {
        console.error('Error sending message:', error);
    }
};

export default sendPushNotification;

