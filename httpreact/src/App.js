import "./App.css";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const { dados: itens, httpConfig, loading, error } = useFetch(url);

  const handleForm = async (e) => {
    e.preventDefault();
    const produto = {
      name: nome,
      price: preco,
    };

    httpConfig(produto, "POST");

    setNome("");
    setPreco("");
  };


  const deletarProd = (id) => {    
    httpConfig(id,"DELETE");
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        !loading &&(
        <ul>
          {itens &&
            itens.map((p) => (
              <li key={p.id}>
                {p.name} - R$ {p.price}
                <button onClick={()=> deletarProd(p.id)}>Deletar</button> 
              </li>
            ))}
        </ul>
    )
      )}
      <div className="addProduto">
        <form onSubmit={handleForm}>
          <label>
            <input
              type="text"
              value={nome}
              name="nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <label>
            <input
              type="number"
              value={preco}
              name="preco"
              onChange={(e) => setPreco(e.target.value)}
            />
          </label>
          {!loading && <input type="submit" value="Criar" />}
          {loading && <input type="submit" value="Aguarde" disabled />}
          
        </form>
      </div>
    </div>
  );
}

export default App;
