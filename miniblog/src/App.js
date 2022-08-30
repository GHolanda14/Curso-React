import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from "./hooks/useAuthentication";
import { useState,useEffect } from "react";

/*Components*/
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


/*Pages*/
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CreatePost from "./Pages/CreatePost/CreatePost";
import NotFound from "./Pages/NotFound/NotFound";
import Search from "./Pages/Search/Search";
import Post from "./Pages/Post/Post";

function App() {
  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) =>{
      setUser(user)
    })
  },[auth])
  
  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/posts/:id" element={<Post/>}></Route>
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/"/>} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
              <Route path="/dashboard" element={user ? <Dashboard/> : <Navigate to="/login"/>}/>
              <Route path="/posts/create" element={user ? <CreatePost/> : <Navigate to="/login"/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
