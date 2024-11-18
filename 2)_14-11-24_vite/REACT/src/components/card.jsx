import React from 'react'
import reactLogo from '../assets/react.svg'
import "./card.css"

const Card = (props) => {
    return (
        <div className='card'>
            <h2>{props.name}</h2>
            <h2>Roll No. : {props.roll}</h2>
            <img src={props.img} alt="" width="300px" height="200px"/>
        </div>
    )
}

export default Card
