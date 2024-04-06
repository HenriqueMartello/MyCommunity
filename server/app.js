const express = require("express");
const app = express();
const mongoose = require("mongoose");
const porta = 5000;
app.use(express.json());
const bcrypt = require("bcrypt")

const mongoUrl = "mongodb+srv://admin:34NRWclKor3509gv@cluster0.x4vlfk5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Conexão com banco de dados do MongoDB
mongoose.connect(mongoUrl).then(() =>{
    console.log("Conexão com MongoDB realizada.");
}).catch((e) => {
    console.log(e);
})

// Importação Users
require('./UserDetails')
const User = mongoose.model("UserInfo");

// Liberação da Solicitações
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// API
app.get("/", (req, res) => {
    res.send({status: "Started"});
})

// Registro 
app.post('/registro', async(req, res)=> {
    const {nome, CPF, numeroTelefonico, dataNascimento, endereco, email, senha} = req.body;

    const emailRegistrado = await User.findOne({email: email})
    const CPFRegistrado = await User.findOne({CPF: CPF})

    // Validar se não existem usuários que já possuem registo com base no CPF ou e-mail informado
    if (emailRegistrado) {
        return res.send({status: "emailRegistrado", data: "E-mail já utilizado!"})
    }

    if (CPFRegistrado) {
        return res.send({status: "CPFRegistrado", data: "CPF já utilizado!"})
    }

    // Criptografar informações para armazenamento no banco de dados
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    try {
        await User.create({
            nome,
            CPF,
            numeroTelefonico,
            dataNascimento,
            endereco,
            email,
            senha: senhaCriptografada
        });

        res.send({status: "OK", data: "Usuário Criado"})
    } catch (e) {
        res.send({status: "ERRO", data: e})
    }
})

// Iniciar servidor
app.listen(porta, () => {
    console.log(`Servidor iniciado na porta ${porta}.`);
})