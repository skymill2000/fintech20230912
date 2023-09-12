import logo from "./logo.svg";
import Welcome from "./components/Welcome";
import "./App.css";
import StateComponent from "./components/StateComponent";

function App() {
  return (
    <div className="App">
      <Welcome username="유관우1" age={35}></Welcome>
      <StateComponent></StateComponent>
    </div>
  );
}

export default App;
