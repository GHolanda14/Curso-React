import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(true);
    const [nome,setNome] = useState("Pedrim");
  return(
    <div>
        <div>
        <h1>Conditional Render</h1>
        <h2>Se x for verdadeiro:</h2>
        {x && <p>Eu apareço!</p> /*If simples, V ou F*/} 
        </div>
        <div>
            <h2>If ternário</h2>
            {nome === "Pedrim" ? (
                <p>Seu nome é Pedrim!</p>
            ) : (
                <p>Seu nome não é Pedrim.</p>
            )}
            <button onClick={() => setNome("João")}>Teste</button>
        </div>
    </div>
  );
};

export default ConditionalRender;
