// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize Firebase
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
// Listen for background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
      body: payload.notification.body,
      data: { 
          url: payload.notification.click_action // Set the URL you want to open on click
      }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close(); // Close the notification

  // Redirect to the URL specified in the notification data
  event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
          for (const client of clientList) {
              if (client.url === event.notification.data.url && 'focus' in client) {
                  return client.focus();
              }
          }
          if (clients.openWindow) {
              return clients.openWindow(event.notification.data.url);
          }
      })
  );
});

