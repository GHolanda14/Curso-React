import { Link, useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const Search = () => {
    const [searchParams] = useSearchParams();

    const url = `http://localhost:3000/produtos?${searchParams}`;

    const {dados: produtos, loading, error} = useFetch(url);
  return (
    <div>
        <h1>Resultados encontrados: </h1>
        {error && <p>Erro ao carregar os produtos!</p>}
      {loading && <p>Carregando produtos...</p>}
      {produtos && (
        <ul className="produtos">
          {produtos.map((produto) => (
            <li key={produto.id}>
              <h2>{produto.name}</h2>
               <p>R${produto.price}</p>
               <Link to={`/produtos/${produto.id}`}>Detalhes</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Search