import react, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

function getCorg() {
    fetch('https://dog.ceo/api/breed/pembroke/images/random')
    .then(res => res.json())
    .then(res => {
        console.log(res.message)
        return res.message;
    })
}



export default function DogCard(props) {
    
    const [dogLink, updateLink] = useState('')

    useEffect(() => {
        fetch('https://dog.ceo/api/breed/pembroke/images/random')
    .then(res => res.json())
    .then(res => {
        //console.log(res.message)
        updateLink(res.message)
    })
    }, [])

    return <Card style={{width: '18rem'}} className='m-3'>
        <Card.Img variant='top' src={dogLink}></Card.Img>
        <Card.Body>
            <Card.Title>Luna</Card.Title>
            <Card.Text>This beautiful Pembroke Welsh Corgi is really quite a sweetheart.</Card.Text>
        </Card.Body>
    </Card>
}