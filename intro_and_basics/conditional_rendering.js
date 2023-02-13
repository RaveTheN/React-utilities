import React from 'react'

export class HelloWorld extends React.Component {
    render(){
        return (
            <div>
                {this.props.renderGreeting && <h1>Hello, World!</h1>}
                <p>What a beautiful day!</p>
            </div>
        )
    }
}

//alla rige 7 Hello World verrà passato solo se this.props.renderGreeting è truthy, e quindi passerà oltre il 
//conditional operator "&&"
//export default HelloWorld

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                {this.props.name 
                    ? <h2>Hello, {this.props.name}</h2> 
                    : <h2>Hello, World!</h2>}
            </div>//se this.props.name è truthy, allora fai passare il primo statement, altrimenti quello dopo :
        )
    }
}
