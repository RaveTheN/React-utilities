import { Component } from "react";

export class MyTodos extends Component {
    render(){
        return(
        <div>
                {this.props.todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}
                        {todo.completed && <span>(COMPLETED)</span>}
                    </li>
                ))}
        </div>
        )
    }
}