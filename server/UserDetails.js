const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const UserDetailSchema = new moongose.Schema({
    nome: String,
    CPF: {type: Number, unique: true},
    numeroTelefonico: Number,
    dataNascimento: Number,
    endereco: String,
    email: {type: String, unique: true},
    senha: String,
}, {
    collection: "UserInfo"
});

mongoose.model("UserInfo", UserDetailSchema);