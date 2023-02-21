import React, { useState } from "react";

//function components do not have access to a "this"
//cannot keep an internal state
//not having an instance, they cannot be attached to a ref
export function Welcome() {
  const [name, setName] = useState("World");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>Hello, {name}!</h2>
      <input value={name} onChange={handleNameChange} />
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
