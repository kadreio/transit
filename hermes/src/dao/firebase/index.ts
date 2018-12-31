const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyCBa39JM_ztUGFgDVnmMUMOeQ2NAQNKJfw",
  authDomain: "transit-awareness.firebaseapp.com",
  databaseURL: "https://transit-awareness.firebaseio.com",
  projectId: "transit-awareness",
  storageBucket: "transit-awareness.appspot.com",
  messagingSenderId: "258010539631",
  keyFilename: 'transit-awareness.json'
};

firebase.initializeApp(config);


// mta.status('subway').then((result: any) => {
//   const promises = result.map((status: any) => {
//     var docRef = db.collection('subway/info/status').doc(status.name);
//     return docRef.set({
//       name: status.name,
//       text: status.text,
//       date: status.Date,
//       time: status.Time,
//       status: status.status
//     });
//   })

//   Promise.all(promises).then(() => {
//     process.exit();
//   });

// });

// mta.stop().then(function (result) {
//     var docRef = db.collection('subway').doc('stops');
//     return docRef.set(result);
// });
