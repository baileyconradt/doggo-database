import {Navbar, Nav, NavDropdown, Button, Form, FormControl} from 'react-bootstrap';
import {auth, firestore} from './firebaseStuff.js';
import firebase from 'firebase/app';

export default function TopNav(props) {
    return (<Navbar bg="white" expand="lg" className='mt-0 pt-1'>
    <Navbar.Brand href="#home">Corgo.Net</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav d-flex flex-row justify-content-center">
      <Nav className="mr-5 grow">
        <Nav.Link>
          Tubes, Potatoes, and Nubs since 2020 
        </Nav.Link>
      </Nav>
      <Nav style={{flexGrow: 10}}>
      <Form inline className='grow'>
        <Form.Control type="text" placeholder="Search" className="mr-sm-2" style={{width: '100%'}} />
      </Form>
      </Nav>
      <Nav className='grow'>
        <Nav.Link className='ml-auto'>
          {props.user ? <Signout/> : <Login/>}
        </Nav.Link>
      </Nav>
      
      
    </Navbar.Collapse>
  </Navbar>);
  }

  function Login(props) {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

        return (
<Button className='dogButton' onClick={signInWithGoogle}>Sign In With Google</Button>
            );
}

function Signout(props) {
  return auth.currentUser && (
<Button className='dogButton' onClick={() => auth.signOut()}>Sign Out</Button>
  )

     


}