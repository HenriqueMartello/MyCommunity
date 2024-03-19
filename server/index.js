const http = require("http");
const sqlite3 = require("sqlite3").verbose();

// Cria uma conexão com o banco de dados empresa.db si esta criado, si não, esse código criará uma db com esse nome.
const db = new sqlite3.Database("Usuarios.db", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Conexão estabelecida com sucesso.")
    }
});

// Criando Tabela de Usuários
db.run(
    `CREATE TABLE IF NOT EXISTS Usuarios(
        IdUsuario INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(255),
        CPF VARCHAR(11) CHECK (LENGTH(CPF) = 11),
        numeroTelefonico VARCHAR(14) CHECK (LENGTH(numeroTelefonico) <= 14),
        dataNascimento VARCHAR(8) CHECK (LENGTH(dataNascimento) = 8),
        endereco VARCHAR(255),
        email VARCHAR(255),
        senha VARCHAR(255)
    )`,
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Tabela criada com sucesso.");
        }
    }
);

// Criando Tabela de Endereços
// TO DO

// Exemplo consulta de todas as informações da tabela Usuarios.
const search = (callback) => {
    db.all("SELECT * FROM Usuarios", (err, rows) => {
        if (err) {
            console.error(err);
        } else {
            callback(rows);
        }
    });
};

// Exemplo de consulta para adicionar dados ao banco de dados Usuarios.
const insertData = db.prepare(
    `INSERT INTO Usuarios (nome, CPF, numeroTelefonico, dataNascimento, endereco, email, senha)
    VALUES (?, ?, ?, ?, ?, ?, ?)`,
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Dados inseridos com sucesso.");
        }
    }
);


// Exemplo de consulta para excluir dados do banco de dados Usuarios 
const deleteData = db.prepare(
    `DELETE FROM Usuarios WHERE IdUsuario == ?`,
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Dados excluídos com sucesso.");
        }
    }
);

// Exemplo de uma consulta para modificar os dados do banco de dados Usuarios.
const modifyData = db.prepare(
    `UPDATE Usuarios
     SET nome = ?,
         CPF = ?,
         numeroTelefonico = ?,
         dataNascimento = ?,
         endereco = ?,
         email = ?,
         senha = ?
     WHERE IdUsuario = ?`,
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Dados modificados com sucesso.");
        }
    }
);


// Criar o servidor e trazer as informações do banco de dados para o servidor - revisar posteriormente
const server = http.createServer((req, res) => {
    // Para permitir os CORS e que não tenha problema en este exemplo.
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    // Retorna todas as informações para o servidor.
    search((result) => {
        res.write(JSON.stringify(result));
        res.end();
    });

    // Verifica se é uma solicitação com o método POST.
    if (req.method === "POST") {
        let body = "";
        // Recebe as informações enviadas para o servidor.
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            // Deserializa as informações.
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            // Usa a consulta preparada para inserir os dados recebidos do Frontend.
            insertData.run(
                parsedBody.nome,
                parsedBody.CPF,
                parsedBody.numeroTelefonico,
                parsedBody.dataNascimento,
                parsedBody.endereco,
                parsedBody.email,
                parsedBody.senha
            );
            console.log("Dados criados com sucesso.");
        });


        // Verifica se é uma solicitação com o método DELETE.
    } else if (req.method === "DELETE") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            // Usamos a consulta preparada para excluir os dados que o Frontend indicar.
            deleteData.run(parsedBody.IdUsuario);
            console.log("Dados excluídos com sucesso.");
        });
        // Verifica se é uma solicitação com o método PUT.
    } else if (req.method === "PUT") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            // Usamos a consulta preparada para modificar os dados recebidos do Frontend.
            modifyData.run(
                parsedBody.nome,
                parsedBody.CPF,
                parsedBody.numeroTelefonico,
                parsedBody.dataNascimento,
                parsedBody.endereco,
                parsedBody.email,
                parsedBody.senha,
                parsedBody.IdUsuario
            );
            console.log("Dados modificados com sucesso.");
        });
    }

});

const port = 5000;
server.listen(port);
console.log(`Servidor escutando na porta ${port}.`)
