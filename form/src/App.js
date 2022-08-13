import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <MyForm
        user={{
          nome: "Pedro",
          email: "pedro_legal@gmail.com",
          bio: "Sou um programador legal",
          funcao: "desenvolvedor",
        }}
      />
    </div>
  );
}

export default App;
