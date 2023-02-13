import { Component, createRef } from "react";

export class MyUncontrolledForm extends Component {
    _formRef = createRef()

    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember =  event.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })
    }

    handleFormPrefill = () => {
        //fino a this._formRef.current fa la stessa cosa che fa event.target
        this._formRef.current.elements.username.value = 'Billy'
        this._formRef.current.elements.password.value = 'hello1212'
        this._formRef.current.elements.remember.value = true
    }

    render(){
        return(
            <div>
                <h3>MyUncontrolledForm</h3>

                <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                    <input name="username" defaultValue="Peppe"/>
                    <input name="password" type="password"/>
                    <input name="remember" type="checkbox"/>

                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                    <button type="button" onClick={this.handleFormPrefill}>Prefill</button>
                </form>
            </div>
        )
    }
}