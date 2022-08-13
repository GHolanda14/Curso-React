import { useState } from "react";
import "./App.css";

import Rocks from "./assets/rocks.jpg";
import ChangeMessage from "./components/ChangeMessage";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunc from "./components/ExecuteFunc";
import Fragmento from "./components/Fragmento";
import LearningProps from "./components/LearningProps";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import Message from "./components/Message";

function App() {
  const cars = [
    {id:1, marca: "BMW", cor: "Azul", newCar: false, valor: 78902 },
    {id:2, marca: "Fiat", cor: "Vermelho", newCar: true, valor: 231000 },
  ]

  const funcEvento = () => console.log("Executando função por evento!");

  const [msg,setMsg] = useState("");
 
  const handleMsg = (msg) => {
    setMsg(msg);
  }

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
          key={car.id}
          marca={car.marca}
          cor={car.cor}
          newCar={car.newCar}
          valor={car.valor}
        />
      ))}
      <Fragmento/>
      <Container>
        <h2>E dentro dele, um filho</h2>
        <h2>Ou seriam 2? rsrsrs</h2>
      </Container>
      <ExecuteFunc myFunction={funcEvento}/>
      <Message msg={msg}/>
      <ChangeMessage handleMsg={handleMsg}/>
    </div>
  );
}

export default App;
