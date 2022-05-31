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
  
  
  // pessoa.setIdade(55);
  // pessoa.setNome("Renato Alves Soares")
  // console.log(pessoa.getIdade())
  // console.log(pessoa.getNome())

  // console.log(typeof null)



  class Funcionario extends Pessoa{

    constructor(id, setor, salario){
     super();
      this.id = id;
      this.setor = setor;
      this.salario = salario;
    }

    setId(id){
      this.id = id;

    }
    getId(){

      return this.id;
    }

    setSetor(setor){

      this.setor = setor;
    }

    getSetor(){

      return this.setor;
    }

    setSalario(salario){

      this.salario = salario;
    }

    getSalario(){

      return this.salario;
    }

  }


  let funcionario = new Funcionario();
  funcionario.setId(1002)
  funcionario.setNome("Raimundo");
  funcionario.setIdade(70);
  funcionario.setSetor('Sistemas WEB 2022')
  funcionario.setSalario('12000,00')


  console.log(funcionario.getId());
  console.log(funcionario.getNome());
  console.log(funcionario.getIdade());
  console.log(funcionario.getSetor());
  console.log(funcionario.getSalario());
  