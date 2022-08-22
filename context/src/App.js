import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Detalhes from "./pages/Detalhes";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/*Não utilizamos assim, faça só na aula! */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/detalhes" element={<Detalhes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
