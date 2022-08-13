import React from "react";

const UserDetails = ({ nome, profissao, idade }) => {
  return (
    <div>
      <h1>Dados do cliente:</h1>

      <ul>
        <li>Nome: {nome}</li>
        <li>Profissão: {profissao}</li>
        <li>Idade: {idade}</li>
      </ul>
      {idade >= 18 ? <p>Já pode tirar a CNH!</p> : <p>Não pode tirar a CNH!</p>}
    </div>
  );
};

export default UserDetails;
