import React from 'react'
import { Link } from "react-router"
import star from '../img/star.jpg' 

export default () => {
    let r = JSON.parse(localStorage.getItem("round"))        
    let d = (r[r.length-1])  
    
    return (
        <div id='stars' >
            <div>Ты нажал правильно: {d.val} раз</div>
            <img id='star' src={star} /> <br />
            <Link id='starLink' to={'/'}>HOME</Link>
        </div>
    )
}