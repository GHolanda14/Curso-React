import { useState } from "react";

const ListRender = () => {
  const [personagens, setPersonagens] = useState([
    {id: 1, nome: "Castiel", classe: "Anjo"},
    {id: 2, nome: "Crowley", classe: "Demônio"},
    {id: 3, nome: "Dean", classe: "Humano"}
  ]);
  
  const [users] = useState([
    {id: 12, nome: "Pedro"},
    {id: 13, nome: "Claudia"} 
  ]);

  const deletarAleatorio = () => {
    const randomId = Math.floor(Math.random() * 4);
    setPersonagens((prevPersonagens) =>{
        return prevPersonagens.filter((personagem) => randomId !== personagem.id);
    })
  }
  
  return (
    <div>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.nome}</li>
            ))}
        </ul>
        <ul>
            {personagens.map((personagem) => (
                <li key={personagem.id}>
                    {personagem.nome} - {personagem.classe}
                </li>
            ))}
        </ul>
        <button onClick={deletarAleatorio}>Deletar aleatório</button>
    </div>
  )
};

export default ListRender;
