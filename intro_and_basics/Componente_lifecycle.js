import { Component } from "react";

export class Counter extends Component{
    state = {
        count: this.props.initialValue ?? 0,
    }

    constructor(props){
        super(props)
        this._interval = setInterval(() =>{
            this.setState((state) => {
                return {
                    count: state.count + (this.props.incrementBy ?? 1),
                }
            })
        }, this.props.timeout ?? 1000)
    }

    componentWillUnmount(){
        if (this._interval){
            clearInterval(this._interval)
        }
    }//qui dice: se parte la fase di unmount, se (this._interval esiste) {smontalo}

    render(){
        return <div>
            <h3>Count: {this.state.count}</h3>
            {this.state.count < 6 && <p>This counter is great!</p>}
        </div>
    }//when the counter reaches 7 the <p>This counter is great!</p> component will be unmount
} 

Counter.defaultProps = {
    timeout: 1000,
    initialValue: 0,
    incrementBy: 1
}