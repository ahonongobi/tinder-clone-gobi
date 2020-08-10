import firebase from 'firebase'





const firebaseConfig = {
    apiKey: "AIzaSyA8N3eLH6ifyBplMN5bVKiuC8Hvrpm14go",
    authDomain: "tinder-clone-gobi.firebaseapp.com",
    databaseURL: "https://tinder-clone-gobi.firebaseio.com",
    projectId: "tinder-clone-gobi",
    storageBucket: "tinder-clone-gobi.appspot.com",
    messagingSenderId: "1014227620303",
    appId: "1:1014227620303:web:a65029c70f639e762d02ba",
    measurementId: "G-RP7B2FGWJ9"
  };

  const firebaseApp  = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore()
  export default database;