import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

// Create &bConfigure .env as per below fileds, since these are mandatory fields
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
};
class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.database = firebase.database()
        this.auth = firebase.auth().signInAnonymously().catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            if (errorCode === 'auth/operation-not-allowed') {
                alert('You must enable Anonymous auth in the Firebase Console.');
            } else {
                console.error(error);
            }
        });

    }

    //Create/Update data in firebase
    async write(id, data) {
        try {
            if (!id) {
                id = this.database.ref().push().key
            }
            data['id'] = id
            await this.database.ref('/users/' + id).set(data)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    //Get all users data from firebase
    async getAll() {
        try {
            return (await this.database.ref('/users').once('value')).val()
        } catch (err) {
            console.log(err)
            return false
        }
    }

    //Delete record from firebase based on the gievn ID
    async remove(id) {
        try {
            this.database.ref('/users/' + id).remove()
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
}
export default new Firebase();