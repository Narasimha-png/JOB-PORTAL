// public/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize Firebase in the service worker
const firebaseConfig = {
    apiKey: "AIzaSyB-eO1E_oIVSVSuoHJGpiBkOlxdVccfVfU",
    authDomain: "portfolio-aee99.firebaseapp.com",
    projectId: "portfolio-aee99",
    storageBucket: "portfolio-aee99.appspot.com",
    messagingSenderId: "175332785816",
    appId: "1:175332785816:web:3fb968159905e0be5a5aed",
    measurementId: "G-DE73LEWJ5C"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
      // Change this to your icon path
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// Activate event listener
self.addEventListener('activate', (event) => {
    console.log('Service Worker activating...');
    event.waitUntil(self.clients.claim());
});

// Optional: Handle notification click events
self.addEventListener('notificationclick', (event) => {
    console.log('Notification clicked: ', event.notification.title);
    event.notification.close(); // Close the notification

    event.waitUntil(
        clients.openWindow('https://google.com') // Change this to your website URL
    );
});
