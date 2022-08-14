import './Game.css'

const Game = ({ gameOver }) => {
  return (
    <div className="jogo">
      <p className="pontos">
        Pontuação: <span>000</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="dica">
        Dica sobre a palavra: <span>Dica...</span>
      </h3>
      <p>VocÊ ainda tem X tentativa(s)</p>
      <div className="palavraContainer">
        <span className="letra">A</span>
        <span className="vazio"></span>
      </div>
      <div className="letrasContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" maxLength={1}></input>
          <button onClick={gameOver}>Jogar</button>
        </form>
      </div>
      <div className="letrasErradasContainer">
        <p>Letras já utilizadas</p>
        <span>b,</span>
        <span>a,</span>
      </div>
    </div>
  );
};

export default Game;
