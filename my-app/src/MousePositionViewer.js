import { Component } from "react";
import { WithMousePosition } from "./WithMousePosition";

export class MousePositionViewer extends Component{
    render(){
        const [x, y] = this.props.position 

        return (
            <div style={{ height:300, width: 300, backgroundColor: "azure"}}>
                Current position: {x}, {y}
            </div>
        )
    }
}

export default WithMousePosition(MousePositionViewer)