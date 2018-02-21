import React, {Component} from 'react'
import { connect } from 'react-redux'
import './style.scss'

class GameContainer extends Component{
    constructor(props){
        super(props)
        
        window.addEventListener('keypress', this.handel)
    }
    
    handel = (e) => {
        const { key } = e;
        const { inp } = this.props.data;
        if(key == inp){
            console.log('OK')
            this.props.handelOk()
        } else {
            console.log('wrong')
        } 
        this.props.handel() 
    }
    
    render(){  
        const { src } = this.props.data
        console.log('SRC', src)
        return(
            <div id='game-image'>
                <div id='main'>
                    <img id='img' src={src} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { reducerData } = state
    return {
        data: reducerData
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        handel: () => dispatch({ type: 'CHANGE_VIEW' }),
        handelOk: () => dispatch({ type: 'ADD_POINT' })
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(GameContainer)


// random(){
//     let y = ((Math.random()*10).toFixed(0))-1
//     if(y <= 1) {
//         return y=1
//     }
//     return y
// }
