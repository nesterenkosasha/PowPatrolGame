import React, {Component} from 'react'
import { connect } from 'react-redux'
import './style.scss'

class ScoreComponent extends Component{
    componentWillUnmount(){
        console.log('scorecomponent will unmount')
        let round = JSON.parse(localStorage.getItem("round")) || []
        localStorage.setItem("round", JSON.stringify([...round, {
            id: round.length+1,
            val: this.props.data
        }]))
        console.log('round', round, round.length)     
    }
        
    render(){  
        console.log('score/score', this.props.data)
        return(
            <div id="score" >
                Ты заработал {this.props.data} очков
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { reducer } = state
    console.log('scorecomponent', reducer)
    return {
        data: reducer
    }   
}

export default connect( mapStateToProps )(ScoreComponent)
