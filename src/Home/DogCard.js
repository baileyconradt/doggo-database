import react, { useEffect, useState } from 'react'
import { Card, Image } from 'react-bootstrap'

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

    return <div className='m-3 shadow dogCardParent'>
        <Image variant='top' className='dogCard'  src={dogLink}>
        </Image>
        <p className='dogCardName'>Flufferbottom</p>
    </div>
}