class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }

    setNome(valor){

        this.nome = valor;
    }
  
    getNome() {
      return this.nome
    }
  
    

    setIdade(valor){

        this.idade = valor;
    }
  
    getIdade() {
      return this.idade
    }
  }
  
  var pessoa = new Pessoa()
  
  
  pessoa.setIdade(55);
  pessoa.setNome("Renato Alves Soares")
  console.log(pessoa.getIdade())
  console.log(pessoa.getNome())