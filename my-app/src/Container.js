import { Component } from "react";

export class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-title">{this.props.title}</div>
        <hr />
        <div>{this.props.children} </div>
      </div>
    );
  }
}
