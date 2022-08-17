import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <h1>Aprendendo React Router</h1>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
