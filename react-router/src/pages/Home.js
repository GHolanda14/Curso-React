import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";
import "./Home.css";
const Home = () => {
  const url = "http://localhost:3000/produtos";

  const { dados, loading, error } = useFetch(url);

  return (
    <div>
      {error && <p>Erro ao carregar os produtos!</p>}
      {loading && <p>Carregando produtos...</p>}
      {dados && (
        <ul className="produtos">
          {dados.map((produto) => (
            <li key={produto.id}>
              <h2>{produto.name}</h2>
               <p>R${produto.price}</p>
               <Link to={`/produtos/${produto.id}`}>Detalhes</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
