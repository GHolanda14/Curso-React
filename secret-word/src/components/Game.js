import "./Game.css";

import { useState, useRef } from "react";

const Game = ({
  verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  };

  return (
    <div className="jogo">
      <p className="pontos">
        Pontuação: <span>{score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="dica">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s)</p>
      <div className="palavraContainer">
        {letters.map((l, i) =>
          guessedLetters.includes(l) ? (
            <span key={i} className="letra">
              {l}
            </span>
          ) : (
            <span key={i} className="vazio"></span>
          )
        )}
      </div>
      <div className="letrasContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            maxLength="1"
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
            required
          />
          <button type="submit">Jogar</button>
        </form>
      </div>
      <div className="letrasErradasContainer">
        <p>Letras já utilizadas</p>
        {wrongLetters.map((l, i) => (
          <span key={i}>{l}, </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
