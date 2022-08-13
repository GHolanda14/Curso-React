import "./App.css";

import Rocks from "./assets/rocks.jpg";
import ConditionalRender from "./components/ConditionalRender";
import LearningProps from "./components/LearningProps";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";

function App() {
  const cars = [
    { marca: "BMW", cor: "Azul", newCar: false, valor: 78902 },
    { marca: "Fiat", cor: "Vermelho", newCar: true, valor: 231000 },
  ];

  return (
    <div className="App">
      <h1>Avançando em React!</h1>
      <div>
        <img src="/dog.jpg" alt="Cachorrinho andando por ai" height="300px" />
      </div>
      <div>
        <img src={Rocks} alt="Pedrinhas amontoadas" height="300px" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {cars.map((car) => (
        <LearningProps
          marca={car.marca}
          cor={car.cor}
          newCar={car.newCar}
          valor={car.valor}
        />
      ))}
    </div>
  );
}

export default App;
