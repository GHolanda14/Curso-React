import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  const { counter, setCounter } = useCounterContext();
  const {color,fontWeight, dispatchTitle} = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatchTitle({ type: color });
  };

  return (
    <div>
      <h1 style={{color: color,fontWeight: fontWeight}}>HOME</h1>
      <p>Valor do contador: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Aumente o valor</button>
      <button onClick={() => setTitleColor("BLUE-NEG")}>Azul Negrito</button>
      <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      <button onClick={() => setTitleColor("RED-NEG")}>Vermelho Negrito</button>
      <button onClick={() => setTitleColor("RED")}>Vermelho</button>
    </div>
  );
};

export default Home;
