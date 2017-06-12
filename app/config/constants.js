import firebase from 'firebase'


// Initialize Firebase
const config = {
apiKey: "AIzaSyCRxyTPeCgI_Z6E9t0yW-4j9KLN-o1AWcw",
authDomain: "duxr-720b1.firebaseapp.com",
databaseURL: "https://duxr-720b1.firebaseio.com",
projectId: "duxr-720b1",
storageBucket: "duxr-720b1.appspot.com",
messagingSenderId: "261074992729"
}

firebase.initializeApp(config);

export const ref= firebase.database().ref();
export const firebaseAuth = firebase.auth
