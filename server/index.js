const express = require('express')
const app = express()

app.use("/", (req, res) => {
    res.send("Servidor está rodando.");
});

app.listen(5000, console.log("Servidor iniciou na porta 5000."));