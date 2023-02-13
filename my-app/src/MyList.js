import { Component } from "react";


export class MyLIst extends Component {
    render(){
        return(
            <div>
                <ul>
                    {this.props.names.map((name,index) => (
                    <li key={name + index}>{name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}