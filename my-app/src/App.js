import { Container } from "./Container";
import { Clock } from "./Clock";
import { Welcome } from "./Welcome";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";

export function App() {
  const [language, setLanguage] = useState("en");

  function handleChangeLanguage(event) {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <select value={language} onChange={handleChangeLanguage}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
      </select>
      <LanguageContext.Provider value={language}>
        <Container title={<h1>My awesome Application</h1>}>
          <Welcome />
          <Clock />
        </Container>
      </LanguageContext.Provider>
    </div>
  );
}

// const todos = [
//   { id: 1, title: "Buy Milk", completed: false },
//   { id: 2, title: "Go to the movies", completed: false },
//   { id: 3, title: "Water the plants", completed: true },
//   { id: 4, title: "Sleep", completed: true },
// ];

// export function App() {
//   const [showCounter, setShowCounter] = useState(true)
//   const { counter, onIncrement } = useCounter()
//   const [username, setUsername] = useState('')

//   function handleToggleCounter() {
//     setShowCounter((s) => !s)
//   }

// export class App extends Component {
//   state = {
//     language: "en",
//   };

//   handleLanguageChange = (event) =>
//     this.setState({
//       language: event.target.value,
//     });

//   render() {
//     return (
//       <div>
//         <select
//           value={this.state.language}
//           onChange={this.handleLanguageChange}
//         >
//           <option value="en">ENGLISH</option>
//           <option value="it">ITALIANO</option>
//         </select>
//         <LanguageContext.Provider value={this.state.language}>
//           <Container title={<h1>My awesome Application</h1>}>
//             <Welcome name="Jimmy" />
//             <HookCounter initialValue={15}/>
//             <LoginForm />
//             <Clock />
//           </Container>
//         </LanguageContext.Provider>
//         <MouseTracker>
//           {(position) => {
//             const [x, y] = position;
//             return (
//               <div>
//                 The current position is {x}, {y}
//               </div>
//             );
//           }}
//         </MouseTracker>

//         <Counter />
//         <MyUncontrolledForm />
//         <MyList names={["Jimmy", "Robert", "John", "John"]} />
//         <MyTodos todos={todos} />
//       </div>
//     );
//   }
// }
