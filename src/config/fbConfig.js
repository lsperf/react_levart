import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);
//Firestore (7.12.0) The timestampsInSnapshots is true by default, so sommenting
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;