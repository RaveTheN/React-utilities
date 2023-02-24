import { Link, useNavigate, useParams } from "react-router-dom";
import { DisplayLanguage } from "./DisplayLanguage";

export function Welcome() {
  const { name = "Wario" } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <DisplayLanguage />
      <h2>Hello, {name}!</h2>
      <Link to="/login">Login to the App</Link>
      <button onClick={handleClick}>Login to the App</button>
    </div>
  );
}

// export function Welcome() {
//   const [name, setName] = useState("World");
//   const inputRef = useRef();
//   const navigate = useNavigate();

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleClick = () => {
//     navigate("/login");
//   };

//   return (
//     <div>
//       <DisplayLanguage />
//       <h2>Hello, {name}!</h2>
//       <input ref={inputRef} value={name} onChange={handleNameChange} />
//       <Link to="/login">Login to the App</Link>
//       <button onClick={handleClick}>Login to the App</button>
//     </div>
//   );
// }

//component version

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
