const Challenge = () => {
    const x = 10;
    const y = 30;

    return(
        <div>
            <p>Valor de x: {x}</p>
            <p>Valor de y: {y}</p>
            <button onClick={() => console.log(x + y)}>Somar</button>
        </div>
    )
}

export default Challenge;