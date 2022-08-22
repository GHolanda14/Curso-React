import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
/*Pages*/
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

/*Components*/
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
