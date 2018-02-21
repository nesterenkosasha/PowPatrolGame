import React, {Component} from 'react'
import { connect } from 'react-redux'
import './style.scss'

class TimerComponent extends Component{
    constructor(props){
        super(props)
        this.stop = this.stop.bind(this)
    }

    componentDidMount(){
        this.interval = setInterval(()=>{this.props.tick()}, 1000);
        //setTimeout(() => {this.stop()}, 6000)
        console.log('from start', this.interval);
    }

    stop = () => {
        clearInterval(this.interval)
    }

    componentWillUpdate(){
        if(this.props.data == 0){
            this.props.finishTimer()
            console.log('MOUNT', this.props.data) 
        }
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    // finishTimer = () => {
    //     this.stop()
    //     this.props.finishTimer()
    // }
    
    
    // const a = this.tick()
    // console.log('AA', a)
    
    render(){ 
        return(
            <div id='timer-main'>
                {`Timer: ${this.props.data}`}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { reducerSecond } = state
    console.log('SEC', reducerSecond)
    return {
        data: reducerSecond
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        tick: () => dispatch({ type: 'TICK' }),
        finishTimer: () => dispatch({ type: 'FINISH_TIMER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerComponent)


