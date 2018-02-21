import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './style.scss'
import GameContainer from './GameContainer'
import HelpComponent from './HelpComponent'
import ScoreComponent from './ScoreComponent'
import TimerComponent from './TimerComponent'
import reducer from './reducer.js'

const store = createStore(reducer)

export default class Layout extends Component{

    render(){ 
        return (
            <Provider store={store} >
                <div id="game" >
                    <TimerComponent />  
                        <div id="playground" > 
                            <GameContainer />
                            <HelpComponent />
                        </div>
                    <ScoreComponent />
                </div>
            </Provider>
        )
    }

}