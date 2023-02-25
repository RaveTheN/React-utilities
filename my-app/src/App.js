import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { Catalogue } from "./Catalogue";
import { Product } from "./Product";
import { GithubUsers } from "./GithubUsers";

export function App() {
  return (
    <Container
      title={
        <div>
          <h1>My awesome app</h1>
          <div>
            <Link to="/">Home</Link> | <Link to="products">Products</Link> |{" "}
            <Link to="users">Users</Link>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="products" element={<Catalogue />}>
          <Route index element={<p>Please select a product</p>} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="users" element={<GithubUsers />} />
        <Route
          path="*"
          element={
            <div>
              <p>Not Found</p>
              <Link to="/">Go Home</Link>
            </div>
          }
        />
      </Routes>
    </Container>
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
//       <Container>
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
//               <Container>
//                 The current position is {x}, {y}
//               </Container>
//             );
//           }}
//         </MouseTracker>

//         <Counter />
//         <MyUncontrolledForm />
//         <MyList names={["Jimmy", "Robert", "John", "John"]} />
//         <MyTodos todos={todos} />
//       </Container>
//     );
//   }
// }
