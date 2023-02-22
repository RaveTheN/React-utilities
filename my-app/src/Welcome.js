import React, { useEffect, useRef, useState } from "react";
import { DisplayLanguage } from "./DisplayLanguage";
export function Welcome() {
  const [name, setName] = useState("World");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <DisplayLanguage />
      <h2>Hello, {name}!</h2>
      <input ref={inputRef} value={name} onChange={handleNameChange} />
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
