//CSS
import './App.css';

//Data
import {wordsList} from './data/words';

//Hooks
import {useState} from 'react';

//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1,nome: "start"},
  {id: 2,nome: "game"},
  {id: 3,nome: "end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].nome);
  
  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedWord, setPickedWord] = useState("");
  const [leterrs, setLetters] = useState("");


  const pickWordAndCategory = () => {
    //Pick random category
    const categories = Object.keys(wordsList);
    const category = categories[Math.floor(Math.random() * categories.length)];
  
    //Pick random word
    const words = wordsList[category]
    const word = words[Math.floor(Math.random() * words.length)];

    return {category, word}
  }

  //Start game
  const startGame = () =>{
    const {category,word} = pickWordAndCategory();
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());
    
    setPickedCategory(category)
    setPickedWord(word)
    setLetters(wordLetters)
    setGameStage(stages[1].nome);
  }

  //Game over
  const gameOver = () => {
    setGameStage(stages[2].nome);
  }  

  //Retry
  const retry = () =>{
    setGameStage(stages[0].nome);
  }

  return (
    <div className="App">
      {gameStage === stages[0].nome && <StartScreen startGame={startGame}/>}
      {gameStage === stages[1].nome && <Game gameOver={gameOver} />}
      {gameStage === stages[2].nome && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
