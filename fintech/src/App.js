import logo from "./logo.svg";
import "./App.css";

const Welcome = ({ username, age }) => {
  return (
    <>
      <p>
        {username}님 {age}세 안녕하세요!
      </p>
    </>
  );
};

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
