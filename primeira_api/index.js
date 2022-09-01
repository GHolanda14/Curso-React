const express = require("express") //chamando o express
const app = express() //inicizalizando

//Lendo a requisição do JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
)



app.use(express.json())

//rotas
app.get('/',(req,res) =>{
    res.status(200).json({message: "primeira rota criada com sucesso"})
})

app.post('/createproduct', (req,res)=>{
    const name = req.body.name;
    const price = req.body.price;

    if(!name){
        res.status(424).json({message: "O nome é obrigatório!"})
        return
    }


    res.status(201).json({message: `O produto ${name} de preço ${price} foi criado com sucesso!`})
})


app.listen(3000)