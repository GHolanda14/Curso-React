import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Produto = () => {
  const { id } = useParams();

const url = `http://localhost:3000/produtos/${id}`;

  const {dados: produto, error, loading} = useFetch(url);
  return (
    <div>
        <p>Id do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p> }
      {loading && <p>Carregando item...</p>}
      {produto && (
        <>
            <h1>{produto.name}</h1>
            <p>R${produto.price}</p>
            <Link to={`/produtos/${id}/info`}>Mais detalhes</Link>
        </>
      )}
    </div>
  );
};

export default Produto;
