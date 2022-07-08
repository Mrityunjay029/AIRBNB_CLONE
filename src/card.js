import React from 'react'
import group65 from './Group 65 (1).png'
import group78 from './Group 78.png'
import group79 from './Group 79.png'
import katie from './katie.png'
import wedding from './wedding-photography 1.png'
import mountainbike from './mountain-bike 1.png'
export default function card(){
    return (
        <div className='card'>
            <div className='C1'>
            <img src={katie} alt=''/>
            <p className='p1'>SOLD-OUT</p>
            <img className='rating1' src={group65} alt=''/>
            </div>
            <div className='C2'>
            <img src={wedding} alt=''/>
            <p className='p2'>ONLINE</p>
            <img className='rating2' src={group78} alt=''/>
            </div>
            <div className='C3'>
            <img src={mountainbike} alt=''/>
            <p className='p3'></p>
            <img className='rating3' src={group79} alt=''/>
            </div>
        </div>
    )
}