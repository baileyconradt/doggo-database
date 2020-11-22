const {firestore, auth} = require('../firebaseStuff')
import firebase from 'firebase'

const dogsRef = firestore.collection('dogs');
const dogStorage = firebase.storage().ref()

export function addDoggo(name, photo, dob, breed, callback) {
    var newImageRef = dogsRef.child('images/' + name)
    dogStorage.put(photo)
    .then( function(snapshot) {
        console.log('uploaded a file!')
    })
}