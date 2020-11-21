import react, { useEffect, useState } from "react";
import { Card, Image, Modal } from "react-bootstrap";
import Keyword from "./Keyword";

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

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/pembroke/images/random")
      .then((res) => res.json())
      .then((res) => {
        //console.log(res.message)
        updateLink(res.message);
      });
  }, []);

  return (
    <div className="m-3 shadow dogCardParent">
      <Image
        variant="top"
        className="dogCard"
        src={dogLink}
        onClick={() => {
          setShow(true);
        }}
      ></Image>
      <p className="dogCardName">Luna</p>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        width="100%"
        size="xl"
        centered
      >
        <div className="d-flex flex-row flex-wrap" style={{minHeight: '50vh'}}>
          <Image src={dogLink} style={{flexGrow: 1, objectFit: 'cover'}} />
          <div className="m-3 grow" style={{ width: "400px" }}>
          <div className='d-flex flex-column justify-content-between' style={{height: '100%'}}>
              <div>
            <h3>Luna</h3>
            <small className="text-muted">
              <p>Pembroke Welsh Corgi owned by Bailey C.</p>
            </small>
            
            <p>
              Look at this cute pupper go. She loves to zoom around the yard
              when Bailey takes her outside. She also loves long walks along the
              Fox River.
            </p>
            </div>
            <div>
            <div className="d-flex flex-row mt-auto" id="keywords">
              <Keyword keyword='Fluffy' />
              <Keyword keyword='Long' />
              <Keyword keyword='Adorable' />
            </div>
            </div>
            </div>
            
            
          </div>
        </div>
      </Modal>
    </div>
  );
}
