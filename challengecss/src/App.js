import './App.css';
import ShowCars from './components/ShowCars';

function App() {
  const cars = [
    {id: 1, marca: "BMW", cor: "Azul",  valor: 78902 },
    {id: 2, marca: "Fiat", cor: "Vermelho", valor: 231000 },
    {id: 3, marca: "Chevrolet", cor: "Preto", valor: 129883 }
  ];
  return (
    <div className="App">
      <h1 className="titulo_app">Título do APP topzera</h1>
      {cars.map((car)=>(
         <ShowCars marca={car.marca} cor={car.cor} valor={car.valor}/> 
      ))}
      
    </div>
  );
}

export default App;
