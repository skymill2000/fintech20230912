import logo from "./logo.svg";
import Welcome from "./components/Welcome";
import "./App.css";
import StateComponent from "./components/StateComponent";
import EventComponent from "./components/EventComponent";
import ListComponent from "./components/ListComponent";
import StyledComponent from "./components/StyledComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <Welcome username="유관우1" age={35}></Welcome>
      {/* <StateComponent></StateComponent> */}
      <EventComponent></EventComponent>
      <ListComponent></ListComponent>
      <StyledComponent></StyledComponent>
    </div>
  );
}

export default App;
