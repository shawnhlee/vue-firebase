import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

var firebaseConfig = {
	apiKey: "AIzaSyCRyvHJVc5Cdnt_v2XIoS8zTqOdTtTsSKc",
	authDomain: "shawn-mydb.firebaseapp.com",
	databaseURL: "https://shawn-mydb.firebaseio.com",
	projectId: "shawn-mydb",
	storageBucket: "shawn-mydb.appspot.com",
	messagingSenderId: "65495464572",
	appId: "1:65495464572:web:94f01dd17ad3bba8"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export firestore database
export default firebaseApp.firestore();
