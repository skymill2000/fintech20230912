import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AuthResult from "./pages/AuthResult";
import AccountList from "./pages/AccountList";
import Balance from "./pages/Balance";
import QrCode from "./pages/QrCode";
import QrReader from "./pages/QrReader";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/authResult" element={<AuthResult />}></Route>
        <Route path="/list" element={<AccountList />}></Route>
        <Route path="/balance" element={<Balance />}></Route>
        <Route path="/qrcode" element={<QrCode />}></Route>
        <Route path="/qrreader" element={<QrReader />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
