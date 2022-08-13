import './App.css';

import Rocks from "./assets/rocks.jpg";
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <ManageData/> 
      <h1>Avançando em React!</h1>
      <div>
        <img src="/dog.jpg" alt="Cachorrinho andando por ai" height="300px"/>
      </div>
      <div>
        <img src={Rocks} alt="Pedrinhas amontoadas" height="300px"/>
      </div>
      <ListRender/>
    </div>
  );
}

export default App;
