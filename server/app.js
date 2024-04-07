const express = require("express");
const app = express();
const mongoose = require("mongoose");
const porta = 5000;
app.use(express.json());
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const mongoUrl = "mongodb+srv://admin:34NRWclKor3509gv@cluster0.x4vlfk5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const JWT_SECRET = "}9iN[y^l(KOAc2T9xOVe6ZW7D%R7i3jlJj,j)^l5";

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
});

// Registro de Usuários
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
});

// Login de Usuários
app.post('/login', async(req, res) => {
    const {CPF, senha} = req.body;
    const usuarioRegistrado = await User.findOne({CPF: CPF});

    // Falha de segurança pois em case de brute-force poderia descobrir usuários que estão registrados
    /*
    if (!usuarioRegistrado) {
        return res.send({status: "UsuarioDesconhecido", data: "Este usuário não está registrado!"});
    }
    */

    // Testar se a senha fornecida bate com o hash da senha do banco de dados
    if (await bcrypt.compare(senha, usuarioRegistrado.senha)) {
        const token = jwt.sign({ CPF: usuarioRegistrado.CPF }, JWT_SECRET);
        if (res.status(201)) {
            return res.send({status: "OK", data: token});
        } else {
            return res.send({stauts: "Erro", data: "Erro"});
        }
    } else {
        return res.send({status: "IncorrectInformation", data: "Usuario ou senha incorretos"});
    }
})
;
// Iniciar servidor
app.listen(porta, () => {
    console.log(`Servidor iniciado na porta ${porta}.`);
});