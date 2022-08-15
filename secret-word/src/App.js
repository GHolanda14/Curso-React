//CSS
import "./App.css";

//Data
import { wordsList } from "./data/words";

//Hooks
import { useCallback, useState, useEffect } from "react";

//Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, nome: "start" },
  { id: 2, nome: "game" },
  { id: 3, nome: "end" },
];
const guessesQtd = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].nome);
  const [words] = useState(wordsList);

  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQtd);
  const [score, setScore] = useState(0);

  //Chosing random word and category
  const pickWordAndCategory = useCallback(() => {
    //Pick random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    //Pick random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { category, word };
  }, [words]);

  //Start game
  const startGame = useCallback(() => {
    clearLetterStates();

    const { category, word } = pickWordAndCategory();
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].nome);
  }, [pickWordAndCategory]);

  //Game over
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };
  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  //Monitora os erros
  useEffect(() => {
    if (guesses <= 0) {
      //reset all states
      clearLetterStates();
      setGameStage(stages[2].nome);
    }
  }, [guesses]);

  //Monitora a condição de vitória
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (uniqueLetters.length === guessedLetters.length) {
      setScore((actualScore) => (actualScore += 100));
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  //Retry
  const retry = () => {
    setScore(0);
    setGuesses(guessesQtd);
    setGameStage(stages[0].nome);
  };

  return (
    <div className="App">
      {gameStage === stages[0].nome && <StartScreen startGame={startGame} />}
      {gameStage === stages[1].nome && (
        <Game
          verifyLetter={verifyLetter}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === stages[2].nome && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
