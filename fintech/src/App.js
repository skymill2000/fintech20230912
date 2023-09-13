import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListComponent from "./components/ListComponent";
import HeaderComponent from "./components/HeaderComponent";
import AxiosComponent from "./components/AxiosComponent";
import NewsSearch from "./pages/NewsSearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListComponent></ListComponent>}></Route>
        <Route
          path="/header"
          element={<HeaderComponent></HeaderComponent>}
        ></Route>
        <Route path="/axios" element={<AxiosComponent />}></Route>
        <Route path="/news" element={<NewsSearch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
