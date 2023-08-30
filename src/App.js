import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import DetilPage from "./pages/DetilPage";
import SearchPage from "./pages/SearchPage";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<LoginPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path=":movieId" element={<DetilPage />} />
        <Route path="search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
