import { data } from './constants.js'
import { browserHistory } from 'react-router'
import { combineReducers } from 'redux'

const reducerData = (state = data, action) => {
    switch(action.type){
        case "@@redux/INIT": {
           return state = data[2]
        }
        case "CHANGE_VIEW": {
            return state = data[((Math.random()*9).toFixed(0))]
        }
    }
    return state
}

const reducer = (state = 0, action) => {
    if(action.type == 'ADD_POINT') {
        return ++state
    }
    return state
    console.log('ADDPOINT', state)
}

const reducerSecond = (state = 10, action) => {
    switch(action.type){
        case "TICK": {
            if(state === 0){
                console.log('action', action)
                console.log('from reducer', state)
                return state = 10
            };
            return --state
        }
        case "FINISH_TIMER": {
            browserHistory.push('star')
            return state
        }     
    }  
    return state
}
export default combineReducers({ reducerData, reducer, reducerSecond })
