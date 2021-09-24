import React from 'react'
import hogs from '../porkers_data'
import HogDetails from './HogDetails'
import HogImage from './HogImage'
import { useState } from 'react'
export default function PigContainer() {
 
    return (
        <div>
            {hogs.map(hog => {
                return <HogImage name= {hog.name} image ={hog.image} />
            })}
            <HogDetails/>
        
            
        </div>
    )
}
