import React from "react";
import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ user }) => {
  const [nome, setNome] = useState(user ? user.nome : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [funcao, setFuncao] = useState(user ? user.funcao : "");

  const handleEmail = (e) => {
    //Só para mostrar que existem as duas formas
    if (e.target.value.includes("@")) {
      console.log("É um email de verdade hein");
    }
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando formulário com os dados:");
    console.log(nome, email, bio,funcao);

    setNome("");
    setEmail("");
    setBio("");
    setFuncao("")
  };
  return (
    <div>
      <h2>Meu formulário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <span>Nome:</span>
            <input
              type="text"
              placeholder="Digite seu nome..."
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="example@provider.com"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div>
          <label>
            <span>Biografia: </span>
            <textarea
              name="bio"
              onChange={(e) => setBio(e.target.value)}
              placeholder="Escreva um pouco sobre você..."
              value={bio}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Função no sistema:</span>
            <select name="funcao" onChange={(e) => setFuncao(e.targe.value)} value={funcao}>
                <option value="desenvolvedor">Desenvolvedor</option>
                <option value="qa">QA</option>
                <option value="design">Design</option>
            </select>
          </label>
        </div>
        <input type="submit" text="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
