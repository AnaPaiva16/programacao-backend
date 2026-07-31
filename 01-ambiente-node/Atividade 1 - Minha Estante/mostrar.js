const estante = require('"d:/Paiva/2ºSEM/PBE1/AULA1/1-ambiente-node/Atividade1-MinhaEstante./estante.js"');

console.log("=====================");
console.log("    MINHA ESTANTE    ");
console.log("=====================");
console.log("");

// ===== LIVRO 1
console.log("Titulo: " + estante.livro1.titulo);
console.log("Autor: " + estante.livro1.autor);
console.log("Preco: R$ " + estante.livro1.preco);
console.log("Estoque: " + estante.livro1.estoque + " unidades");
console.log("");

// ===== LIVRO 2
console.log("Titulo: " + estante.livro2.titulo);
console.log("Autor: " + estante.livro2.autor);
console.log("Preco: R$ " + estante.livro2.preco);
console.log("Estoque: " + estante.livro2.estoque + " unidades");
console.log("");

// ===== LIVRO 3
console.log("Titulo: " + estante.livro3.titulo);
console.log("Autor: " + estante.livro3.autor);
console.log("Preco: R$ " + estante.livro3.preco);
console.log("Estoque: " + estante.livro3.estoque + " unidades");

console.log("");
console.log("=====================");
