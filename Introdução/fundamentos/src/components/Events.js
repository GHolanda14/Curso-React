const Events = () => {
    const handleMyEvent = (e) => {
        if(e.type === "click"){
            console.log("Evento do tipo click");
        }else{
            console.log("Evento de outro tipo!");
        }
    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando pq x é verdadeiro</h1>
        }else{
            return <h1>Renderizando pq x é falso</h1>
        }
    }

    return(
        <div>
            <div>
            <button onClick={() => console.log("Evento invocado com sucesso!")}>Clique aqui</button>
            </div>
            <div>
                <button onClick={handleMyEvent}>Exemplo função maior</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;