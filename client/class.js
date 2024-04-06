
class Cadastro {
    constructor(cpf, nome, cep, endereco, email, senha) {
      this.cpf = cpf;
      this.nome = nome;
      this.cep = cep;
      this.endereco = endereco;
      this.email = email;
      this.senha = senha;
    }
  
    // Getters e Setters
    getCPF() {
      return this.cpf;
    }
  
    setCPF(cpf) {
      this.cpf = cpf;
    }
  
    getNome() {
      return this.nome;
    }
  
    setNome(nome) {
      this.nome = nome;
    }
  
    getCEP() {
      return this.cep;
    }
  
    setCEP(cep) {
      this.cep = cep;
    }
  
    getEndereco() {
      return this.endereco;
    }
  
    setEndereco(endereco) {
      this.endereco = endereco;
    }
  
    getEmail() {
      return this.email;
    }
  
    setEmail(email) {
      this.email = email;
    }
  
    getSenha() {
      return this.senha;
    }
  
    setSenha(senha) {
      this.senha = senha;
    }
  }
  
  // Exemplo de utilização da classe
  const novoCadastro = new Cadastro('123.456.789-00', 'Fulano de Tal', '12345-678', 'Rua Exemplo, 123', 'fulano@example.com', 'senha123');
  
  // Acessando os campos do cadastro
  console.log('CPF:', novoCadastro.getCPF());
  console.log('Nome:', novoCadastro.getNome());
  console.log('CEP:', novoCadastro.getCEP());
  console.log('Endereço:', novoCadastro.getEndereco());
  console.log('Email:', novoCadastro.getEmail());
  console.log('Senha:', novoCadastro.getSenha());