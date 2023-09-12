import logo from "./logo.svg";
import Welcome from "./components/Welcome";
import "./App.css";
import StateComponent from "./components/StateComponent";
import EventComponent from "./components/EventComponent";
import ListComponent from "./components/ListComponent";

function App() {
  return (
    <div className="App">
      <Welcome username="유관우1" age={35}></Welcome>
      {/* <StateComponent></StateComponent> */}
      <EventComponent></EventComponent>
      <ListComponent></ListComponent>
    </div>
  );
}

export default App;
