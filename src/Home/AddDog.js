import { useState } from "react"
import { Modal, Button, Form, Col } from "react-bootstrap"
import firebase from 'firebase'
const {firestore, auth} = require('../firebaseStuff')



const dogsRef = firestore.collection('dogs');
const dogStorage = firebase.storage().ref()

function addDoggo(name, bio, photo, dob, breed, callback) {
    const { uid, photoURL, displayName } = auth.currentUser;
    var newImageRef = dogStorage.child('images/' + name)
    newImageRef.put(photo)
    .then( function(snapshot) {
        console.log('uploaded a file!')
        snapshot.ref.getDownloadURL()
        .then(function(url) {
            dogsRef.add({
                dogName: name,
                bio: bio,
                breed: breed,
                color: 'blue',
                birthday: dob,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoURL: url
            })
            callback()
        })
    })
}

export default function AddDog(props) {
    const [show, setShow] = useState(false)
    return (<>
    <Button className='dogButton my-1' onClick={e => setShow(true)}>Add</Button>
    <Modal show={show} onHide={e => setShow(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Add Dog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId='name'>
                    <Form.Label>Dog Name</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                <Form.Group controlId='bio'>
                    <Form.Label>Biography</Form.Label>
                    <Form.Control as="textarea" rows="3"></Form.Control>
                </Form.Group>
                <Form.Row>
                <Form.Group as={Col} controlId='breed'>
                    <Form.Label>Breed</Form.Label>
                    <Form.Control as='select'>
                        <option>Corgi (Pembroke Welsh)</option>
                        <option>Corgi (Cardigan Welsh)</option>
                        <option>Labrador Retriever</option>
                        <option>German Shepherd</option>
                        <option>Golden Retriever</option>
                        <option>French Bulldog</option>
                        <option>Bulldog</option>
                        <option>Poodle</option>
                        <option>Beagle</option>
                        <option>Rottweiler</option>
                        <option>German Shorthaired Pointer</option>      
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId='dob'>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type='date'></Form.Control>
                </Form.Group>
                </Form.Row>
                <Form.Group controlId='photo'>
                    <Form.Label>Photo</Form.Label>
                    <Form.File></Form.File>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={e => addDoggo(document.getElementById('name').value, document.getElementById('bio').value, document.getElementById('photo').files[0], document.getElementById('dob').value, document.getElementById('breed').value, () => {
                //console.log('success!')
                setShow(false);
            })}>Add Dog</Button>
        </Modal.Footer>
    </Modal>
    </>)
}