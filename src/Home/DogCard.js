import { useEffect, useState } from "react";
import { Card, Image, Modal, Button } from "react-bootstrap";
import Keyword from "./Keyword";
import { auth, firestore } from '../firebaseStuff.js';

function getCorg() {
  fetch("https://dog.ceo/api/breed/pembroke/images/random")
    .then((res) => res.json())
    .then((res) => {
      console.log(res.message);
      return res.message;
    });
}

/**
 * This is the dog card, which should typically be rendered within a Dog Section. You will need to pass information about the dog to this function, including and especially the url for the dog photo
 * @param {props} props
 */
export default function DogCard(props) {
  const [dogLink, updateLink] = useState("");
  const [show, setShow] = useState(false);

  const { dogName, bio, breed, color, birthday, displayName, photoURL, uid, keywords, score } = props.dog;
  const key = props.dog.id;

  const deleteDoggo = () => {
    firestore.collection('dogs').doc(key).delete().then(
      console.log("deleted!")
    ).catch(error => console.log(error));
  }

  const upvoteDoggo = () => {
    let dogRef = firestore.collection('dogs').doc(key);

    //find the current doggo
    const dog = dogRef.get().then(doc => {
      //console.log(doc.data());
      let upvoteUsers = doc.data().upvoteUsers
      let score = doc.data().score
      let updatedUpvoteUsers;
      let newScore;

      //only submit if not upvoted already
      if (!upvoteUsers || !upvoteUsers.includes(auth.currentUser.uid)) {

        if (upvoteUsers) {
          updatedUpvoteUsers = upvoteUsers;
          updatedUpvoteUsers.push(auth.currentUser.uid);
        }
        else {
          updatedUpvoteUsers = []
          updatedUpvoteUsers.push(auth.currentUser.uid);
        }
        if (score) {
          newScore = ++score;
        }
        else {
          newScore = 1;
        }
        dogRef.update({
          score: newScore,
          upvoteUsers: updatedUpvoteUsers
        })
      }
      //user already upvoted, undo
      else {
        updatedUpvoteUsers = upvoteUsers;
        updatedUpvoteUsers.pop(auth.currentUser.uid);
        newScore = --score;
        dogRef.update({
          score: newScore,
          upvoteUsers: updatedUpvoteUsers
        })
      }
    })
  }

  const downvoteDoggo = () => {
    let dogRef = firestore.collection('dogs').doc(key);

    //find the current doggo
    const dog = dogRef.get().then(doc => {
      let downvoteUsers = doc.data().downvoteUsers
      let score = doc.data().score
      let updatedDownvoteUsers;
      let newScore;

      //only submit if not downvoted already
      if (!downvoteUsers || !downvoteUsers.includes(auth.currentUser.uid)) {
        if (downvoteUsers) {
          updatedDownvoteUsers = downvoteUsers;
          updatedDownvoteUsers.push(auth.currentUser.uid);
        }
        else {
          updatedDownvoteUsers = []
          updatedDownvoteUsers.push(auth.currentUser.uid);
        }
        if (score) {
          newScore = --score;
        }
        else {
          newScore = -1;
        }
        dogRef.update({
          score: newScore,
          downvoteUsers: updatedDownvoteUsers
        })
      }
      //user already downvoted, undo
      else {
        updatedDownvoteUsers = downvoteUsers;
        updatedDownvoteUsers.pop(auth.currentUser.uid);
        newScore = ++score;
        dogRef.update({
          score: newScore,
          downvoteUsers: updatedDownvoteUsers
        })
      }
    })

  }

  //TODO: edit dog from clicking on the card
  const editDoggo = () => {

  }

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/pembroke/images/random")
      .then((res) => res.json())
      .then((res) => {
        //console.log(res.message)
        updateLink(res.message);
      });
  }, []);

  return (
    <div className="mt-3 mr-3 shadow dogCardParent">
      <Image
        variant="top"
        className="dogCard"
        src={photoURL}
        onClick={() => {
          setShow(true);
        }}
      ></Image>
      <div className="dogVoteBox"><img className="dogUpvote" onClick={() => upvoteDoggo()} src='https://cdn.iconscout.com/icon/free/png-512/paw-29-459421.png' />
        <img className="dogDownvote" onClick={() => downvoteDoggo()} src='https://cdn.iconscout.com/icon/free/png-512/paw-29-459421.png' />
        <div className="dogScore">{score ? score : 0}</div>
      </div>
      <p className="dogCardName">{dogName}</p>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        width="100%"
        size="xl"
        centered
      >
        <div className="d-flex flex-row flex-wrap" style={{ minHeight: '50vh' }}>
          <Image src={photoURL} style={{ flexGrow: 1, objectFit: 'cover', maxHeight: '70vh' }} />
          <div className="m-3 grow" style={{ width: "400px" }}>
            <div className='d-flex flex-column justify-content-between' style={{ height: '100%' }}>
              <div>
                <h3>{dogName}</h3>
                <small className="text-muted">
                  <p>{breed} owned by {displayName}</p>
                </small>

                <p>
                  {bio}
                </p>
              </div>
              <div>
                {(uid == auth.currentUser.uid) ? <Button className='dogButton my-1' onClick={deleteDoggo}>Delete Doggo</Button> : <></>}
                {(uid == auth.currentUser.uid) ? <Button className='dogButton my-1' onClick={editDoggo}>Edit Doggo</Button> : <></>}
                <div className="d-flex flex-row mt-auto" id="keywords">
                  {keywords && keywords.map((keyword, i) => <Keyword key={i} keyword={keyword} />)}
                </div>
              </div>

            </div>


          </div>
        </div>
      </Modal>
    </div>
  );
}
