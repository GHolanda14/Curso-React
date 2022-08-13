const LearningProps = ({ marca, cor, newCar, valor }) => {
  return (
    <div>
      <h1>Detalhes técnicos do carro</h1>
      <ul>
        <li>Marca: {marca}</li>
        <li>Cor: {cor}</li>
        <li>Valor: {valor}</li>
      </ul>
      {newCar && <p>Esse carro é novo!</p>}
    </div>
  );
};

export default LearningProps;
