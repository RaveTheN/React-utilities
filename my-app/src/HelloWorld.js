import React from 'react'

export class HelloWorld extends React.Component {
    render(){
        return (
            <div>
                {!!this.props.renderGreeting && <h1>Hello, World!</h1>}
                <p>What a beautiful day!</p>
            </div>
        )
    }
}

//export default HelloWorld