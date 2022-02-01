const express = require("express")

const app = express()

app.get("/provasyscoin", (req, res) => {
    
    const {user, password} = req.query

    if(user == '"syscoin"' && password == '"meEscolhe"'){ 

        return res.json({mensagem: "Meu nome completo e Felipe Augusto Moreira Soares. Eu quero essa vaga!"})
    }

    return res.json({mensagem: "Credenciais erradas."})
})

app.listen(3333, () => {console.log("Server is up")})