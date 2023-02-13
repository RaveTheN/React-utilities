import { Component } from "react";

export class Clock extends Component{
    state = {
        date: new Date()
    }

    render(){
        return <div>{this.state.date.toLocaleTimeString()}</div>
    }
}