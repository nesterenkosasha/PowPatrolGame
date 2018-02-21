import React, {Component} from 'react'
import { browserHistory } from "react-router"
import './style.scss'

export default class HistoryComponent extends Component{
    handel = () => {
        console.log('HistoryComponent did mount')
        browserHistory.push('/')
    }
    
    render(){  
        let r = JSON.parse(localStorage.getItem("round"))        
        return(
            <div id="score" >
                {
                    r.map(el => {
                        return(
                        <div key={el.id}>
                            <div>Игра № : {el.id + 1}</div>
                            <div>Количество очков: {el.val}</div>
                        </div>)
                    })
                }
                <button
                id='historyBtn'
                onClick={this.handel}
                >Вернуться</button>
            </div>
        )
    }
}

