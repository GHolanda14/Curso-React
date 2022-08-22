import styles from "./Register.module.css";
import { useState, useEffect } from "react";

const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const [error,setError] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    setError("");

    if(password !== confirmPassword){
        setError("As senhas precisam ser iguais!");
        return
    }

    const user = {
        nome,
        email,
        password
    }

    console.log(user);
    setNome("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            placeholder="Nome do usuário"
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="E-mail do usuário"
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="Insira sua senha"
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirme sua senha"
          />
        </label>
        <button className="btn">Cadastrar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
