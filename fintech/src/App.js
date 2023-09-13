import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AuthResult from "./pages/AuthResult";
import AccountList from "./pages/AccountList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<ListComponent></ListComponent>}></Route>
        <Route
          path="/header"
          element={<HeaderComponent></HeaderComponent>}
        ></Route>
        <Route path="/axios" element={<AxiosComponent />}></Route>
        <Route path="/news" element={<NewsSearch />}></Route> */}
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/authResult" element={<AuthResult />}></Route>
        <Route path="/list" element={<AccountList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
