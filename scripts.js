//console.log("Testes em Arrays")




//  const nomes = ['renato','nathan','creuza', 'sandra', 'risaldo', 'rubens','caroline','fernando','rubiana'];

// const [n1,n2,n3,n4,n5,n6,n7,n8,n9] =nomes;

// console.log(n1)
// console.log(n9)
// console.log(n5)


// for(let i = 0; i < nomes.length; i++){



//     //console.log(nomes[i]);
// }

// const letras = nomes.filter((n)=>{

//     if (n.length == 7){

//         return n;
//     }
// })


// console.log(letras)

// const arrays = [1,2,3,4,5,6,7,8,9,10,11];

// for(let i = 0; i < arrays.length; i++){

//     //console.log(arrays[i]);

// }

// const highNumbers = arrays.filter((n)=>{

//     if(n >= 4){

//         return n;
//     }
// })

//console.log(highNumbers)

// const produtos = [

//     {name: 'Camisa', price: 10.99, category: "Roupas"},
//     {name: 'Camisa Polo', price: 109.99, category: "Roupas Esportivas"},
//     {name: 'Calça Jeans', price: 80.99, category: "Roupas"},
//     {name: 'Chaleira elétrica', price: 90.99, category: "Eletrônicos"}

// ]

// produtos.map((product)=>{

// if(product.category === 'Roupas'){

//     product.onSale = true
// }
// })

// console.log(produtos)


// const nome = "Nathanzinho Soares";

// const idade = 4;

// console.log(`O ${nome} esta estudado e tem ${idade} anos`)

const a1 = [1,2,3,4,5,6,7,8,9,10]
const a2 =[11,12,13,14,15,16,17,18,19,20]

const a3 =[...a1, ...a2];

//console.log(a3)


const a5 =[0, 100,300, ...a1, 30,40]

console.log(a5)