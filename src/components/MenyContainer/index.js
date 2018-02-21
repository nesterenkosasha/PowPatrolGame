import React, {Component} from 'react'
import { browserHistory } from "react-router"
import '../style.scss'

export default class ManyContainer extends Component{ 
   
    handelClick = () => {
        browserHistory.push('game')
    }
    handelHistiryClick = () => {
        browserHistory.push('history')
    }

    render(){  
        return (
            <div id='meny'>
                <button 
                id='meny-btn'
                onClick={this.handelClick}
                >
                START GAME</button>
                <button id='meny-btn'
                onClick={this.handelHistiryClick}
                >
                MY HISTORY</button>
            </div>  
        )
    }
}

