import React from "react";
import { HelloWorld } from "./HelloWorld";

//function components do not have access to a "this"
//cannot keep an internal state
//not having an instance, they cannot be attached to a ref
export function Welcome(name) {
  return (
    <div>
      name && <h2>Hello, {name = 'World'}</h2>
    </div>
  );
}

// export class Welcome extends React.Component {
//     render() {
//         const WelcomeStyle = {
//             color: this.props.name ? 'green' : 'red',
//             backgroundColor: '#df1'
//         }
//         return (
//             <div style={WelcomeStyle}>
//                 {!!this.props.name && <h2>Hello, {this.props.name}</h2>}
//                 {!this.props.name && <HelloWorld renderGreeting/>}
//             </div>
//         )
//     }
// }
