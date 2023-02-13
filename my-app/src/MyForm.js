import { Component } from "react";

export class MyForm extends Component {
    state = {
        username: '',
        password: '',
        remember: false
    }

    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value,
            
        })
    }

    handleResetState = () => {
        this.setState({
            username:'',
            password:'',
            remember: false
        })
    }

    handlePrefillForm = () =>{
        //a call to some server happens and some data is returned

        this.setState({
            username:'Jimmy',
            password:'Hello123',
            remember: true
        })
    }

    componentDidUpdate(){
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <h1>My Form</h1>
                <div>
                    <button onClick={this.handleResetState}>Reset</button>
                    <button onClick={this.handlePrefillForm}>Prefill Form</button>
                </div>
                <div>
                    <input name="username" value={this.state.username} onChange={this.handleInputChange}/>
                    <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
                    <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
                </div>
            </div>//onChange is fired whenever tha value of an input has changed in HTML and the input loses focus
                  //in React onChange is fired whenever the input value change, not requiring it to lose focus
        )
    }
}