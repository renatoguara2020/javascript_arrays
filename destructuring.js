let frutas = ['banana', 'maçã', 'abacate', 'mamão', 'goiaba', 'morango', 'pera', 'pêssego'];


let pessoas = ['rubens', 'sandra','risaldo', 'dona creuza', 'seu fernando', 'maria isabel'];


console.log('======================================FRUTAS===================================================')

for(let i = 0; i < frutas.length; i++){

    //console.log(frutas[i]);
}
console.log('==========================Pessoas======================================================')
for(let i = 0; i <pessoas.length; i++){

    //console.log(pessoas[i]);
}

let [p1,p2,p3,p4,p5,p6,p7="Cristina"] = pessoas;


let[f1="default",f2,f3,f4,f5,f6,f7,f8] = frutas;

// console.log(p1);
// console.log(p6);
// console.log(p7);

// console.log(f1)
// console.log(f8)


let coisas = [['abacaxi', 'pera', 'mamão', 'morango'],['josé', 'maria']]

let [[f10,f20,f30,f40], [n1,n2]] = coisas;

console.log(f10,f20,f30,f40)
console.log(n1,n2)
console.log(f20)