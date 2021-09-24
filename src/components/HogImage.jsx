import React from 'react'
import { useState } from 'react'

export default function HogImage({name, image}) {
    const [pigImage, setImage] = useState(null)
    function showDetails() {
        if(pigImage === null){
            setImage({image})
        }else{
            setImage(null)
        }
    }
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt="PigImage"/>
            <button onClick= {showDetails}> Pig Info </button>
        </div>
    )
}
