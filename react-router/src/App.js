import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Produto from "./pages/Produto";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <h1>Aprendendo React Router</h1>
      <BrowserRouter>
        <NavBar />
        <SearchForm/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/produtos/:id" element={<Produto />} />
          <Route path="/produtos/:id/info" element={<Info />} />
          <Route path="*" element={<NotFound/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/about" element={<Navigate to={"/sobre"}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
