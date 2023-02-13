import { Component } from "react";

export class App extends Component {

    state = {
        counter : 0
    }

    add = () => {
        this.setState({counter: this.state.counter +1})
    }


    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}