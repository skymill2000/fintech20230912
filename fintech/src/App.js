import logo from "./logo.svg";
import Welcome from "./components/Welcome";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Welcome username="유관우1" age={35}></Welcome>
      <Welcome username="유관우2" age={35}></Welcome>
      <Welcome username="유관우3" age={35}></Welcome>
    </div>
  );
}

export default App;
