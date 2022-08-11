const TemplateExpression = () => {
    const usuario = {
        nome: "Gabriel",
        idade: 23,
        funcao: "Estagiário de tecnologia"
    }

    return(
        <div>
            <h2>Olá {usuario.nome}, seja bem-vindo ao Venturus!</h2>
            <p>Aos {usuario.idade} anos, você é {usuario.funcao}, aqui no Venturus s2.</p>
        </div>
    )
}

export default TemplateExpression;