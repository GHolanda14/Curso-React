//CSS
import "./App.css";

//Data
import { wordsList } from "./data/words";

//Hooks
import { useState, useEffect } from "react";

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

  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedWord, setPickedWord] = useState("");
  const [letters, setLetters] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQtd);
  const [score, setScore] = useState(0);

  //Chosing random word and category
  const pickWordAndCategory = () => {
    //Pick random category
    const categories = Object.keys(wordsList);
    const category = categories[Math.floor(Math.random() * categories.length)];

    //Pick random word
    const words = wordsList[category];
    const word = words[Math.floor(Math.random() * words.length)];

    return { category, word };
  };

  //Start game
  const startGame = () => {
    const { category, word } = pickWordAndCategory();
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);
    setGameStage(stages[1].nome);
  };

  //Game over
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    }else{
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ]);
      setGuesses((actualGuesses) => actualGuesses-1);
    }
  };
  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }
  useEffect(() => {
    if(guesses <= 0){
      //reset all states
      clearLetterStates();
      setGameStage(stages[2].nome);
    }
  },[guesses])
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
          pickedWord={pickedWord}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === stages[2].nome && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
